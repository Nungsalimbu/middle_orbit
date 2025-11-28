import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";

import { BaseEntity } from "./base.entity";
import { User } from "./user.entity";

@Entity({ name: "referrals" })
export class Referral extends BaseEntity {
  @ManyToOne(() => User, { onDelete: "CASCADE" })
  @JoinColumn({ name: "referrer_id" })
  referrer!: User;

  @ManyToOne(() => User, { onDelete: "CASCADE" })
  @JoinColumn({ name: "candidate_id" })
  candidate!: User;

  @Column({ type: "numeric", precision: 10, scale: 2, default: 0 })
  payoutAmount!: number;

  @Column({ type: "varchar", default: "pending" })
  status!: "pending" | "approved" | "paid";

  @Column({ type: "jsonb", default: [] })
  milestones!: Record<string, unknown>[];
}

