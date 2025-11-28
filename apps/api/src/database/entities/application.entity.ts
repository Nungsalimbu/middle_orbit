import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne
} from "typeorm";

import { BaseEntity } from "./base.entity";
import { CandidateProfile } from "./candidate-profile.entity";
import { Job } from "./job.entity";
import { Placement } from "./placement.entity";

@Entity({ name: "applications" })
export class Application extends BaseEntity {
  @ManyToOne(() => Job, (job) => job.applications, { onDelete: "CASCADE" })
  @JoinColumn({ name: "job_id" })
  job!: Job;

  @ManyToOne(() => CandidateProfile, { eager: true })
  @JoinColumn({ name: "candidate_profile_id" })
  candidate!: CandidateProfile;

  @Column({ type: "varchar", default: "applied" })
  status!: "applied" | "shortlisted" | "interviewing" | "offer" | "hired" | "rejected";

  @Column({ type: "numeric", precision: 5, scale: 2, nullable: true })
  aiFitScore?: number;

  @Column({ type: "jsonb", default: [] })
  explainability!: Record<string, unknown>[];

  @Column({ type: "jsonb", default: [] })
  timeline!: Record<string, unknown>[];

  @Column({ type: "jsonb", nullable: true })
  interviewFeedback?: Record<string, unknown>;

  @OneToOne(() => Placement, (placement) => placement.application)
  placement?: Placement;
}

