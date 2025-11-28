import { Injectable } from "@nestjs/common";

@Injectable()
export class ReferralsService {
  listIncentives() {
    return [
      { tier: "Skilled", payout: 400, currency: "USD" },
      { tier: "Leadership", payout: 950, currency: "USD" }
    ];
  }
}

