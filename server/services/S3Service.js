import {
  S3Client,
  GetObjectCommand,
  PutObjectCommand,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import dotenv from "dotenv";
import { v4 as uuidv4 } from "uuid";

dotenv.config();

const S3_BUCKET = process.env.S3_BUCKET;
const S3_REGION = process.env.S3_REGION;
const S3_CREDENTIAL_ACCESS_KEY = process.env.S3_CREDENTIAL_ACCESS_KEY;
const S3_CREDENTIAL_SECRET_ACCESS_KEY =
  process.env.S3_CREDENTIAL_SECRET_ACCESS_KEY;

export default class S3Service {
  s3Client = null;
  constructor() {
    this.s3Client = new S3Client({
      region: S3_REGION,
      credentials: {
        accessKeyId: S3_CREDENTIAL_ACCESS_KEY,
        secretAccessKey: S3_CREDENTIAL_SECRET_ACCESS_KEY,
      },
    });
  }

  async uploadFile(file) {
    const key = `temp/${uuidv4()}-${file.originalname}`;

    await this.s3Client.send(
      new PutObjectCommand({
        Bucket: S3_BUCKET,
        Key: key,
        Body: file.buffer,
        ContentType: file.mimetype,
      }),
    );

    return key;
  }

  async getObjectURL(key, expiresInSeconds) {
    const command = new GetObjectCommand({
      Bucket: S3_BUCKET,
      Key: key,
    });
    return await getSignedUrl(this.s3Client, command, {
      expiresIn: expiresInSeconds,
    });
  }
}
