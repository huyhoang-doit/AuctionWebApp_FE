import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { getUserLogin } from "../api/UserAPI";
import { User } from "../models/User";

const useAccount = (token : string | null) => {
    const [account, setAccount] = useState<User | null>(null);

    useEffect(() => {
        if (token) {
            const userData = jwtDecode<{ sub: string }>(token);
            if (userData) {
                const decodedUsername = userData.sub;
                getUserLogin(decodedUsername)
                    .then((data) => {
                        setAccount(data);
                    })
                    .catch((error) => {
                        console.log(error.message);
                    });
            }
        }
    }, [token]);
    return account;
}

export default useAccount;