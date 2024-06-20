import { Auction } from "../../../models/Auction"
import { Jewelry } from "../../../models/Jewelry";

interface AuctionDetailJewelryProps {
    auction: Auction | null;
    jewelry: Jewelry | null;
    isBid: boolean
}

export const AuctionDetailJewelry: React.FC<AuctionDetailJewelryProps> = (props) => {
    return (
        <div
            className={!props.isBid ? `active tab-pane` : "tab-pane"}
            id="description"
            role="tabpanel"
        >
            <div className="product-description">
                <div className="describe-content info-ap" dangerouslySetInnerHTML={{ __html: props.auction?.description ? props.auction?.description : '' }} />

            </div>
        </div>
    )
}