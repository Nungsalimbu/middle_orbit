import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { TrainingModule as TrainingEntity } from "../../database/entities/training-module.entity";
import { TrainingService } from "./training.service";

@Module({
  imports: [TypeOrmModule.forFeature([TrainingEntity])],
  providers: [TrainingService],
  exports: [TrainingService]
})
export class TrainingModule {}

