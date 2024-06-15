import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

interface Auction {
  id: string;
  name: string;
  user?: {
    fullName: string;
    id: string;
  };
  participationFee: number;
  startDate: string;
  endDate: string;
  firstPrice: number;
  deposit: number;
  priceStep: number;
  description: string;
  lastPrice?: number;
  state: string;
}

const App: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedAuction, setSelectedAuction] = useState<Auction | null>(null);

  const auctions: Auction[] = [
    {
      id: 'AUC001',
      name: 'Phiên đấu giá 1',
      user: {
        fullName: 'Nguyễn Văn A',
        id: 'USER001'
      },
      participationFee: 1000000,
      startDate: '2024-06-20',
      endDate: '2024-06-25',
      firstPrice: 5000000,
      deposit: 1000000,
      priceStep: 500000,
      description: 'Phiên đấu giá sản phẩm ABC',
      lastPrice: 6000000,
      state: 'Đang diễn ra'
    },
    // Thêm các phiên đấu giá khác vào đây nếu cần
  ];

  const handleShowModal = (auction: Auction) => {
    setSelectedAuction(auction);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <h1>Danh sách phiên đấu giá</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Mã phiên</th>
            <th>Tên phiên</th>
            <th>Người phụ trách</th>
            <th>Trạng thái</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {auctions.map((auction) => (
            <tr key={auction.id}>
              <td>{auction.id}</td>
              <td>{auction.name}</td>
              <td>{auction.user?.fullName}</td>
              <td>{auction.state}</td>
              <td>
                <button className="btn btn-primary" onClick={() => handleShowModal(auction)}>
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal hiển thị thông tin chi tiết phiên đấu giá */}
      {selectedAuction && (
        <Modal show={showModal} onHide={handleCloseModal} centered>
          <Modal.Header closeButton>
            <Modal.Title className="w-100 text-center">
              Thông tin chi tiết phiên đấu giá
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-md-12">
                <div className="col-12 mb-3 text-center">
                  <span className="text-warning fw-bold">{selectedAuction.name}</span>
                </div>
                <h5 className="col-12">
                  Nhân viên phụ trách -{" "}
                  <span className=" fw-bold">{selectedAuction.user?.fullName}</span>
                </h5>
                <h5 className="col-12">
                  Mã nhân viên -{" "}
                  <span className=" fw-bold">{selectedAuction.user?.id}</span>
                </h5>
              </div>
              <div className="col-md-6 fw-medium">
                <div className="checkout-form-list">
                  <label>Phiên đấu giá</label>
                  <input
                    placeholder=""
                    type="text"
                    value={selectedAuction.name}
                    readOnly={true}
                  />
                </div>
              </div>
              <div className="col-md-6 fw-medium">
                <div className="checkout-form-list">
                  <label>Phí tham gia (VNĐ)</label>
                  <input
                    placeholder=""
                    type="text"
                    value={selectedAuction.participationFee}
                    readOnly={true}
                  />
                </div>
              </div>
              <div className="col-md-6 fw-medium">
                <div className="checkout-form-list">
                  <label>Thời gian bắt đầu</label>
                  <input
                    placeholder=""
                    type="text"
                    value={selectedAuction.startDate}
                    readOnly={true}
                  />
                </div>
              </div>
              <div className="col-md-6 fw-medium">
                <div className="checkout-form-list">
                  <label>Thời gian kết thúc</label>
                  <input
                    placeholder=""
                    type="text"
                    value={selectedAuction.endDate}
                    readOnly={true}
                  />
                </div>
              </div>
              {/* Các thông tin khác của phiên đấu giá */}
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Đóng
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default App;
