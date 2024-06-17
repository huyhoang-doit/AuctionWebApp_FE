interface TransactionTypeProps {
  type: string;
  breadcumb: string;
}

const checkTransactionLocation = (location: string) => {
  const result: TransactionTypeProps = {
    type: '',
    breadcumb: ''
  };
  switch (location) {
    case '/manager/giao-dich/nguoi-mua':
      result.type = 'PAYMENT_TO_WINNER';
      result.breadcumb = 'Giao dịch với người mua';
      break;
    case '/manager/giao-dich/nguoi-ban':
      result.type = 'PAYMENT_TO_SELLER';
      result.breadcumb = 'Giao dịch với người bán';
      break;
    case '/manager/giao-dich/hoan-tien':
      result.type = 'REFUND';
      result.breadcumb = 'Hoàn tiền';
      break;
    default:
      result.type = 'REGISTRATION';
      result.breadcumb = 'Đăng ký tham gia';
      break;
  }
  return result;
};



export default checkTransactionLocation