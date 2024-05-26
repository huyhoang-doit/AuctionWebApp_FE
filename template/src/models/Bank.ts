export class Bank {
    id: number;
    bankName: string;
    logo: string;
    tradingName: string;

    constructor(id: number, bankName: string, logo: string,
        tradingName: string) {
        this.id = id;
        this.bankName = bankName;
        this.logo = logo;
        this.tradingName = tradingName;
    }


}