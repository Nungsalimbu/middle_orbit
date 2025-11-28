import { Body, Controller, Get, Param, Patch, Post } from "@nestjs/common";

import { CandidateProfilesService } from "./candidate-profiles.service";
import { CreateCandidateProfileDto } from "./dto/create-candidate-profile.dto";
import { UpdateCandidateProfileDto } from "./dto/update-candidate-profile.dto";

@Controller("candidate-profiles")
export class CandidateProfilesController {
  constructor(private readonly profilesService: CandidateProfilesService) {}

  @Post()
  create(@Body() payload: CreateCandidateProfileDto) {
    return this.profilesService.create(payload);
  }

  @Get()
  findAll() {
    return this.profilesService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.profilesService.findOne(id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() payload: UpdateCandidateProfileDto) {
    return this.profilesService.update(id, payload);
  }
}

