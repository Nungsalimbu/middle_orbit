import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";

import { BaseEntity } from "./base.entity";
import { User } from "./user.entity";

@Entity({ name: "talent_pools" })
export class TalentPool extends BaseEntity {
  @ManyToOne(() => User, { onDelete: "CASCADE" })
  @JoinColumn({ name: "employer_id" })
  employer!: User;

  @Column({ type: "varchar" })
  name!: string;

  @Column({ type: "jsonb", default: {} })
  config!: Record<string, unknown>;

  @Column({ type: "jsonb", default: [] })
  segments!: Record<string, unknown>[];

  @Column({ type: "jsonb", default: [] })
  subscriptions!: Record<string, unknown>[];
}

