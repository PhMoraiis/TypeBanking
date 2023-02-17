import { CompanyAccount } from "./class/CompanyAccount";
import { PremiumAccount } from "./class/PremiumAccount";

// Criando uma instância de CompanyAccount
const companyAccount = new CompanyAccount("Ciclano", 67890);
companyAccount.getLoan(500);
companyAccount.getBalance();

// Criando uma instância de PremiumAccount
const premiumAccount = new PremiumAccount("Beltrano", 54321);
premiumAccount.deposit(200);
premiumAccount.getBalance();
