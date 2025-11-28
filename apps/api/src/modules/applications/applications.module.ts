import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { Application } from "../../database/entities/application.entity";
import { CandidateProfile } from "../../database/entities/candidate-profile.entity";
import { Job } from "../../database/entities/job.entity";
import { ApplicationsController } from "./applications.controller";
import { ApplicationsService } from "./applications.service";

@Module({
  imports: [TypeOrmModule.forFeature([Application, Job, CandidateProfile])],
  controllers: [ApplicationsController],
  providers: [ApplicationsService],
  exports: [ApplicationsService]
})
export class ApplicationsModule {}

