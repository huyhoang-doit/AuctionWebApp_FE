import React from "react";
import { Auction } from "../../../models/Auction";
import { AuctionHistory } from "../../../models/AuctionHistory";
import { AuctionHistoryItem } from "./AuctionHistoryItem";

interface AuctionDetailHistoryProps {
    auction: Auction | null,
    auctionHistories: AuctionHistory[];
    setBidPerPage: (bid: number) => void;
}

export const AuctionDetailHistory: React.FC<AuctionDetailHistoryProps> = ({ auctionHistories, setBidPerPage }) => {
    return (<div
        id="history"
        className="tab-pane active show"
        role="tabpanel"
    >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
                Hiển thị
                <select onChange={(e) => setBidPerPage(Number(e.target.value))} defaultValue={3} className="btn-group ms-1 me-1">
                    <option value={3} className="dropdown-item">3</option>
                    <option value={5} className="dropdown-item" >5</option>
                    <option value={10} className="dropdown-item" >10</option>
                </select>
                lượt trả giá
            </div>
            <span style={{ flex: "end" }}>
                <input
                    type="text"
                    placeholder="Tìm kiếm..."
                    style={{ borderRadius: "10px", height: "35px", padding: "10px" }}
                />
            </span>
        </div>
        <div className="table-responsive">
            <table className="table table-bordered specification-inner_stuff mt-4">
                <thead>
                    <tr>
                        <th className="col-1"><b>Mã trả giá</b></th>
                        <th className="col-3">
                            Người trả giá
                        </th>
                        <th className="col-2">
                            Trạng thái
                        </th>
                        <th className="col-2"><b>Giá</b></th>
                        <th className="col-2"><b>Thời gian</b></th>
                        <th className="col-1"><b>Mã trả giá</b></th>
                        <th className="col-1"><b>Rút lại giá</b></th>
                    </tr>
                </thead>
                <AuctionHistoryItem auctionHistories={auctionHistories} />
            </table>
        </div>
    </div >
    )
}