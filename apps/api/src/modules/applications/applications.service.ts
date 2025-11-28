import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { Application } from "../../database/entities/application.entity";
import { CandidateProfile } from "../../database/entities/candidate-profile.entity";
import { Job } from "../../database/entities/job.entity";
import { CreateApplicationDto } from "./dto/create-application.dto";
import { UpdateApplicationDto } from "./dto/update-application.dto";

@Injectable()
export class ApplicationsService {
  constructor(
    @InjectRepository(Application)
    private readonly applicationsRepository: Repository<Application>,
    @InjectRepository(Job)
    private readonly jobsRepository: Repository<Job>,
    @InjectRepository(CandidateProfile)
    private readonly profilesRepository: Repository<CandidateProfile>
  ) {}

  async create(payload: CreateApplicationDto) {
    const [job, candidate] = await Promise.all([
      this.jobsRepository.findOneOrFail({ where: { id: payload.jobId } }),
      this.profilesRepository.findOneOrFail({ where: { id: payload.candidateProfileId } })
    ]);
    const entity = this.applicationsRepository.create({
      job,
      candidate,
      aiFitScore: payload.aiFitScore,
      timeline: [
        {
          status: "applied",
          timestamp: new Date().toISOString()
        }
      ]
    });
    return this.applicationsRepository.save(entity);
  }

  findAll() {
    return this.applicationsRepository.find({
      relations: ["job", "candidate", "candidate.user"]
    });
  }

  findOne(id: string) {
    return this.applicationsRepository.findOneOrFail({
      where: { id },
      relations: ["job", "candidate", "candidate.user", "placement"]
    });
  }

  async update(id: string, payload: UpdateApplicationDto) {
    const entity = await this.findOne(id);
    Object.assign(entity, {
      aiFitScore: payload.aiFitScore ?? entity.aiFitScore
    });
    return this.applicationsRepository.save(entity);
  }
}

