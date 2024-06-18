import "./AuctionList.css";
import SideBar from "./Components/SideBar";
import ContainerListAuctions from "./Components/ContainerListAuctions";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function AuctionList() {
    const [selectedStates, setSelectedStates] = useState<string[]>([]);
    const { state, cateId, fromDateFilter, toDateFilter, txtSearch } = useParams();

    return (
        <>
            {/* <!-- Begin Umino's Breadcrumb Area --> */}
            <div className="breadcrumb-area">
                <div className="container">
                    <div className="breadcrumb-content">
                        <ul>
                            <li>
                                <Link to={"/"}>Trang chủ</Link>
                            </li>
                            <li className="active">Danh sách đấu giá</li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* <!-- Umino's Breadcrumb Area End Here -->

        <!-- Begin Umino's Content Wrapper Area --> */}
            <div className="umino-content_wrapper">
                <div className="container">
                    <div className="row">
                        <SideBar setSelectedStates={setSelectedStates} state={state} />
                        <div className="col-lg-9 order-1 order-lg-2">
                            <ContainerListAuctions
                                setSelectedStates={setSelectedStates}
                                selectedStates={selectedStates}
                                state={state}
                                cateId={cateId}
                                fromDateFilter={fromDateFilter}
                                toDateFilter={toDateFilter}
                                txtSearch={txtSearch} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
