import { Column, Entity, Index, OneToMany } from "typeorm";

import { BaseEntity } from "./base.entity";
import { CandidateProfile } from "./candidate-profile.entity";
import { Job } from "./job.entity";

export type UserRole = "admin" | "employer" | "candidate" | "recruiter";

@Entity({ name: "users" })
export class User extends BaseEntity {
  @Column({ type: "varchar", length: 160 })
  firstName!: string;

  @Column({ type: "varchar", length: 160 })
  lastName!: string;

  @Index({ unique: true })
  @Column({ type: "citext" })
  email!: string;

  @Column({ type: "varchar", nullable: true })
  phone?: string;

  @Column({ type: "varchar", default: "password" })
  authProvider!: "password" | "google" | "microsoft";

  @Column({ type: "varchar", nullable: true })
  oauthId?: string;

  @Column({ type: "varchar", default: "candidate" })
  role!: UserRole;

  @Column({ type: "boolean", default: false })
  twoFactorEnabled!: boolean;

  @Column({ type: "jsonb", default: {} })
  metadata!: Record<string, unknown>;

  @OneToMany(() => CandidateProfile, (profile) => profile.user)
  candidateProfiles!: CandidateProfile[];

  @OneToMany(() => Job, (job) => job.employer)
  jobs!: Job[];
}

