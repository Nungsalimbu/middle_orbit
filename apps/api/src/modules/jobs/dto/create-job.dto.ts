import { IsArray, IsJSON, IsOptional, IsString } from "class-validator";

export class CreateJobDto {
  @IsString()
  employerId!: string;

  @IsString()
  title!: string;

  @IsString()
  description!: string;

  @IsArray()
  requirements!: string[];

  @IsOptional()
  @IsJSON()
  location?: string;

  @IsOptional()
  @IsString()
  compensation?: string;
}

