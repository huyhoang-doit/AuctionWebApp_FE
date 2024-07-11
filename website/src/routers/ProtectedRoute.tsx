import React, { useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { checkTokenExpiration } from "../utils/authUtils";

interface ProtectedRouteProps {
  roles?: string[];
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ roles }) => {
  const { t } = useTranslation(["Login"]);
  const token = localStorage.getItem("access_token");
  const navigate = useNavigate();

  useEffect(() => {
    const decodedData = checkTokenExpiration(token, navigate, t);
    if (!decodedData) return;

    const userRoles =
      decodedData.authorities?.map((auth) => auth.authority) || [];

    if (roles && !roles.some((role) => userRoles.includes(role))) {
      navigate("/404");
    }

    if (userRoles.includes("STAFF")) {
      navigate("/my-account-staff");
    }
  }, [token, navigate, roles, t]);

  if (!token) return <Navigate to="/dang-nhap" />;

  return <Outlet />;
};

export default ProtectedRoute;
