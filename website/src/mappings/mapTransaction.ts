import { Transaction } from "../models/Transaction";
import { mapUser } from "./mapUser";

export function mapTransaction(transactionData: any): Transaction {
    return {
        id: transactionData.id,
        createDate: transactionData.createDate,
        totalPrice: transactionData.totalPrice,
        feesIncurred: transactionData.feesIncurred,
        state: transactionData.state,
        paymentMethod: transactionData.paymentMethod,
        paymentTime: transactionData.paymentTime,
        type: transactionData.type,
        bankCode: transactionData.bankCode,
        transactionCode: transactionData.transactionCode,
        auction: transactionData.auction,
        user: mapUser(transactionData.user)
    };
}