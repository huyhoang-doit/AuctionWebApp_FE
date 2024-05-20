import Brand from "../Brand/Brand";
import Slider from "./components/Slider";
import ShippingArea from "./components/ShippingArea";
import Banner01 from "./components/Banner01";
import AuctionWaiting from "./components/AuctionWaiting";
import AuctionFinished from "./components/AuctionFinished";
import Banner02 from "./components/Banner02";
import ContactTable from "./components/ContactTable";
export default function Index() {
    return (
        <>
            <Slider />

            {/* <!-- Begin Shipping Area --> */}

            <ShippingArea />

            {/* <!-- Begin Banner Area --> */}

            {/* <Banner01 /> */}

            {/* <!-- Begin Product Area --> */}

            <AuctionWaiting />

            {/* <!-- Begin Product Area Two --> */}

            <AuctionFinished />

            {/* <!-- Begin Brand Area --> */}

            <Brand />

            {/* <!-- Begin Contact Area Two --> */}

            <ContactTable />

            {/* <!-- Begin Banner Area Two --> */}

            {/* <Banner02 /> */}
        </>
    );
}
