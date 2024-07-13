import { useNavigate, useParams, Navigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { getAuctionRegistrationsByAuctionId } from '../api/AuctionRegistrationAPI';
import { AuctionRegistration } from '../models/AuctionRegistration';
import { UserContext } from '../hooks/useContext';
import { User } from '../models/User';
import { useTranslation } from 'react-i18next';
import { checkTokenExpiration } from '../utils/authUtils';
import Swal from 'sweetalert2';
interface AuctionRegistrationGuardProps {
    element: JSX.Element;
}

export function AuctionRegistrationGuard({ element }: AuctionRegistrationGuardProps) {
    const { t } = useTranslation(["Login"]);
    const token = localStorage.getItem("access_token");
    const { id } = useParams<{ id: string }>();
    const [userAuctions, setUserAuctions] = useState<AuctionRegistration[]>([]);
    const context = useContext(UserContext);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [isStaffMember, setIsStaffMember] = useState(false);
    let user: User | null = null;
    if (context?.account) {
        user = context.account;
    }
    useEffect(() => {
        const decodedData = checkTokenExpiration(token, navigate, t);
        if (!decodedData) return;

        const userRoles = decodedData.authorities?.map((auth) => auth.authority) || [];
        setIsStaffMember(userRoles.includes('STAFF'));

        getAuctionRegistrationsByAuctionId(Number(id))
            .then((data) => {
                setUserAuctions(data.auctionRegistrationsData);
            })
            .catch((error) => {
                console.error('Error fetching user auctions:', error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [id, user, navigate, token, t]);

    if (loading) {
        return <div>Loading...</div>;
    }

    const auctionRegistration = userAuctions.find((auctionRegistration) => auctionRegistration.user?.id === user?.id);

    if (!isStaffMember) {
        if (auctionRegistration) {
            if (auctionRegistration?.state === 'KICKED_OUT') {
                Swal.fire('Bạn đã bị cấm khỏi phiên này', 'Lý do: ' + auctionRegistration.kickReason, 'error');
                return <Navigate to={"/tai-san-dau-gia/" + id} />;
            }
        } else {
            Swal.fire('Bạn chưa đăng kí tham gia phiên đấu giá này', '', 'error');
            return <Navigate to={`/tai-san-dau-gia/${id}`} />;
        }
    }

    return element;
}