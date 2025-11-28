import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany
} from "typeorm";

import { BaseEntity } from "./base.entity";
import { Application } from "./application.entity";
import { User } from "./user.entity";

@Entity({ name: "jobs" })
export class Job extends BaseEntity {
  @ManyToOne(() => User, (user) => user.jobs, { eager: true })
  @JoinColumn({ name: "employer_id" })
  employer!: User;

  @Column({ type: "varchar" })
  title!: string;

  @Column({ type: "text" })
  description!: string;

  @Column({ type: "jsonb", default: [] })
  requirements!: string[];

  @Column({ type: "jsonb", nullable: true })
  location?: Record<string, unknown>;

  @Column({ type: "varchar", nullable: true })
  compensation?: string;

  @Column({ type: "varchar", default: "draft" })
  status!: "draft" | "published" | "closed";

  @Column({ type: "varchar", unique: true })
  seoSlug!: string;

  @Column({ type: "jsonb", default: [] })
  meta!: Record<string, unknown>[];

  @OneToMany(() => Application, (application) => application.job)
  applications!: Application[];
}

