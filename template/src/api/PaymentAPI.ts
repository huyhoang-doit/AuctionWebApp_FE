import { MyRequest } from "./MyRequest";

export const handlePay = async (amount: number, auctionId: number, username: string) => {
    const URL: string = `http://localhost:8080/api/v1/payment/vn-pay?amount=${amount}&auctionId=${auctionId}&username=${username}`;
    const response = await MyRequest(URL);

    if (response) {
        window.location.href = response.data.paymentUrl;
    } else {
        throw new Error("GD ko thanh cong");
    }
}