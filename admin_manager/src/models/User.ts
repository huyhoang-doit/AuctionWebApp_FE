export class User {
    id: number;
    username?: string;
    fullName?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    address?: string;
    district?: string;
    ward?: string;
    city?: string;
    yob?: string;
    cccd?: string;
    avatar?: string;
    bankAccountNumber?: string;
    bankAccountName?: string;
    state?: string;

    constructor(id: number, username: string, fullName: string,
        firstName: string, lastName: string,
        email: string, phone: string, address: string,
        district: string, ward: string, city: string, yob: string, cccd: string,
        bankAccountNumber: string, bankAccountName: string, state: string) {
        this.id = id;
        this.username = username;
        this.fullName = fullName;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.district = district;
        this.ward = ward;
        this.city = city;
        this.yob = yob;
        this.cccd = cccd;
        this.bankAccountNumber = bankAccountNumber;
        this.bankAccountName = bankAccountName;
        this.state = state;
    }

}