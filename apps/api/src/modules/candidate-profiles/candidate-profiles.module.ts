import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { CandidateProfile } from "../../database/entities/candidate-profile.entity";
import { User } from "../../database/entities/user.entity";
import { CandidateProfilesController } from "./candidate-profiles.controller";
import { CandidateProfilesService } from "./candidate-profiles.service";

@Module({
  imports: [TypeOrmModule.forFeature([CandidateProfile, User])],
  controllers: [CandidateProfilesController],
  providers: [CandidateProfilesService],
  exports: [CandidateProfilesService]
})
export class CandidateProfilesModule {}

