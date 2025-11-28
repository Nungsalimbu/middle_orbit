import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { TalentPool } from "../../database/entities/talent-pool.entity";
import { User } from "../../database/entities/user.entity";
import { TalentPoolsController } from "./talent-pools.controller";
import { TalentPoolsService } from "./talent-pools.service";

@Module({
  imports: [TypeOrmModule.forFeature([TalentPool, User])],
  controllers: [TalentPoolsController],
  providers: [TalentPoolsService],
  exports: [TalentPoolsService]
})
export class TalentPoolsModule {}

