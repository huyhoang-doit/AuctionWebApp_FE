import { Ward } from "./Ward";

export interface District {
    Id: string;
    Name: string;
    Wards: Ward[];
}