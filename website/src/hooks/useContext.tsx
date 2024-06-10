import { createContext } from "react";
import { User } from "../models/User";

interface UserContextType {
    account: User | null;
    setAccount: (user: User) => void;
}

export const UserContext = createContext<UserContextType | null>(null);