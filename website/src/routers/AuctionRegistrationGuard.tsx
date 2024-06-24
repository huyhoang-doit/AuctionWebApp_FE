import { useNavigate, useParams, Navigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { getAuctionRegistrationsByAuctionId } from '../api/AuctionRegistrationAPI';
import { AuctionRegistration } from '../models/AuctionRegistration';
import { UserContext } from '../hooks/useContext';
import { User } from '../models/User';

interface AuctionRegistrationGuardProps {
    element: JSX.Element;
}

export function AuctionRegistrationGuard({ element }: AuctionRegistrationGuardProps) {
    const token = localStorage.getItem("access_token");
    const { id } = useParams<{ id: string }>();
    const [userAuctions, setUserAuctions] = useState<AuctionRegistration[]>([]);
    const context = useContext(UserContext);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    let user: User | null = null;
    if (context?.account) {
        user = context.account;
    }
    useEffect(() => {
        if (!token) {
            navigate('/dang-nhap');
            return;
        }

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

    if (!userHasRegistration) {
        return <Navigate to={"/tai-san-dau-gia/" + id} />;
    }

    return element;
}