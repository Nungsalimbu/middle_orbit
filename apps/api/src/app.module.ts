import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { ThrottlerModule } from "@nestjs/throttler";
import { TypeOrmModule } from "@nestjs/typeorm";

import { configuration } from "./config/configuration";
import { validationSchema } from "./config/validation";
import { AnalyticsModule } from "./modules/analytics/analytics.module";
import { ApplicationsModule } from "./modules/applications/applications.module";
import { AuthModule } from "./modules/auth/auth.module";
import { CandidateProfilesModule } from "./modules/candidate-profiles/candidate-profiles.module";
import { ContractsModule } from "./modules/contracts/contracts.module";
import { JobsModule } from "./modules/jobs/jobs.module";
import { PlacementsModule } from "./modules/placements/placements.module";
import { ReferralsModule } from "./modules/referrals/referrals.module";
import { TalentPoolsModule } from "./modules/talent-pools/talent-pools.module";
import { TrainingModule } from "./modules/training/training.module";
import { UsersModule } from "./modules/users/users.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      validationSchema
    }),
    ThrottlerModule.forRoot([
      {
        ttl: 60,
        limit: 120
      }
    ]),
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: "postgres",
        url: process.env.DATABASE_URL,
        autoLoadEntities: true,
        synchronize: false,
        logging: ["error", "schema"]
      })
    }),
    UsersModule,
    CandidateProfilesModule,
    JobsModule,
    ApplicationsModule,
    PlacementsModule,
    TalentPoolsModule,
    ReferralsModule,
    TrainingModule,
    ContractsModule,
    AnalyticsModule,
    AuthModule
  ]
})
export class AppModule {}

