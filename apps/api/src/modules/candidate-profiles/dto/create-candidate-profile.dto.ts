import { IsArray, IsJSON, IsOptional, IsString } from "class-validator";

export class CreateCandidateProfileDto {
  @IsString()
  userId!: string;

  @IsOptional()
  @IsString()
  bio?: string;

  @IsArray()
  skills!: string[];

  @IsOptional()
  @IsArray()
  experience?: Record<string, unknown>[];

  @IsOptional()
  @IsJSON()
  location?: string;
}

