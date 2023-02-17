import { DioAccount } from "./DioAccount";

export class PremiumAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  deposit = (amount: number): void => {
    if (this.validateStatus() && amount > 0) {
      this.balance += amount + 10;
      console.log(`Depósito de ${amount} realizado com sucesso!`);
    }
  }
}
 