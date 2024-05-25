export class Bank {
    id: number;
    bankName?: string;
    tradingName?: string;

	constructor(id: number, bankName: string, 
        tradingName: string) {
        this.id = id;
        this.bankName = bankName;
        this.tradingName = tradingName;
	}
    

}