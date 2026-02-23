import {
  SchedulerClient,
  CreateScheduleCommand,
} from "@aws-sdk/client-scheduler";
import dotenv from "dotenv";

import { v4 as uuidv4 } from "uuid";

dotenv.config();

const S3_CREDENTIAL_ACCESS_KEY = process.env.S3_CREDENTIAL_ACCESS_KEY;
const S3_CREDENTIAL_SECRET_ACCESS_KEY =
  process.env.S3_CREDENTIAL_SECRET_ACCESS_KEY;
const S3_REGION = process.env.S3_REGION;

const scheduler = new SchedulerClient({
  region: S3_REGION,
  credentials: {
    accessKeyId: S3_CREDENTIAL_ACCESS_KEY,
    secretAccessKey: S3_CREDENTIAL_SECRET_ACCESS_KEY,
  },
});

class SchedulerService {
  static async scheduleDeletion(key, expiryDate) {
    const scheduleName = `del-${Date.now()}-${uuidv4().slice(0, 8)}`;

    // Proper format without milliseconds
    const formatted = expiryDate.toISOString().replace(/\.\d{3}Z$/, "");

    await scheduler.send(
      new CreateScheduleCommand({
        Name: scheduleName,
        ScheduleExpression: `at(${formatted})`,
        FlexibleTimeWindow: { Mode: "OFF" },

        Target: {
          Arn: process.env.DELETE_LAMBDA_ARN,
          RoleArn: process.env.SCHEDULER_ROLE_ARN,
          Input: JSON.stringify({
            bucket: process.env.S3_BUCKET,
            key: key,
          }),
        },
      }),
    );
  }
}

export default SchedulerService;
