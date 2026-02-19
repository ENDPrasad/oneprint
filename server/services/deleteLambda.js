import { DeleteObjectCommand } from "@aws-sdk/client-s3";
import dotenv from "dotenv";

dotenv.config();

const s3 = new S3Client({
  region: process.env.S3_REGION,
});

export const handler = async (event) => {
  const { bucket, key } = event;

  try {
    await s3.send(
      new DeleteObjectCommand({
        Bucket: bucket,
        Key: key,
      }),
    );

    console.log("Deleted:", key);
  } catch (err) {
    console.error("Error at deleteLamda handler: ", err.message);
  }
};
