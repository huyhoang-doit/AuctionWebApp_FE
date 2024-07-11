import { Bank } from "./Bank";

export class User {
    id: number;
    username?: string;
    fullName?: string;
    firstName?: string;
    lastName?: string;
    password?: string;
    email?: string;
    phone?: string;
    address?: string;
    district?: string;
    ward?: string;
    city?: string;
    yob?: string;
    cccd?: string;
    avatar?: string;
    state?: string;
    bank?: Bank;
    bankAccountNumber?: string;
    bankAccountName?: string;
    totalSpent?: number;
    cccdFirst?: string;
    cccdLast?: string;
    cccdFrom?: string;
    banReason? : string;

    constructor(id: number, username: string, fullName: string, state: string,
        firstName: string, lastName: string, password: string,
        cccdFirst: string, cccdLast: string, cccdFrom: string, email: string, phone: string, address: string,
        district: string, ward: string, city: string, yob: string, cccd: string,
        bank: Bank, bankAccountNumber: string, bankAccountName: string, totalSpent: number, banReason: string) {
        this.id = id;
        this.username = username;
        this.fullName = fullName;
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.district = district;
        this.ward = ward;
        this.city = city;
        this.yob = yob;
        this.cccd = cccd;
        this.bank = bank;
        this.state = state;
        this.bankAccountNumber = bankAccountNumber;
        this.bankAccountName = bankAccountName;
        this.totalSpent = totalSpent;
        this.cccdFirst = cccdFirst;
        this.cccdLast = cccdLast;
        this.cccdFrom = cccdFrom;
        this.banReason = banReason;
    }

}