export class Auction {
    id: number;
    name: string;
    startDate: string;
    endDate: string;
    description: string;
    countdownDuration: number;
    firstPrice: number;
    lastPrice: number;
    participationFee: number;
    deposit: number;
    priceStep: number;


	constructor(id: number, name: string, startDate: string, endDate: string, 
        description: string, countdownDuration: number, firstPrice: 
        number, lastPrice: number, participantFee: number, deposit: number, priceStep: number) {
        this.id = id;
        this.name = name;
        this.startDate = startDate;
        this.endDate = endDate;
        this.description = description;
        this.countdownDuration = countdownDuration;
        this.firstPrice = firstPrice;
        this.countdownDuration = countdownDuration;
        this.lastPrice = lastPrice;
        this.participationFee = participantFee;
        this.deposit = deposit;
        this.priceStep = priceStep;
	}
    

}