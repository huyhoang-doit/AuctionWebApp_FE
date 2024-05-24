import "./ShopLeftSibar.css";
import SideBar from "./Components/SideBar";
import ContainerListAuctions from "./Components/ContainerListAuctions";
import { useState } from "react";
import { useParams } from "react-router-dom";

export default function ShopLeftSibar() {
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
                                <a href="index.html">Home</a>
                            </li>
                            <li className="active">Auctions Filter</li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* <!-- Umino's Breadcrumb Area End Here -->

        <!-- Begin Umino's Content Wrapper Area --> */}
            <div className="umino-content_wrapper">
                <div className="container">
                    <div className="row">
                        <SideBar setSelectedStates={setSelectedStates} state={state}/>
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
