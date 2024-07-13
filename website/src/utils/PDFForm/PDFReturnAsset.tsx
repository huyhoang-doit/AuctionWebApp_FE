import React from 'react';
import { Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer';
import MyCustomFont from '../../utils/fonts/Roboto-Regular.ttf';
import MyCustomBoldFont from '../../utils/fonts/Roboto-Bold.ttf';
import MyCustomItalicFont from '../../utils/fonts/Roboto-Italic.ttf';
import { User } from '../../models/User';
import { Jewelry } from '../../models/Jewelry';
import { formatDateStringAcceptNull } from '../formatDateString';
interface PDFReturnProps {
  violator: User | undefined;
  jewelry: Jewelry | undefined;
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



const PDFReturnAsset: React.FC<PDFReturnProps> = ({ violator, jewelry }) => {
  const currentDate = new Date();

  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();

  const formattedDate = `${day}/${month}/${year}`;
  const data = {
    company: {
      name: 'CÔNG TY ĐẤU GIÁ DGS',
      address: 'Lưu Hữu Phước, Đông Hoà, Dĩ An, Bình Dương, Việt Nam',
      representative: 'Nguyễn Thế Hoàng',
      position: 'Quản lý cấp cao DGS',
    },
    person: {
      name: violator?.fullName,
      idCard: violator?.cccd,
      issuedPlace: violator?.cccdFrom,
      address: violator?.address,
      phoneNumber: violator?.phone,
      banReason: violator?.banReason
    },
    returned: {
      returnedDate: formattedDate,
      returnedPlace: 'Lưu Hữu Phước, Đông Hoà, Dĩ An, Bình Dương, Việt Nam',
      assetCondition: '...',
    },
    jewelry: {
      assetName: jewelry?.name,
      assetDescription: 'Chúng tôi cam kết tài sản đúng hiện trạng ban đầu lúc tiếp nhận.',
      receiveDate: formatDateStringAcceptNull(jewelry?.receivedDate),
    }

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
          <Text style={{ textAlign: 'center', fontSize: 18 }}>BIÊN BẢN HOÀN TRẢ TÀI SẢN</Text>
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
          <Text style={{ fontWeight: 'bold' }}>BÊN B - CHỦ TÀI SẢN</Text>
          <Text>Họ và tên: {data.person.name}</Text>
          <Text>CMND/CCCD: {data.person.idCard}</Text>
          <Text>Nơi cấp: {data.person.issuedPlace}</Text>
          <Text>Địa chỉ: {data.person.address}</Text>
          <Text>Số điện thoại: {data.person.phoneNumber}</Text>
        </View>
        <View style={styles.section}>
          <Text style={{ fontWeight: 'bold' }}>NỘI DUNG HOÀN TRẢ TÀI SẢN</Text>
          <Text>Căn cứ vào hành vi vi phạm của chủ tài sản
            , chúng tôi tiến hành hoàn trả tài sản cho chủ tài sản với các nội dung sau:</Text>
          <View>
            <Text>Lý do: Tài khoản có hành vi vi phạm, không tuân thủ những quy định đã cam kết trước đó: {data.person.banReason}</Text>
            <Text style={{ fontWeight: 'bold' }}>Thông tin về tài sản</Text>
            <Text>Tên tài sản: {data.jewelry.assetName}</Text>
            <Text>Ngày tiếp nhận: {data.jewelry.receiveDate}</Text>
            <Text>Mô tả tài sản: {data.jewelry.assetDescription}</Text>
          </View>
          <View>
            <Text style={{ fontWeight: 'bold' }}>Thông tin hoàn trả</Text>
            <Text>Ngày hoàn trả: {data.returned.returnedDate}</Text>
            <Text>Địa điểm hoàn trả: {data.returned.returnedPlace}</Text>
            <Text>Tình trạng tài sản khi hoàn trả: {data.returned.assetCondition}</Text>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={{ fontWeight: 'bold' }}>Các bên cam kết</Text>
          <Text>Bên A cam kết đã hoàn trả tài sản cho bên B theo đúng tình trạng và thông tin mô tả.</Text>
          <Text>Bên B cam kết nhận đã xác nhận được hoàn trả tài sản từ bên A.</Text>
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

export default PDFReturnAsset;
