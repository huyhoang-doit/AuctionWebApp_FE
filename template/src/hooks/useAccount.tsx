import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { getUserLogin } from "../api/UserAPI";
import { User } from "../models/User";

const useAccount = () => {
    const [account, setAccount] = useState<User | null>(null);
    const token = localStorage.getItem("token");
    
    useEffect(() => {
        if (token) {
            const userData = jwtDecode(token);
            if (userData) {
                const decodedUsername = userData.sub + "";
                getUserLogin(decodedUsername)
                    .then((data) => {
                        setAccount(data);
                    })
                    .catch((error) => {
                        console.log(error.message);
                    });
            }
        }
    }, [account]);
    return account;
}

export default useAccount;