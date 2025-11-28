import { Injectable } from "@nestjs/common";
import { S3 } from "aws-sdk";

@Injectable()
export class ContractsService {
  private readonly s3 = new S3({ region: process.env.AWS_REGION });

  async generateContract(payload: Record<string, unknown>) {
    const key = `contracts/${payload["applicationId"]}-${Date.now()}.json`;
    await this.s3
      .putObject({
        Bucket: process.env.S3_BUCKET ?? "",
        Key: key,
        Body: JSON.stringify(payload),
        ContentType: "application/json"
      })
      .promise();

    return {
      key,
      url: `https://${process.env.S3_BUCKET}.s3.amazonaws.com/${key}`
    };
  }
}

