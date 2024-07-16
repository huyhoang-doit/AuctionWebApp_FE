import React from 'react';
import { Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer';
import MyCustomFont from '../../utils/fonts/Roboto-Regular.ttf';
import MyCustomBoldFont from '../../utils/fonts/Roboto-Bold.ttf';
import MyCustomItalicFont from '../../utils/fonts/Roboto-Italic.ttf';
import { User } from '../../models/User';
import { Jewelry } from '../../models/Jewelry';
import { Auction } from '../../models/Auction';
import { formatDateStringAcceptNull } from '../formatDateString';
import { formatNumberAcceptNull } from '../formatNumber';
interface PDFHandoverProps {
  winner: User | undefined;
  jewelry: Jewelry | undefined;
  auction: Auction | null | undefined
}
Font.register({
  family: 'RobotoFamily',
  fonts: [
    { src: MyCustomFont, fontWeight: 'normal' },
    { src: MyCustomBoldFont, fontWeight: 'bold' },
    { src: MyCustomItalicFont, fontStyle: 'italic' }
  ]
});

const styles = StyleSheet.create({
  page: {
    fontFamily: 'RobotoFamily',
    fontSize: 12,
    paddingTop: 30,
    paddingLeft: 60,
    paddingRight: 60,
    lineHeight: 1.5,
  },
  section: {
    fontFamily: 'RobotoFamily',
    marginBottom: 10,
    textAlign: 'justify',
  },
  table: {
    fontFamily: 'RobotoFamily',
    width: '100%',
    textAlign: 'center',
    border: '1px solid #000',
    borderCollapse: 'collapse',
  },
  th: {
    fontFamily: 'RobotoFamily',
    border: '1px solid #000',
    padding: 8,
  },
  td: {
    fontFamily: 'RobotoFamily',
    border: '1px solid #000',
    padding: 8,
  },
  signatureSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  signature: {
    textAlign: 'center',
    marginTop: 5,
  },
  spaceForSignature: {
    height: 40,
  },
});



const PDFHandover: React.FC<PDFHandoverProps> = ({ winner, jewelry, auction }) => {
  const currentDate = new Date();

  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1; // Months are zero-indexed
  const year = currentDate.getFullYear();

  const formattedDate = `${day}/${month}/${year}`;
  const data = {
    company: {
      name: 'CÔNG TY ĐẤU GIÁ DGS',
      address: 'Lưu Hữu Phước, Đông Hoà, Dĩ An, Bình Dương, Việt Nam',
      representative: '...',
      position: '...',
    },
    person: {
      name: winner?.fullName,
      idCard: winner?.cccd,
      issuedPlace: winner?.cccdFrom,
      address: winner?.address,
      phoneNumber: winner?.phone,
    },
    auction: {
      assetName: jewelry?.name,
      assetDescription: 'Chúng tôi cam kết sản phẩm đúng mô tả đã được cung cấp tại thông tin phiên đấu giá.',
      auctionValue: formatNumberAcceptNull(auction?.lastPrice),
      auctionDate: formatDateStringAcceptNull(auction?.startDate),
    },
    handover: {
      handoverDate: formattedDate,
      handoverPlace: 'Lưu Hữu Phước, Đông Hoà, Dĩ An, Bình Dương, Việt Nam',
      assetCondition: '...',
    },
    fees: {
      deposit: formatNumberAcceptNull(auction?.deposit),
      registrationFee: formatNumberAcceptNull(auction?.participationFee),
      totalPayment: formatNumberAcceptNull((auction?.lastPrice ?? 0) - (auction?.deposit ?? 0)),
    },
  };
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <View>
            <Text style={{ textAlign: 'center', fontSize: 14 }}>{data.company.name}</Text>
          </View>

          <View>
            <Text style={{ textAlign: 'center', fontSize: 14 }}>CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</Text>
            <Text style={{ textAlign: 'center', fontSize: 14 }}>{'            '}Độc lập – Tự do – Hạnh phúc</Text>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={{ textAlign: 'center', fontSize: 18 }}>BIÊN BẢN BÀN GIAO TÀI SẢN</Text>
        </View>
        <View style={styles.section}>
          <Text>Hôm nay, ngày ... tháng ... năm ..., tại ............................................................., chúng tôi gồm:</Text>
        </View>
        <View style={styles.section}>
          <Text style={{ fontWeight: 'bold' }}>BÊN A - {data.company.name}</Text>
          <Text>Địa chỉ: {data.company.address}</Text>
          <Text>Họ và tên người đại diện: {data.company.representative}</Text>
          <Text>Chức vụ: {data.company.position}</Text>
        </View>
        <View style={styles.section}>
          <Text style={{ fontWeight: 'bold' }}>BÊN B - NGƯỜI TRÚNG ĐẤU GIÁ</Text>
          <Text>Họ và tên: {data.person.name}</Text>
          <Text>CMND/CCCD: {data.person.idCard}</Text>
          <Text>Nơi cấp: {data.person.issuedPlace}</Text>
          <Text>Địa chỉ: {data.person.address}</Text>
          <Text>Số điện thoại: {data.person.phoneNumber}</Text>
        </View>
        <View style={styles.section}>
          <Text style={{ fontWeight: 'bold' }}>NỘI DUNG BÀN GIAO</Text>
          <Text>Căn cứ vào kết quả đấu giá tài sản ngày {data.auction.auctionDate}, chúng tôi tiến hành bàn giao tài sản cho bên trúng đấu giá với các nội dung sau:</Text>
          <View>
            <Text style={{ fontWeight: 'bold' }}>Thông tin về tài sản</Text>
            <Text>Tên tài sản: {data.auction.assetName}</Text>
            <Text>Ngày đấu giá: {data.auction.auctionDate}</Text>
            <Text>Mô tả tài sản: {data.auction.assetDescription}</Text>
            <Text>Giá trị trúng đấu giá: {data.auction.auctionValue} {'  VND'}</Text>
          </View>
          <View>
            <Text style={{ fontWeight: 'bold' }}>Thông tin bàn giao</Text>
            <Text>Ngày bàn giao: {data.handover.handoverDate}</Text>
            <Text>Địa điểm bàn giao: {data.handover.handoverPlace}</Text>
            <Text>Tình trạng tài sản khi bàn giao: {data.handover.assetCondition}</Text>
          </View>
          <View>
            <Text style={{ fontWeight: 'bold' }}>Phí dịch vụ đã thanh toán</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text>Tiền cọc: {data.fees.deposit} {' VND'}</Text>
              <Text>Phí đăng ký tham gia: {data.fees.registrationFee} {' VND'}</Text>
            </View>
            <Text>Tổng số tiền cần thanh toán sau khi khấu trừ phí tham gia: {data.fees.totalPayment} {' VND'}</Text>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={{ fontWeight: 'bold' }}>Các bên cam kết</Text>
          <Text>Bên A cam kết bàn giao tài sản cho bên B theo đúng tình trạng và thông tin mô tả.</Text>
          <Text>Bên B cam kết nhận tài sản và thanh toán đầy đủ số tiền trúng đấu giá cho bên A.</Text>
        </View>
        <View style={styles.section}>
          <Text style={{ fontWeight: 'bold', textAlign: 'left' }}>Chữ ký của các bên</Text>
          <View style={styles.signatureSection}>
            <View>
              <Text style={{ textAlign: 'center' }}>Đại diện bên A</Text>
              <Text style={{ textAlign: 'center' }}>Ngày ... tháng ... năm ...</Text>
              <Text style={styles.signature}>(Ký, ghi rõ họ tên)</Text>
              <View style={styles.spaceForSignature}></View>
            </View>
            <View>
              <Text style={{ textAlign: 'center' }}>Đại diện bên B</Text>
              <Text style={{ textAlign: 'center' }}>Ngày ... tháng ... năm ...</Text>
              <Text style={styles.signature}>(Ký, ghi rõ họ tên)</Text>
              <View style={styles.spaceForSignature}></View>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default PDFHandover;
