import { Column, Entity, Index, JoinColumn, OneToOne } from "typeorm";

import { BaseEntity } from "./base.entity";
import { User } from "./user.entity";

@Entity({ name: "candidate_profiles" })
export class CandidateProfile extends BaseEntity {
  @OneToOne(() => User, (user) => user.candidateProfiles, { onDelete: "CASCADE" })
  @JoinColumn({ name: "user_id" })
  user!: User;

  @Column({ type: "text", nullable: true })
  bio?: string;

  @Column({ type: "jsonb", default: [] })
  experience!: Record<string, unknown>[];

  @Column({ type: "jsonb", default: [] })
  skills!: string[];

  @Column({ type: "jsonb", nullable: true })
  location?: Record<string, unknown>;

  @Column({ type: "jsonb", default: [] })
  badges!: string[];

  @Column({ type: "varchar", nullable: true })
  videoResumeUrl?: string;

  @Column({ type: "varchar", default: "draft" })
  trainingStatus!: "draft" | "in_progress" | "certified";

  @Index({ spatial: true })
  @Column({ type: "geometry", nullable: true })
  geoPoint?: string;
}

