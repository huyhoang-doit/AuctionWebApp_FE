import React, { useEffect } from 'react';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode'; // Ensure this import is correct
import Swal from 'sweetalert2';

interface Authority {
    authority: string;
}

interface DecodedToken {
    authorities?: Authority[];
    sub: string;
    exp: number;
}

interface ProtectedRouteProps {
    roles?: string[];
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ roles }) => {
    const token = localStorage.getItem("access_token");
    const navigate = useNavigate();

    useEffect(() => {
        if (!token) {
            navigate('/dang-nhap');
            return;
        }

        const decodedData = jwtDecode<DecodedToken>(token);
        const currentTime = Date.now() / 1000;

        if (decodedData.exp < currentTime) {
            Swal.fire({
                icon: 'warning',
                title: 'Phiên hết hạn',
                text: 'Phiên của bạn đã hết hạn. Xin vui lòng đăng nhập lại.',
            }).then(() => {
                localStorage.removeItem("access_token");
                navigate('/dang-nhap');
            });
            return;
        }

        const userRoles = decodedData.authorities?.map(auth => auth.authority) || [];

        if (roles && !roles.some(role => userRoles.includes(role))) {
            navigate('/404');
        }

        if (userRoles.includes('STAFF')) {
            navigate('/my-account-staff');
        }


    }, [token, navigate, roles]);


    if (!token) return <Navigate to="/dang-nhap" />;

    return <Outlet />;
};

export default ProtectedRoute;
