import { Column, Entity, JoinColumn, OneToOne } from "typeorm";

import { BaseEntity } from "./base.entity";
import { Application } from "./application.entity";

@Entity({ name: "placements" })
export class Placement extends BaseEntity {
  @OneToOne(() => Application, (application) => application.placement, {
    onDelete: "CASCADE",
    eager: true
  })
  @JoinColumn({ name: "application_id" })
  application!: Application;

  @Column({ type: "date" })
  startDate!: string;

  @Column({ type: "varchar", nullable: true })
  contractUrl?: string;

  @Column({ type: "jsonb", default: [] })
  transparencyTimeline!: Record<string, unknown>[];

  @Column({ type: "jsonb", default: {} })
  roiMetrics!: Record<string, unknown>;
}

