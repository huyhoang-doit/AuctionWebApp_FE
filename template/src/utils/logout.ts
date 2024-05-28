export const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/dang-nhap";
};
