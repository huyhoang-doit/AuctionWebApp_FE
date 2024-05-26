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
    province?: string;
    city?: string;
    yob?: string;
    cccd?: string;
    avatar?: string;
    bank? : Bank;
    bankAccountNumber? : string;
    bankAccountName? : string;

    constructor(id: number, username: string, fullName: string,
        firstName: string, lastName: string, password:
            string, email: string, phone: string, address: string, 
            province: string, city: string, yob: string, cccd: string,
             bank: Bank, bankAccountNumber: string, bankAccountName: string) {
        this.id = id;
        this.username = username;
        this.fullName = fullName;
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.province = province;
        this.city = city;
        this.yob = yob;
        this.cccd = cccd;
        this.bank = bank;
        this.bankAccountNumber = bankAccountNumber;
        this.bankAccountName = bankAccountName;
    }

}