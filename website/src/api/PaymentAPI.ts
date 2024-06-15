import BASE_URL from "../config/config";
import { MyRequest } from "./MyRequest";


export const handlePay = async (amount: number, auctionId: number, username: string, transactionId: number) => {
    let URL: string = '';
    if (transactionId === 0) {
        URL = `${BASE_URL}/payment/vn-pay?amount=${amount}&auctionId=${auctionId}&username=${username}`;
    } else {
        URL = `${BASE_URL}/payment/vn-pay?amount=${amount}&auctionId=${auctionId}&username=${username}&transactionId=${transactionId}`;
    }
    const response = await MyRequest(URL);
    if (response) {
        window.location.href = response.data.paymentUrl;
    } else {
        throw new Error("GD ko thanh cong");
    }
}