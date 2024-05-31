import { createContext } from "react";
import { User } from "../models/User";

interface UserContextType {
    user: User | null;
}

export const UserContext = createContext<UserContextType | null>(null);