import { Body, Controller, Get, Post } from "@nestjs/common";

import { CreateTalentPoolDto } from "./dto/create-talent-pool.dto";
import { TalentPoolsService } from "./talent-pools.service";

@Controller("talent-pools")
export class TalentPoolsController {
  constructor(private readonly talentPoolsService: TalentPoolsService) {}

  @Post()
  create(@Body() payload: CreateTalentPoolDto) {
    return this.talentPoolsService.create(payload);
  }

  @Get()
  findAll() {
    return this.talentPoolsService.findAll();
  }
}

