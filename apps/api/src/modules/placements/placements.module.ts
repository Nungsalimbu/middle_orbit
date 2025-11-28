import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { Application } from "../../database/entities/application.entity";
import { Placement } from "../../database/entities/placement.entity";
import { PlacementsController } from "./placements.controller";
import { PlacementsService } from "./placements.service";

@Module({
  imports: [TypeOrmModule.forFeature([Placement, Application])],
  controllers: [PlacementsController],
  providers: [PlacementsService],
  exports: [PlacementsService]
})
export class PlacementsModule {}

