import "./ShopLeftSibar.css";
import SideBar from "./Components/SideBar";
import ContainerListAuctions from "./Components/ContainerListAuctions";
import { useEffect } from "react";
export default function ShopLeftSibar() {

    return (
        <>
            {/* <!-- Begin Umino's Breadcrumb Area --> */}
            {/* <div className="breadcrumb-area">
                <div className="container">
                    <div className="breadcrumb-content">
                        <ul>
                            <li>
                                <a href="index.html">Home</a>
                            </li>
                            <li className="active">Shop Left Sidebar</li>
                        </ul>
                    </div>
                </div>
            </div> */}
            {/* <!-- Umino's Breadcrumb Area End Here -->

        <!-- Begin Umino's Content Wrapper Area --> */}
            <div className="umino-content_wrapper">
                <div className="container">
                    <div className="row">
                        <SideBar />
                        <ContainerListAuctions />
                    </div>
                </div>
            </div>
        </>
    );
}
