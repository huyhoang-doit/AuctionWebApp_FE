import { jwtDecode } from "jwt-decode";
import Swal from "sweetalert2";
import { NavigateFunction } from "react-router-dom";

interface Authority {
    authority: string;
}

interface DecodedToken {
    authorities?: Authority[];
    sub: string;
    exp: number;
}

export function checkTokenExpiration(
    token: string | null,
    navigate: NavigateFunction
): DecodedToken | null {
    if (!token) {
        navigate("/dang-nhap");
        return null;
    }

    const decodedData = jwtDecode<DecodedToken>(token);
    const currentTime = Date.now() / 1000;

    if (decodedData.exp < currentTime) {
        Swal.fire({
            icon: "warning",
            title: "Phiên đăng nhập hết hạn",
            text:
                "Phiên đăng nhập của bạn đã hết hạn. Xin vui lòng đăng nhập lại."
            ,
        }).then(() => {
            localStorage.removeItem("access_token");
        });
        return null;
    }

    return decodedData;
}

export function checkIsRole(
    token: string | null,
    navigate: NavigateFunction
): DecodedToken | null {
    if (!token) {
        navigate("/dang-nhap");
        return null;
    }

    const decodedData = jwtDecode<DecodedToken>(token);
    const currentTime = Date.now() / 1000;

    if (decodedData.exp < currentTime) {
        Swal.fire({
            icon: "warning",
            title: "Phiên đăng nhập hết hạn",
            text: "Phiên đăng nhập của bạn đã hết hạn. Xin vui lòng đăng nhập lại."
            ,
        }).then(() => {
            localStorage.removeItem("access_token");
            navigate("/dang-nhap");
        });
        return null;
    }

    return decodedData;
}

