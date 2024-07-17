import { useNavigate } from 'react-router-dom';
import { checkIsRole } from '../utils/authUtils';

const useIsStaff = (): boolean => {
    const navigate = useNavigate();
    const token = localStorage.getItem("access_token");
    const decodedData = checkIsRole(token, navigate);

    if (!decodedData) return false;

    const userRoles = decodedData.authorities?.map((auth) => auth.authority) || [];
    
    return ['STAFF', 'ADMIN', 'MANAGER'].some(role => userRoles.includes(role));
};

export default useIsStaff;
