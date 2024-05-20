import Brand from "../Brand/Brand";
import Slider from "./components/Slider";
import ShippingArea from "./components/ShippingArea";
import AuctionWaiting from "./components/AuctionWaiting";
import AuctionFinished from "./components/AuctionFinished";
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

            {/* <ContactTable /> */}

            {/* <!-- Begin Banner Area Two --> */}

            {/* <Banner02 /> */}
        </>
    );
}
