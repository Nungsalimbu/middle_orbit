import { Injectable } from "@nestjs/common";

@Injectable()
export class AnalyticsService {
  hiringFunnelSnapshot() {
    return {
      timeToFill: 9.3,
      costPerHire: 1300,
      retention12Mo: 0.89
    };
  }
}

