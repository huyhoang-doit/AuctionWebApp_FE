import Swal from "sweetalert2";
import BASE_URL from "../config/config";

interface LoginRequest {
    username: string;
    password: string;
}

interface ChangePasswordRequest {
    token: string;
    oldPassword: string;
    newPassword: string;
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
    cccd: string;
}

export const login = async (loginRequest: LoginRequest, setError: (message: string) => void) => {
    // end-point
    const URL = `${BASE_URL}/auth/authenticate`;
    const request = { ...loginRequest, email: loginRequest.username }
    // call api
    try {
        const response = await fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(request),
            credentials: 'include',
        });

        if (response.status === 200) {
            const data = await response.json();
            const jwt = data.access_token;
            localStorage.setItem('access_token', jwt);

            return true;
        } else if (response.status === 202) {
            // throw new Error('Your account is inactive, you need check email to active your account!');
            Swal.fire("Kích hoạt tài khoản", "Tài khoản của bạn chưa kích hoạt. Vui lòng kiểm tra email để kích hoạt tài khoản!", "warning");
            return false;
        } else if (response.status === 403) {
            const data = await response.json();
            Swal.fire("Tài khoản của bạn đã bị khoá!", "Tài khoản của bạn đã bị khóa do: <br/>" + data.banReason + " <br/>Vui lòng liên hệ 0707.064.154 để được hỗ trợ.", "error");
            return false;
        } else {
            throw new Error('Đăng nhập không thành công. Vui lòng kiểm tra lại username hoặc mật khẩu.');
        }
    } catch (error) {
        setError((error as Error).message);
        return false;
    }
};

interface ChangePasswordResponse {
    message: string;
    status: number;
}

export const changePassword = async (changePasswordRequest: ChangePasswordRequest): Promise<ChangePasswordResponse> => {
    const accessToken = localStorage.getItem('access_token');
    if (!accessToken) {
        return { message: "Đã xảy ra lỗi trong quá trình đổi mật khẩu", status: 401 };
    }

    changePasswordRequest = { ...changePasswordRequest, token: accessToken }

    const URL = `${BASE_URL}/auth/change-password`;

    try {
        const response = await fetchWithToken(URL, 'POST', accessToken, changePasswordRequest);

        if (response.status === 404) {
            return { message: "Mật khẩu cũ không đúng.", status: 404 };
        }

        if (response.status === 200) {
            return { message: "Đổi mật khẩu thành công", status: 200 };
        } else {
            throw new Error('Đã xảy ra lỗi trong quá trình đổi mật khẩu');
        }
    } catch (error) {
        return { message: "Đã xảy ra lỗi trong quá trình đổi mật khẩu", status: 400 };
    }
};

export const forgotPassword = async (email: string, setError: (message: string) => void) => {
    const URL = `${BASE_URL}/auth/forgot-password`;

    try {
        const response = await fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
        });

        if (response.ok) {
            return true;
        }

        if (response.status === 403) {
            throw new Error('Bạn không có quyền truy cập. Vui lòng liên hệ quản trị viên để được hỗ trợ.');
        }
        else {
            throw new Error('Email không tồn tại');
        }
    } catch (error) {
        setError((error as Error).message);
        return false;
    }
}

export const resetPassword = async (password: string, token: string) => {
    const URL = `${BASE_URL}/auth/reset-password`;

    try {
        const response = await fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ token, password }),
        });

        if (response.ok) {
            return true;
        } else {
            throw new Error('Đã xảy ra lỗi trong quá trình đổi mật khẩu');
        }
    } catch (error) {
        console.error("Error: " + error);
        return false;
    }
};

export const register = async (registerRequest: RegisterRequest): Promise<boolean> => {
    // end-point
    const URL = `${BASE_URL}/auth/register`;
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
        const URL: string = `${BASE_URL}/auth/activation`;
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
        const response = await fetch(`${BASE_URL}/auth/logout`, {
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
        const response = await fetch(`${BASE_URL}/auth/refresh-token`, {
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