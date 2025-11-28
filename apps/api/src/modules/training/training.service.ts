import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { TrainingModule as TrainingEntity } from "../../database/entities/training-module.entity";

@Injectable()
export class TrainingService {
  constructor(
    @InjectRepository(TrainingEntity)
    private readonly trainingRepository: Repository<TrainingEntity>
  ) {}

  findAll() {
    return this.trainingRepository.find();
  }
}

