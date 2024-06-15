import React from 'react';
import { Link } from 'react-router-dom';

interface TransactionProps {
  transactionId: string;
  productId: string;
  productName: string;
  price: string;
  productType: string;
  material: string;
  date: string;
  paymentMethod: string;
  status: string;
}

const ViewTransactionUser: React.FC<TransactionProps> = ({
  transactionId,
  productId,
  productName,
  price,
  productType,
  material,
  date,
  paymentMethod,
  status
}) => {
  return (
    <section className="main_content dashboard_part">
      <div className="main_content_iner">
        <div className="container-fluid plr_30 body_white_bg pt_30">
          <div className="row justify-content-center px-4 py-3">
            <div className="col-12">
              <div className="QA_section">
                <div className="white_box_tittle list_header">
                  <h4>Thông tin chi tiết giao dịch</h4>
                </div>
                <div className="QA_table mb_30">
                  <table className="table table-bordered">
                    <tbody>
                      <tr>
                        <th>Mã Giao Dịch</th>
                        <td>{transactionId}</td>
                      </tr>
                      <tr>
                        <th>Mã Sản Phẩm</th>
                        <td>{productId}</td>
                      </tr>
                      <tr>
                        <th>Tên Sản Phẩm</th>
                        <td>{productName}</td>
                      </tr>
                      <tr>
                        <th>Giá</th>
                        <td>{price}</td>
                      </tr>
                      <tr>
                        <th>Loại Sản Phẩm</th>
                        <td>{productType}</td>
                      </tr>
                      <tr>
                        <th>Chất Liệu</th>
                        <td>{material}</td>
                      </tr>
                      <tr>
                        <th>Ngày</th>
                        <td>{date}</td>
                      </tr>
                      <tr>
                        <th>Hình Thức Thanh Toán</th>
                        <td>{paymentMethod}</td>
                      </tr>
                      <tr>
                        <th>Trạng Thái</th>
                        <td>{status}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="col-12 d-flex justify-content-end mt-3">
                  <button className="btn btn-primary me-2">Chỉnh sửa</button>
                  <Link to={"/admin/transaction/user"} className="btn btn-warning">Quay lại</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Usage example
const App: React.FC = () => {
  const transaction = {
    transactionId: 'TXN001',
    productId: 'P001',
    productName: 'Đồng Hồ Thụy Sĩ',
    price: '10,000,000 VND',
    productType: 'Đồng hồ',
    material: 'Thép không gỉ',
    date: '2024-05-26',
    paymentMethod: 'Chuyển khoản',
    status: 'Hoàn tất',
  };

  return <ViewTransactionUser {...transaction} />;
};

export default App;
