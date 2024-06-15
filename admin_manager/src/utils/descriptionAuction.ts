import { Jewelry } from "../models/Jewelry";
import { formatDateStringAcceptNull } from "./formatDateString";
import { formatNumber } from "./formatNumber";
import { numberToVietnameseText } from "./numberToVietnameseText";

interface descriptionAuctionProps {
  jewelry: Jewelry | undefined;
  participationFee: number;
  firstPrice: number;
  deposit: number;
  priceStep: number;
  startDate: string;
  endDate: string;
}

export const descriptionAuction = ({
  jewelry,
  participationFee,
  firstPrice,
  deposit,
  priceStep,
  startDate,
  endDate
}: descriptionAuctionProps): string => {
  return `
    <p>Tổ chức đấu giá tài sản: Công ty Đấu giá ĐGS, địa chỉ: Nhà văn hóa sinh viên, Q9, TP. Thủ Đức</p>
    <p>Người có tài sản đấu giá: ${jewelry?.user?.fullName}</p>
    <p><strong>1. Tài sản đấu giá, giá khởi điểm, bước giá, tiền mua hồ sơ, tiền đặt trước:</strong></p>
    <ul>
      <li><strong>Tài sản đấu giá: </strong>${jewelry?.name}, cụ thể:</li>
    </ul>
    <p>&nbsp;</p>
    <p><strong>- Giá khởi điểm: ${formatNumber(firstPrice)}&nbsp;</strong><i>(Bằng chữ: ${numberToVietnameseText(firstPrice)}).</i></p>
    <p><strong>- Chất liệu: ${jewelry?.material}&nbsp;</strong></p>
    <p><strong>- Cân nặng: ${jewelry?.weight} gram&nbsp;</strong></p>
    <p><strong>- Tiền mua hồ sơ tham gia đấu giá</strong> (trên hệ thống đấu giá trực tuyến được coi là “phí đăng ký tham gia đấu giá”) : <strong>${formatNumber(deposit + participationFee)}VND/Hồ sơ&nbsp;</strong><i>(Bằng chữ: ${numberToVietnameseText(deposit + participationFee)} trên hồ sơ).</i></p>
    <p><strong>- Tiền đặt trước: ${formatNumber(deposit)} VND&nbsp;</strong><i>(Bằng chữ: ${numberToVietnameseText(deposit)}).</i></p>
    <p><strong>-&nbsp; Bước giá:  ${formatNumber(priceStep)} đồng/bước giá&nbsp;</strong><i>(Bằng chữ: ${numberToVietnameseText(priceStep)} trên bước giá).</i></p>
    <p><strong>2. Điều kiện, cách thức đăng ký,&nbsp;thời gian bán, thu hồ sơ đấu giá và địa điểm xem tài sản đấu giá:</strong></p>
    <p>Các tổ chức, cá nhân có nhu cầu tham gia đấu giá có đủ điều kiện và năng lực theo Quy chế đấu giá đăng ký tham gia đấu giá, xem tài sản đấu giá theo lịch trình dưới đây:</p>
    <p>&nbsp; &nbsp;&nbsp;<i><strong>- Đăng ký tham gia đấu giá</strong></i>: Từ ${formatDateStringAcceptNull(startDate)} đến ${formatDateStringAcceptNull(endDate)} bằng cách sau:</p>
    <p>+ Khách hàng đăng ký tài khoản và sử dụng tài khoản truy cập để đăng ký tham gia đấu giá trực tuyến trên&nbsp;Trang thông tin điện tử đấu giá trực tuyến của Công ty Đấu giá DGS - <strong>dgs789.vn</strong>.</p>
    <p>+ Khách hàng sau khi hoàn tất việc đăng ký tham gia đấu giá trực tuyến tải các mẫu đơn đăng ký, giấy xác nhận hiện trạng tài sản trên trang dgs789.vn để nộp lại hồ sơ qua đường bưu điện. Mỗi hồ sơ bao gồm:</p>
    <p>++ Bản sao y có chứng thực các giấy tờ: Căn cước công dân/Hộ chiếu, Đăng ký kinh doanh của doanh nghiệp;</p>
    <p><strong>3.</strong> <strong>Thời gian nộp khoản tiền đặt trước: </strong>Từ ngày&nbsp;${formatDateStringAcceptNull(startDate)} đến${formatDateStringAcceptNull(endDate)} bằng cách chuyển khoản theo chỉ dẫn sau:</p>
    <p>+ Tên tài khoản: Công ty đấu giá hợp danh DGS;</p>
    <p>+ Số tài khoản: 0981347469;</p>
    <p>+ Tại: Ngân hàng Quân Đội Việt Nam (MB Bank)</p>
    <p>+ Nội dung: <i><strong>“(Họ tên người tham gia đấu giá/Tên tổ chức)(Số CMND/CCCD/HC/ĐKKD) nộp tiền đặt trước TGĐG Cáp đồng của VNPT Kon Tum”</strong></i>.</p>
  `;
};
