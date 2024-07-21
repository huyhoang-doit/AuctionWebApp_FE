import { useNavigate } from 'react-router-dom';
import { checkIsRole } from '../utils/authUtils';

const useIsAdmin = (): boolean => {
    const navigate = useNavigate();
    const token = localStorage.getItem("access_token");
    const decodedData = checkIsRole(token, navigate);

    if (!decodedData) return false;

    const userRoles = decodedData.authorities?.map((auth) => auth.authority) || [];
    
    return ['ADMIN'].some(role => userRoles.includes(role));
};

export default useIsAdmin;
