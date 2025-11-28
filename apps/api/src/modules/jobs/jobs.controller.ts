import { Body, Controller, Get, Param, Patch, Post } from "@nestjs/common";

import { CreateJobDto } from "./dto/create-job.dto";
import { UpdateJobDto } from "./dto/update-job.dto";
import { JobsService } from "./jobs.service";

@Controller("jobs")
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

  @Post()
  create(@Body() payload: CreateJobDto) {
    return this.jobsService.create(payload);
  }

  @Get()
  findAll() {
    return this.jobsService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.jobsService.findOne(id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() payload: UpdateJobDto) {
    return this.jobsService.update(id, payload);
  }
}

