interface LoginRequest {
    username: string;
    password: string;
}

interface RegisterRequest {
    id: number,
    username: string;
    password: string;
    email: string;
    firstName: string;
    lastName: string;
    phone: string;
    address: string;
    province: string;
    city: string;
    yob: string;
    CCCD: string;
}

export const login = async (loginRequest: LoginRequest, setError: (message: string) => void) => {
    // end-point
    const URL = `http://localhost:8080/api/v1/auth/authenticate`;

    // call api
    try {
        const response = await fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(loginRequest),
        });

        console.log(response)
        if (response.status === 200) {
            const data = await response.json();
            const jwt = data.token;
            localStorage.setItem('token', jwt);
            return true;
        } else if (response.status === 202) {
            throw new Error('Your account is inactive, you need check email to active your account!');
        } else {
            throw new Error('Login failed. Please check your username and password!');
        }
    } catch (error) {
        setError((error as Error).message);
        return false;
    }
};


export const register = async (registerRequest: RegisterRequest): Promise<boolean> => {
    // end-point
    const URL = `http://localhost:8080/api/v1/auth/register`;
    const role = "MEMBER"
    // call api
    try {
        const response = await fetch(URL, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({ ...registerRequest, role }),
        });

        console.log(response);

        if (!response.ok) {
            throw new Error(`Không thể truy cập ${URL}`);
        }
        return true;
    } catch (error) {
        console.error("Error: " + error);
        return false;
    }
};

export const handleActiveUser = async (token: string): Promise<boolean> => {
    try {
        const URL: string = `http://localhost:8080/api/v1/auth/activation`;
        const response = await fetch(URL, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({ token }),
        });
        
        if (response.ok) {
            return true;
        } else {
            throw new Error(`Không thể truy cập ${URL}`);
        }

    } catch (error) {
        console.error("Error: " + error);
        return false;
    }
}