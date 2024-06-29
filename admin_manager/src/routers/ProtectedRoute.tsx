import React, { useEffect } from 'react';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode'; // Ensure this import is correct

interface Authority {
    authority: string;
}

interface DecodedToken {
    authorities?: Authority[];
    sub: string;
}

interface ProtectedRouteProps {
    roles?: string[];
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ roles }) => {
    const token = localStorage.getItem("access_token");
    const navigate = useNavigate();

    useEffect(() => {
        if (!token) {
            navigate('/');
            return;
        }

        const decodedData = jwtDecode<DecodedToken>(token);
        const userRoles = decodedData.authorities?.map(auth => auth.authority) || [];

        if (roles && !roles.some(role => userRoles.includes(role))) {
            navigate('/');
        }

        if (userRoles.includes('STAFF')) {
            navigate('/my-account-staff');
        }


    }, [token, navigate, roles]);


    if (!token) return <Navigate to="/" />;

    return <Outlet />;
};

export default ProtectedRoute;
