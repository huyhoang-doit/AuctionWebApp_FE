import { useNavigate, useParams, Navigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { getAuctionRegistrationsByAuctionId } from '../api/AuctionRegistrationAPI';
import { AuctionRegistration } from '../models/AuctionRegistration';
import { UserContext } from '../hooks/useContext';
import { User } from '../models/User';
import { jwtDecode } from "jwt-decode";

interface AuctionRegistrationGuardProps {
    element: JSX.Element;
}

interface Authority {
    authority: string;
}

interface DecodedToken {
    authorities?: Authority[];
}

export function AuctionRegistrationGuard({ element }: AuctionRegistrationGuardProps) {
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
        if (!token) {
            navigate('/dang-nhap');
            return;
        }

        const decodedData = jwtDecode<DecodedToken>(token);
        const userRoles =
            decodedData.authorities?.map((auth) => auth.authority) || [];
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
    }, [id, user, navigate]);

    if (loading) {
        return <div>Loading...</div>;
    }

    const userHasRegistration = userAuctions.some((auctionRegistration) => auctionRegistration.user?.id === user?.id);


    if (!userHasRegistration && !isStaffMember) {
        return <Navigate to={"/tai-san-dau-gia/" + id} />;
    }

    return element;
}