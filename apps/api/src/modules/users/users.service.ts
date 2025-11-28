import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { User } from "../../database/entities/user.entity";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>
  ) {}

  create(payload: CreateUserDto) {
    const entity = this.usersRepository.create(payload);
    return this.usersRepository.save(entity);
  }

  findAll() {
    return this.usersRepository.find();
  }

  findOne(id: string) {
    return this.usersRepository.findOneOrFail({ where: { id } });
  }

  async update(id: string, payload: UpdateUserDto) {
    await this.usersRepository.update({ id }, payload);
    return this.findOne(id);
  }
}

