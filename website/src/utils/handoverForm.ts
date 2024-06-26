import { Auction } from "../models/Auction"
import { Jewelry } from "../models/Jewelry"
import { User } from "../models/User"

interface handoverFormProps {
  winner: User | undefined,
  auction: Auction | undefined | null;
  jewelry: Jewelry | undefined;
}



export const handoverForm = ({ winner, jewelry, auction }: handoverFormProps): string => {
  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();
  const formattedDate = `${day}/${month}/${year}`

  const lastPrice = auction?.lastPrice ?? 0;
  const deposit = auction?.deposit ?? 0;
  const finalPrice = lastPrice - deposit;


  return `<figure class="table">
    <table style="width: 100%; text-align: center;">
        <tbody>
            <tr>
                <td>
                    <h4>CÔNG TY ĐẤU GIÁ DIAMOND GOLD SILVER</h4>
                </td>
                <td>
                    <h4>CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</h4>
                    <h4>Độc lập – Tự do – Hạnh phúc</h4>
                </td>
            </tr>
        </tbody>
    </table>
</figure>
<p>&nbsp;</p>
<p style="text-align: center;"><strong>BIÊN BẢN BÀN GIAO TÀI SẢN</strong></p>
<p>Hôm nay, ngày ${day} tháng ${month} năm ${year}., tại Lưu Hữu Phước, Đông Hoà, Dĩ An, Bình Dương, Việt Nam. &nbsp;, chúng tôi gồm:</p>
<p><strong>BÊN A - CÔNG TY ĐẤU GIÁ DIAMOND GOLD SILVER</strong></p>
<ul>
    <li>Địa chỉ: Lưu Hữu Phước, Đông Hoà, Dĩ An, Bình Dương, Việt Nam. &nbsp;</li>
    <li>Họ và tên người đại diện:Nguyễn Thế Hoàng &nbsp;</li>
    <li>Chức vụ: Quản lý cấp cao tại Đấu giá DGS &nbsp;</li>
</ul>
<p><strong>BÊN B - NGƯỜI TRÚNG ĐẤU GIÁ</strong></p>
<ul>
    <li>Họ và tên:..${winner?.fullName}..&nbsp;</li>
    <li>CMND/CCCD: ..${winner?.cccd}..&nbsp;</li>
    <li>Địa chỉ: ..${winner?.address}..&nbsp;</li>
    <li>Số điện thoại:..${winner?.phone}..&nbsp;</li>
</ul>
<p><strong>NỘI DUNG BÀN GIAO</strong></p>
<p>Căn cứ vào kết quả đấu giá tài sản ngày [Ngày đấu giá], chúng tôi tiến hành bàn giao tài sản cho bên trúng đấu giá với các nội dung sau:</p>
<ol>
    <li><strong>Thông tin về tài sản</strong></li>
</ol>
<p>+ Tên tài sản:..${jewelry?.name}..&nbsp;</p>
<p>+ Giá trị trúng đấu giá:..${auction?.lastPrice}..&nbsp;VNĐ<br>+ Ngày đấu giá:..${auction?.endDate}..&nbsp;</p>
<ol>
    <li><strong>Thông tin bàn giao</strong></li>
</ol>
<p>+ Ngày bàn giao:...${formattedDate}...&nbsp;</p>
<p>+ Địa điểm bàn giao: Lưu Hữu Phước, Đông Hoà, Dĩ An, Bình Dương, Việt Nam.&nbsp;</p>
<p>+ Tình trạng tài sản khi bàn giao: Đúng như mô tả tài sản được cung cấp trên phiên đấu giá.&nbsp;</p>
<ol>
    <li><strong>Phí dịch vụ đã thanh toán</strong></li>
</ol>
<p>+ Tiền cọc:..${auction?.deposit}..&nbsp;VNĐ</p>
<p>+ Phí đăng ký tham gia:..${auction?.participationFee}..&nbsp;VNĐ</p>
<ol>
    <li><strong>Số tiền cần thanh toán sau khi khấu trừ phí tham gia:</strong></li>
</ol>
<p>+ Tổng:..${finalPrice}..&nbsp;VNĐ</p>
<ol>
    <li><strong>Các bên cam kết</strong></li>
</ol>
<p>+ Bên A cam kết bàn giao tài sản cho bên B theo đúng tình trạng và thông tin mô tả.</p>
<p>+ Bên B cam kết nhận tài sản và thanh toán đầy đủ số tiền trúng đấu giá cho bên A.</p>
<ol>
    <li><strong>Chữ ký của các bên</strong></li>
</ol>
<figure class="table">
    <table style="width: 100%; text-align: center;">
        <tbody>
            <tr>
                <td style="vertical-align: top;">
                    <div style="text-align: center;">
                        <p>Đại diện bên A</p>
                        <p style="margin-top: 50px;">(Ký, ghi rõ họ tên)</p>
                        <p>Ngày … tháng … năm ….</p>
                    </div>
                </td>
                <td style="vertical-align: top;">
                    <div style="text-align: center;">
                        <p>Đại diện bên B</p>
                        <p style="margin-top: 50px;">(Ký, ghi rõ họ tên)</p>
                        <p>Ngày … tháng … năm ….</p>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</figure>
<p>&nbsp;</p>
`
}