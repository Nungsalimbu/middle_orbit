import { IsDateString, IsJSON, IsNumberString, IsOptional, IsString } from "class-validator";

export class CreatePlacementDto {
  @IsString()
  applicationId!: string;

  @IsDateString()
  startDate!: string;

  @IsOptional()
  @IsString()
  contractUrl?: string;

  @IsOptional()
  @IsJSON()
  transparencyTimeline?: string;

  @IsOptional()
  @IsJSON()
  roiMetrics?: string;
}

