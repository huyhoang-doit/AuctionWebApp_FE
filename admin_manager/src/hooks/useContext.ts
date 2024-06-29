import React from "react";
import { User } from "../models/User";

interface UserContextType {
    account: User | null;
}

export const UserContext = React.createContext<UserContextType | undefined>(undefined);