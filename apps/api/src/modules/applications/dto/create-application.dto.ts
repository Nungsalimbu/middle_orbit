import { IsNumber, IsOptional, IsString } from "class-validator";

export class CreateApplicationDto {
  @IsString()
  jobId!: string;

  @IsString()
  candidateProfileId!: string;

  @IsOptional()
  @IsNumber()
  aiFitScore?: number;
}

