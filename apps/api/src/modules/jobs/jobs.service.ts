import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import slugify from "slugify";
import { Repository } from "typeorm";

import { Job } from "../../database/entities/job.entity";
import { User } from "../../database/entities/user.entity";
import { CreateJobDto } from "./dto/create-job.dto";
import { UpdateJobDto } from "./dto/update-job.dto";

@Injectable()
export class JobsService {
  constructor(
    @InjectRepository(Job)
    private readonly jobsRepository: Repository<Job>,
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>
  ) {}

  async create(payload: CreateJobDto) {
    const employer = await this.usersRepository.findOne({ where: { id: payload.employerId } });
    if (!employer) {
      throw new NotFoundException("Employer not found");
    }
    const entity = this.jobsRepository.create({
      employer,
      title: payload.title,
      description: payload.description,
      requirements: payload.requirements,
      location: payload.location ? JSON.parse(payload.location) : undefined,
      compensation: payload.compensation,
      status: "published",
      seoSlug: slugify(`${payload.title}-${Date.now()}`, { lower: true })
    });
    return this.jobsRepository.save(entity);
  }

  findAll() {
    return this.jobsRepository.find({ relations: ["employer"] });
  }

  findOne(id: string) {
    return this.jobsRepository.findOneOrFail({ where: { id }, relations: ["employer"] });
  }

  async update(id: string, payload: UpdateJobDto) {
    const entity = await this.findOne(id);
    Object.assign(entity, {
      title: payload.title ?? entity.title,
      description: payload.description ?? entity.description,
      requirements: payload.requirements ?? entity.requirements,
      location: payload.location ? JSON.parse(payload.location) : entity.location,
      compensation: payload.compensation ?? entity.compensation
    });
    return this.jobsRepository.save(entity);
  }
}

