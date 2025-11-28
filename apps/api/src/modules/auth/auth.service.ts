import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

import { UsersService } from "../users/users.service";
import { LoginDto } from "./dto/login.dto";

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService
  ) {}

  async login(payload: LoginDto) {
    const user = (await this.usersService.findAll()).find((candidate) => candidate.email === payload.email);
    if (!user) {
      throw new UnauthorizedException();
    }

    const token = this.jwtService.sign({
      sub: user.id,
      role: user.role
    });

    return { accessToken: token };
  }
}

