import Brand from "../Brand/Brand";
import Slider from "./components/Slider";
import ShippingArea from "./components/ShippingArea";
import AuctionOngoing from "./components/AuctionOngoing";
import AuctionTopPrice from "./components/AuctionTopPrice";
import Banner02 from "./components/Banner02";
export default function Index() {
    return (
        <>
            <Slider />

            {/* <!-- Begin Shipping Area --> */}

            <ShippingArea />

            {/* <!-- Begin Banner Area --> */}

            {/* <Banner01 /> */}

            {/* <!-- Begin Product Area --> */}

            <AuctionTopPrice />

            {/* <!-- Begin Product Area Two --> */}

            <AuctionOngoing />

            {/* <!-- Begin Brand Area --> */}

            <Brand />

            {/* <!-- Begin Contact Area Two --> */}

            {/* <ContactTable /> */}

            {/* <!-- Begin Banner Area Two --> */}

            <Banner02 />
        </>
    );
}
