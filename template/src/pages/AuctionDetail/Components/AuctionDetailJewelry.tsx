import { Auction } from "../../../models/Auction"
import { Jewelry } from "../../../models/Jewelry";
import { formatNumber } from "../../../utils/formatNumber"

interface AuctionDetailJewelryProps {
    auction: Auction | null;
    jewelry: Jewelry | null;
}

export const AuctionDetailJewelry: React.FC<AuctionDetailJewelryProps> = (props) => {
    return (
        <div
            className={props.auction?.state === 'WAITING' ? `active tab-pane` : "tab-pane"}
            id="description"
            role="tabpanel"
        >
            <div className="product-description">
                <div className="describe-content info-ap">
                    <p>Tổ chức đấu giá tài sản: Công ty Đấu giá hợp danh Lạc Việt, địa chỉ: số 49 Văn Cao, phường Liễu Giai, quận Ba&nbsp;Đình, Hà Nội.</p>
                    <p>Người có tài sản đấu giá: Viễn thông&nbsp;Khánh Hòa, địa chỉ:&nbsp;Số 50 Lê Thánh Tôn, phường Lộc Thọ, thành phố Nha Trang, tỉnh Khánh Hòa.</p>
                    <p>&nbsp;</p><ol>
                        <li>
                            <strong>Tài sản đấu giá, giá khởi điểm, bước giá, tiền mua hồ sơ, tiền đặt trước:</strong>
                        </li>
                    </ol>
                    <ul>
                        <li>
                            <strong>Tài sản đấu giá:&nbsp;</strong>
                            {props.jewelry?.name}, cụ thể:</li>
                    </ul>
                    <p></p>
                    <p><strong>- Giá khởi điểm: {formatNumber(props.auction?.firstPrice)}&nbsp;</strong>
                        <i>(Bằng chữ: Mười hai tỷ, hai trăm ba mươi sáu triệu, năm trăm năm mươi lăm nghìn đồng) (Giá đã bao gồm thuế VAT).</i>
                    </p><p>
                        <strong>- Tiền mua hồ sơ tham gia đấu giá</strong> (trên hệ thống đấu giá trực tuyến được coi là “phí đăng ký tham gia đấu giá”)
                        : <strong>{formatNumber(props.auction?.participationFee)} đồng/Hồ sơ&nbsp;</strong><i>(Bằng chữ: Năm trăm nghìn đồng trên hồ sơ).</i></p><p><strong>-
                            Tiền đặt trước: {formatNumber(props.auction?.deposit)} đồng&nbsp;</strong><i>(Bằng chữ: Hai tỷ bốn trăm triệu đồng).</i></p><p><strong>-&nbsp;
                                Bước giá: {formatNumber(props.auction?.priceStep)} đồng/bước giá&nbsp;</strong><i>(Bằng chữ: Ba mươi triệu đồng trên bước giá).</i></p><p>
                        <strong>2. Điều kiện, cách thức đăng ký,&nbsp;thời gian bán, thu hồ sơ đấu giá và địa điểm xem tài sản đấu giá:</strong></p>
                </div>
            </div>
        </div>
    )
}