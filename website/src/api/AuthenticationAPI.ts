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
    district: string;
    ward: string;
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
            credentials: 'include',
        });

        if (response.status === 200) {
            const data = await response.json();
            const jwt = data.access_token;
            // const refreshToken = data.refresh_token;

            localStorage.setItem('access_token', jwt);
            // localStorage.setItem('refresh_token', refreshToken);

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

export const logout = async () => {
    const accessToken = localStorage.getItem('access_token');
    if (!accessToken) {
        return;
    }

    try {
        const response = await fetch('http://localhost:8080/api/v1/auth/logout', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            },
            credentials: 'include',
        });

        if (response.ok) {
            // Clear tokens from local storage
            localStorage.removeItem('access_token');
            // localStorage.removeItem('refresh_token');

            // Redirect to login page
            window.location.href = '/dang-nhap';
        } else {
            throw new Error('Logout failed');
        }
    } catch (error) {
        console.error('Error logging out:', error);
    }
};

let refreshTokenPromise: Promise<string | void> | null = null;
export async function ensureAccessToken() {

    if (refreshTokenPromise) {
        await refreshTokenPromise;
        return;
    }

    refreshTokenPromise = refreshToken();
    await refreshTokenPromise;
    refreshTokenPromise = null;
}

export const refreshToken = async () => {
    // const token = localStorage.getItem('refresh_token');
    // if (!token) {
    //     return;
    // }
    try {
        const response = await fetch('http://localhost:8080/api/v1/auth/refresh-token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // 'Authorization': `Bearer ${token}`
            },
            credentials: 'include',
        });

        if (!response.ok) {
            throw new Error('Failed to refresh token');
        }
        const data = await response.json();

        localStorage.setItem('access_token', data.access_token);
        // localStorage.setItem('refresh_token', data.refresh_token);

        return data.access_token;
    } catch (error) {
        console.error('Failed to refresh token:', error);
        localStorage.removeItem('access_token');
        console.log("hello");
        
        // localStorage.removeItem('refresh_token');
        window.location.href = '/dang-nhap';
        return;
    }
};


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const fetchWithToken = async (url: string, method: string, token: string | null, body: any) => {
    let response = await fetch(url, {
        method: `${method}`,
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(body),
    });
    
    if (response.status === 401 || response.status === 403) {
        const newToken = await refreshToken();
      
        if (newToken) {
            // Retry request with new token
            response = await fetchWithToken(url, method, newToken, body);
        }
    }
    return response;
};

export const fetchNoBodyWithToken = async (url: string, method: string, token: string | null) => {
    let response = await fetch(url, {
        method: `${method}`,
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    });
    
    if (response.status === 401 || response.status === 403) {
        const newToken = await refreshToken();
      
        if (newToken) {
            // Retry request with new token
            response = await fetchNoBodyWithToken(url, method, newToken);
        }
    }
    return response;
};