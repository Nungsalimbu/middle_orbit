import { IsEmail, IsEnum, IsOptional, IsString, MinLength } from "class-validator";

import { UserRole } from "../../../database/entities/user.entity";

export class CreateUserDto {
  @IsString()
  firstName!: string;

  @IsString()
  lastName!: string;

  @IsEmail()
  email!: string;

  @IsOptional()
  @IsString()
  phone?: string;

  @IsEnum(["password", "google", "microsoft"])
  authProvider!: "password" | "google" | "microsoft";

  @IsOptional()
  @IsString()
  @MinLength(8)
  password?: string;

  @IsEnum(["admin", "employer", "candidate", "recruiter"])
  role!: UserRole;
}

