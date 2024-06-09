import { District } from "./District";

export interface City {
    Id: string;
    Name: string;
    Districts: District[];
}