import Brand from "../Brand/Brand";
import Slider from "./components/Slider";
import ShippingArea from "./components/ShippingArea";
import AuctionOngoing from "./components/AuctionOngoing";
import Banner02 from "./components/Banner02";
import AuctionWaiting from "./components/AuctionWaiting";
export default function Index() {
    return (
        <>
            <Slider />

            {/* <!-- Begin Shipping Area --> */}

            <ShippingArea />

            {/* <!-- Begin Banner Area --> */}

            {/* <Banner01 /> */}

            {/* <!-- Begin Product Area Two --> */}

            <AuctionOngoing />

            {/* <!-- Begin Product Area --> */}

            <AuctionWaiting />

            {/* <!-- Begin Brand Area --> */}

            <Brand />

            {/* <!-- Begin Contact Area Two --> */}

            {/* <ContactTable /> */}

            {/* <!-- Begin Banner Area Two --> */}

            <Banner02 />
        </>
    );
}
