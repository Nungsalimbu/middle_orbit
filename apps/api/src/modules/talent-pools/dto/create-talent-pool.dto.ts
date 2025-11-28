import { IsJSON, IsOptional, IsString } from "class-validator";

export class CreateTalentPoolDto {
  @IsString()
  employerId!: string;

  @IsString()
  name!: string;

  @IsOptional()
  @IsJSON()
  config?: string;
}

