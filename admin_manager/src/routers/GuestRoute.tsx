import React, { useEffect } from 'react';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';


const GuestRoute: React.FC = () => {
    const token = localStorage.getItem("access_token");
    const navigate = useNavigate();

    useEffect(() => {
        if (!token) {
            navigate('/404');
        }
    }, []);


    if (!token) return <Navigate to="/404" />;

    return <Outlet />;
};

export default GuestRoute;
