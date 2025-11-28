import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { TalentPool } from "../../database/entities/talent-pool.entity";
import { User } from "../../database/entities/user.entity";
import { CreateTalentPoolDto } from "./dto/create-talent-pool.dto";

@Injectable()
export class TalentPoolsService {
  constructor(
    @InjectRepository(TalentPool)
    private readonly talentPoolsRepository: Repository<TalentPool>,
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>
  ) {}

  async create(payload: CreateTalentPoolDto) {
    const employer = await this.usersRepository.findOneOrFail({ where: { id: payload.employerId } });
    const entity = this.talentPoolsRepository.create({
      employer,
      name: payload.name,
      config: payload.config ? JSON.parse(payload.config) : {}
    });
    return this.talentPoolsRepository.save(entity);
  }

  findAll() {
    return this.talentPoolsRepository.find({ relations: ["employer"] });
  }
}

