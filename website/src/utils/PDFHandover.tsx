import React from 'react';
import { Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer';
import MyCustomFont from '../utils/fonts/Anton-Regular.ttf';

Font.register({
  family: 'AntonFamily',
  src: MyCustomFont
})
// Define styles for the PDF
const styles = StyleSheet.create({
  page: {
    fontFamily: 'AntonFamily',
    fontSize: 12,
    paddingTop: 30,
    paddingLeft: 60,
    paddingRight: 60,
    lineHeight: 1.5,
  },
  section: {
    fontFamily: 'AntonFamily',
    marginBottom: 10,
    textAlign: 'justify',
  },
  table: {
    fontFamily: 'AntonFamily',
    width: '100%',
    textAlign: 'center',
    border: '1px solid #000',
    borderCollapse: 'collapse',
  },
  th: {
    fontFamily: 'AntonFamily',
    border: '1px solid #000',
    padding: 8,
  },
  td: {
    fontFamily: 'AntonFamily',
    border: '1px solid #000',
    padding: 8,
  },
});

// Sample data for the document
const data = {
  company: {
    name: 'CÔNG TY ĐẤU GIÁ DIAMOND GOLD SILVER',
    address: 'Địa chỉ công ty',
    representative: 'Họ và tên người đại diện',
    position: 'Chức vụ người đại diện',
  },
  person: {
    name: 'Họ và tên người trúng đấu giá',
    idCard: 'Số CMND/CCCD',
    issuedDate: 'Ngày cấp',
    issuedPlace: 'Nơi cấp',
    address: 'Địa chỉ',
    phoneNumber: 'Số điện thoại',
  },
  auction: {
    assetName: 'Tên tài sản',
    assetDescription: 'Mô tả tài sản',
    auctionValue: 'Giá trị trúng đấu giá',
    auctionDate: 'Ngày đấu giá',
  },
  handover: {
    handoverDate: 'Ngày bàn giao',
    handoverPlace: 'Địa điểm bàn giao',
    assetCondition: 'Tình trạng tài sản khi bàn giao',
  },
  fees: {
    deposit: 'Tiền cọc',
    registrationFee: 'Phí đăng ký tham gia',
    totalPayment: 'Tổng số tiền cần thanh toán',
  },
};

// Component to render PDF document
const PDFHandover = () => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={{ textAlign: 'center', fontSize: 16 }}>{data.company.name}</Text>
          <Text style={{ textAlign: 'center', fontSize: 14 }}>CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</Text>
          <Text style={{ textAlign: 'center', fontSize: 14 }}>Độc lập – Tự do – Hạnh phúc</Text>
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
          <Text>Ngày cấp: {data.person.issuedDate}</Text>
          <Text>Nơi cấp: {data.person.issuedPlace}</Text>
          <Text>Địa chỉ: {data.person.address}</Text>
          <Text>Số điện thoại: {data.person.phoneNumber}</Text>
        </View>
        <View style={styles.section}>
          <Text style={{ fontWeight: 'bold' }}>NỘI DUNG BÀN GIAO</Text>
          <Text>Căn cứ vào kết quả đấu giá tài sản ngày {data.auction.auctionDate}, chúng tôi tiến hành bàn giao tài sản cho bên trúng đấu giá với các nội dung sau:</Text>
          <View>
            <Text style={{ fontWeight: 'bold' }}>Thông tin về tài sản</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text>Tên tài sản: {data.auction.assetName}</Text>
              <Text>Ngày đấu giá: {data.auction.auctionDate}</Text>
            </View>
            <Text>Mô tả tài sản: {data.auction.assetDescription}</Text>
            <Text>Giá trị trúng đấu giá: {data.auction.auctionValue}</Text>
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
              <Text>Tiền cọc: {data.fees.deposit}</Text>
              <Text>Phí đăng ký tham gia: {data.fees.registrationFee}</Text>
            </View>
            <Text>Tổng số tiền cần thanh toán sau khi khấu trừ phí tham gia: {data.fees.totalPayment}</Text>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={{ fontWeight: 'bold' }}>Các bên cam kết</Text>
          <Text>Bên A cam kết bàn giao tài sản cho bên B theo đúng tình trạng và thông tin mô tả.</Text>
          <Text>Bên B cam kết nhận tài sản và thanh toán đầy đủ số tiền trúng đấu giá cho bên A.</Text>
        </View>
        <View style={styles.section}>
          <Text style={{ fontWeight: 'bold', textAlign: 'center' }}>Chữ ký của các bên</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <Text style={{ textAlign: 'center' }}>Đại diện bên A</Text>
            <Text style={{ textAlign: 'center' }}>Đại diện bên B</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <Text style={{ textAlign: 'center' }}>(Ký, ghi rõ họ tên)</Text>
            <Text style={{ textAlign: 'center' }}>(Ký, ghi rõ họ tên)</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <Text style={{ textAlign: 'center' }}>Ngày ... tháng ... năm ...</Text>
            <Text style={{ textAlign: 'center' }}>Ngày ... tháng ... năm ...</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default PDFHandover;
