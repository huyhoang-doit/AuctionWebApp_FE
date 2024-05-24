import { useEffect, useState } from 'react';
import { getAuctionByFilterDay, getAuctionByStates, getAuctions, getAuctionsByName } from '../api/AuctionAPI';
import { Auction } from '../models/Auction';


interface Pageable {
    page: number;
    size: number;
}

const useAuctions = (state: string | undefined
    , categoryId: number
    , fromDateFilter: string | undefined
    , toDateFilter: string | undefined
    , selectedStates: string[]
    , txtSearch: string | undefined
    , pageable: Pageable
) => {
    const [auctions, setAuctions] = useState<Auction[]>([]);
    const [totalPages, setTotalPages] = useState<number>(0);
    const [totalAuctions, setTotalAuctions] = useState<number>(0);

    useEffect(() => {
        if (fromDateFilter !== undefined && toDateFilter !== undefined) {
            getAuctionByFilterDay(fromDateFilter, toDateFilter)
                .then((response) => {
                    setAuctions(response.auctionsData);
                })
                .catch((error) => {
                    console.error(error.message);
                });
        } else if (selectedStates.length > 0) {
            getAuctionByStates(selectedStates, pageable)
                .then((response) => {
                    setAuctions(response.auctionsData);
                    setTotalPages(response.totalPages);
                    setTotalAuctions(response.totalAuctions);
                }).catch((error) => {
                    console.error(error.message);
                });
        } else if (txtSearch !== undefined) {
            getAuctionsByName(txtSearch)
                .then((response) => {
                    setAuctions(response.auctionsData);
                })
                .catch((error) => {
                    console.error(error.message);
                });
        }
        else {
            let fetchParams: [string, number] = ["", 0];
            if (state !== undefined && categoryId === 0) {
                fetchParams = [state, 0];
            } else if (state === undefined && categoryId !== 0) {
                fetchParams = ["", categoryId];
            } else if (state === undefined && categoryId === 0) {
                fetchParams = ["", 0];
            }
            getAuctions(fetchParams[0], fetchParams[1], pageable)
                .then((response) => {
                    setAuctions(response.auctionsData);
                    setTotalPages(response.totalPages);
                    setTotalAuctions(response.totalAuctions);
                })
                .catch((error) => {
                    console.error(error.message);
                });
        }
    }, [state, categoryId, fromDateFilter, toDateFilter, selectedStates, pageable, txtSearch]);

    return { auctions, totalPages, totalAuctions };
};

export default useAuctions;
