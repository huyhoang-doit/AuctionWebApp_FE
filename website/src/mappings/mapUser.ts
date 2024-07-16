import { User } from "../models/User";

export function mapUser(userData: any): User {
    return {
        id: userData.id,
        username: userData.username,
        fullName: userData.fullName,
        firstName: userData.firstName,
        lastName: userData.lastName,
        password: userData.password,
        state: userData.state,
        cccdFirst: userData.cccdFirst,
        cccdLast: userData.cccdLast,
        cccdFrom: userData.cccdFrom,
        email: userData.email,
        phone: userData.phone,
        address: userData.address,
        district: userData.district,
        ward: userData.ward,
        city: userData.city,
        yob: userData.yob,
        cccd: userData.cccd,
        bank: userData.bank,
        bankAccountNumber: userData.bankAccountNumber,
        bankAccountName: userData.bankAccountName,
        banReason: userData.banReason
    };
}