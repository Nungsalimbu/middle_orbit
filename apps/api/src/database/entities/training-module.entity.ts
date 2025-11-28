import { Column, Entity } from "typeorm";

import { BaseEntity } from "./base.entity";

@Entity({ name: "training_modules" })
export class TrainingModule extends BaseEntity {
  @Column({ type: "varchar" })
  title!: string;

  @Column({ type: "text" })
  description!: string;

  @Column({ type: "integer" })
  durationMinutes!: number;

  @Column({ type: "jsonb", default: [] })
  badgesAwarded!: string[];

  @Column({ type: "jsonb", default: [] })
  contentBlocks!: Record<string, unknown>[];
}

