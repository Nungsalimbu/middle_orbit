import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";

import { BaseEntity } from "./base.entity";
import { User } from "./user.entity";

@Entity({ name: "audit_logs" })
export class AuditLog extends BaseEntity {
  @ManyToOne(() => User, { nullable: true })
  @JoinColumn({ name: "actor_id" })
  actor?: User;

  @Column({ type: "varchar" })
  action!: string;

  @Column({ type: "jsonb", default: {} })
  metadata!: Record<string, unknown>;

  @Column({ type: "inet", nullable: true })
  ipAddress?: string;
}

