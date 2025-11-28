import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { CandidateProfile } from "../../database/entities/candidate-profile.entity";
import { User } from "../../database/entities/user.entity";
import { CreateCandidateProfileDto } from "./dto/create-candidate-profile.dto";
import { UpdateCandidateProfileDto } from "./dto/update-candidate-profile.dto";

@Injectable()
export class CandidateProfilesService {
  constructor(
    @InjectRepository(CandidateProfile)
    private readonly profilesRepository: Repository<CandidateProfile>,
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>
  ) {}

  async create(payload: CreateCandidateProfileDto) {
    const user = await this.usersRepository.findOne({ where: { id: payload.userId } });
    if (!user) {
      throw new NotFoundException("User not found");
    }
    const entity = this.profilesRepository.create({
      user,
      bio: payload.bio,
      experience: payload.experience,
      skills: payload.skills,
      location: payload.location ? JSON.parse(payload.location) : undefined
    });
    return this.profilesRepository.save(entity);
  }

  findAll() {
    return this.profilesRepository.find({ relations: ["user"] });
  }

  findOne(id: string) {
    return this.profilesRepository.findOneOrFail({ where: { id }, relations: ["user"] });
  }

  async update(id: string, payload: UpdateCandidateProfileDto) {
    const entity = await this.findOne(id);
    Object.assign(entity, {
      bio: payload.bio ?? entity.bio,
      experience: payload.experience ?? entity.experience,
      skills: payload.skills ?? entity.skills,
      location: payload.location ? JSON.parse(payload.location) : entity.location
    });
    return this.profilesRepository.save(entity);
  }
}

