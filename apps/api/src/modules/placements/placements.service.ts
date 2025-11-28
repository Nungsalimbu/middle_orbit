import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { Application } from "../../database/entities/application.entity";
import { Placement } from "../../database/entities/placement.entity";
import { CreatePlacementDto } from "./dto/create-placement.dto";

@Injectable()
export class PlacementsService {
  constructor(
    @InjectRepository(Placement)
    private readonly placementsRepository: Repository<Placement>,
    @InjectRepository(Application)
    private readonly applicationsRepository: Repository<Application>
  ) {}

  async create(payload: CreatePlacementDto) {
    const application = await this.applicationsRepository.findOneOrFail({
      where: { id: payload.applicationId },
      relations: ["job", "candidate"]
    });
    const entity = this.placementsRepository.create({
      application,
      startDate: payload.startDate,
      contractUrl: payload.contractUrl,
      transparencyTimeline: payload.transparencyTimeline
        ? JSON.parse(payload.transparencyTimeline)
        : [
            { status: "offer", timestamp: new Date().toISOString() },
            { status: "accepted", timestamp: payload.startDate }
          ],
      roiMetrics: payload.roiMetrics ? JSON.parse(payload.roiMetrics) : {}
    });
    return this.placementsRepository.save(entity);
  }

  findAll() {
    return this.placementsRepository.find({ relations: ["application", "application.job"] });
  }
}

