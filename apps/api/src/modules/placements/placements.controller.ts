import { Body, Controller, Get, Post } from "@nestjs/common";

import { CreatePlacementDto } from "./dto/create-placement.dto";
import { PlacementsService } from "./placements.service";

@Controller("placements")
export class PlacementsController {
  constructor(private readonly placementsService: PlacementsService) {}

  @Post()
  create(@Body() payload: CreatePlacementDto) {
    return this.placementsService.create(payload);
  }

  @Get()
  findAll() {
    return this.placementsService.findAll();
  }
}

