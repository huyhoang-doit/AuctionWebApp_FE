import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './Modal.css';
import { handleLogout } from '../../../utils/logout';
import { formatNumber } from '../../../utils/formatNumber';
import { Image } from '../../../models/Image';
// *** MODAL FOR USER
export const ViewTransactionModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="dark" size="sm" onClick={handleShow}>
        Xem
      </Button>
      {show && (
        <div className='overlay' >
          <Modal
            show={show}
            onHide={handleClose}
            centered
            backdropClassName="custom-backdrop"
            size="lg"
          >
            <Modal.Header >
              <Modal.Title>Thông tin chi tiết phiên giao dịch </Modal.Title>
            </Modal.Header>
            <Modal.Body>...</Modal.Body>
            <Modal.Footer>
              <Button variant="dark" onClick={handleClose}>
                Đóng
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      )}

    </>
  );
}

export const ViewJewelryRequestModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="dark" size="sm" onClick={handleShow}>
        Xem
      </Button>
      {show && (
        <div className='overlay' >
          <Modal
            show={show}
            onHide={handleClose}
            centered
            backdropClassName="custom-backdrop"
            size="lg"
          >
            <Modal.Header >
              <Modal.Title>Thông tin sản phẩm yêu cầu </Modal.Title>
            </Modal.Header>
            <Modal.Body>...</Modal.Body>
            <Modal.Footer>
              <Button variant="dark" onClick={handleClose}>
                Đóng
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      )}

    </>
  );
};

// *** MODAL FOR STAFF ***
// Modal for Jewelry List
export const JewelryModal = ({ jewelry, images }) => {
  const [show, setShow] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);

  const handleCloseJewelryDetail = () => setShow(false);
  const handleShowJewelryDetail = () => setShow(true);

  const handleShowCreateModal = () => {
    setShow(false); // Close the JewelryModal
    setShowCreateModal(true); // Open the JewelryCreateRequestModal
  };
  const handleCloseCreateModal = () => setShowCreateModal(false);
  return (
    <>
      <Button variant="dark" size="sm" onClick={handleShowJewelryDetail}>
        View
      </Button>
      {show && (
        <div className='overlay' >
          <Modal
            show={show}
            onHide={handleCloseJewelryDetail}
            centered
            backdrop="static"
            size="lg"
          >
            <Modal.Header>
              <Modal.Title>

                Thông tin trang sức - MS:<span className=' fw-bold'>{jewelry.id}</span>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form action="javascript:void(0)">
                <div className="checkbox-form">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="country-select clearfix">
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="checkout-form-list">
                        <label>
                          Tên trang sức{" "}
                        </label>
                        <input
                          placeholder=""
                          type="text"
                          value={jewelry.name}
                          readOnly={true}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="checkout-form-list">
                        <label>
                          Danh mục
                        </label>
                        <input
                          placeholder=""
                          type="text"
                          value={jewelry.category.name}
                          readOnly={true}
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="checkout-form-list">
                        <label>
                          Chất liệu
                        </label>
                        <input
                          placeholder=""
                          type="text"
                          value={jewelry.material}
                          readOnly={true}
                        />
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="checkout-form-list">
                        <label>
                          Thương hiệu
                        </label>
                        <input
                          placeholder="Street address"
                          type="text"
                          value={jewelry.brand}
                          readOnly={true}
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="checkout-form-list">
                        <label>
                          Cân nặng (g)
                        </label>
                        <input
                          placeholder="Street address"
                          type="text"
                          value={jewelry.weight}
                          readOnly={true}
                        />
                      </div>


                    </div>
                    <div className="order-notes">
                      <div className="checkout-form-list checkout-form-list-2">
                        <label>Mô tả sản phẩm </label>
                        <textarea
                          id="checkout-mess"
                          value={jewelry.description}
                        ></textarea>
                      </div>
                    </div>
                    <div className="order-notes col-md-12">
                      <div className="checkout-form-list checkout-form-list-2 row">
                        <label>Hình ảnh sản phẩm </label>
                        {React.Children.toArray(images.map(
                          (img: Image) =>
                            <div className='col-md-3'>
                              <img src={img.data} alt="Ảnh sản phẩm" />
                            </div>
                        ))}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="checkout-form-list">
                        <label className='text-danger fw-bold'>Giá đề xuất</label>
                        <input className=' fw-bold'
                          placeholder=""
                          type="text"
                          value={formatNumber(jewelry.price)}
                          readOnly={true}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="checkout-form-list">
                        <label className='text-success fw-bold'>Định giá</label>
                        <input
                          className=' fw-bold'
                          placeholder=""
                          type="text"
                          value={formatNumber(jewelry.price)}
                        />
                      </div>
                    </div>



                  </div>
                </div>
              </form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="dark" onClick={handleCloseJewelryDetail}>
                Đóng
              </Button >
              <Button variant="warning" onClick={handleShowCreateModal}>
                Tạo yêu cầu
              </Button>

            </Modal.Footer>
          </Modal>
        </div >
      )}

      <JewelryCreateRequestModal show={showCreateModal} handleClose={handleCloseCreateModal} />
    </>
  );
};



export const JewelryCreateRequestModal = ({ show, handleClose }) => {
  return (
    <>{show && (
      <div className='overlay' >
        <Modal
          show={show}
          onHide={handleClose}
          centered
          backdrop="static"
          size="lg"
        >
          <Modal.Header>
            <Modal.Title>Tạo yêu cầu cho trang sức</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            ...
          </Modal.Body>
          <Modal.Footer>
            <Button variant="dark" onClick={handleClose}>
              Đóng
            </Button>
            <Button variant="warning" onClick={handleClose}>
              Gửi yêu cầu
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    )}

    </>
  );
};

// Delete Jewelry Modal
export const DeleteJewelryModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="danger" size="sm" onClick={handleShow} className='ms-2'>
        xóa
      </Button>
      {show && (
        <div className='overlay'>
          <Modal
            show={show}
            onHide={handleClose}
            centered
            backdropClassName="custom-backdrop"
          >
            <Modal.Header >
              <Modal.Title>Xác nhận xóa sản phẩm </Modal.Title>
            </Modal.Header>
            <Modal.Body>Bạn có chắc muốn xóa sản phẩm này khỏi danh sách chờ không?</Modal.Body>
            <Modal.Footer>
              <Button variant="dark" onClick={handleClose}>
                Hủy
              </Button>
              <Button variant="danger" onClick={handleClose}>
                Xóa
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      )}

    </>
  );
};

// Modal for Jewelry HandOver
export const JewelryHandOverModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="dark" size="sm" onClick={handleShow}>
        Tạo giao dịch
      </Button>
      {show && (
        <div className='overlay' >
          <Modal
            show={show}
            onHide={handleClose}
            centered
            backdropClassName="custom-backdrop"
            size="lg"
          >
            <Modal.Header >
              <Modal.Title>Tạo hóa đơn thanh toán bàn giao sản phẩm </Modal.Title>
            </Modal.Header>
            <Modal.Body>...</Modal.Body>
            <Modal.Footer>
              <Button variant="dark" onClick={handleClose}>
                Đóng
              </Button>
              <Button variant="warning" onClick={handleClose}>
                Tạo
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      )}

    </>
  );
};

// Modal for Jewelry HandOver
export const AssignAuctionModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="dark" size="sm" onClick={handleShow}>
        Xem
      </Button>
      {show && (
        <div className='overlay' >
          <Modal
            show={show}
            onHide={handleClose}
            centered
            backdropClassName="custom-backdrop"
            size="lg"
          >
            <Modal.Header >
              <Modal.Title>Xem chi tiết phiên đấu giá </Modal.Title>
            </Modal.Header>
            <Modal.Body>...</Modal.Body>
            <Modal.Footer>
              <Button variant="dark" onClick={handleClose}>
                Đóng
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      )}

    </>
  );
};

// Modal Logout
export const LogoutModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <span
        // className="nav-link"
        id="account-details-tab"
        data-bs-toggle="tab"
        style={{ cursor: "pointer" }}
        role="tab"
        aria-controls="account-details"
        aria-selected="false"
        onClick={handleShow}
      > ĐĂNG XUẤT
      </span>
      {show && (
        <div className='overlay' >
          <Modal
            show={show}
            centered
            onHide={handleClose}
            backdropClassName="custom-backdrop"
          >
            <Modal.Header >
              <Modal.Title>Xác nhận đăng xuất </Modal.Title>
            </Modal.Header>
            <Modal.Body>Bạn có chắc muốn đăng xuất khỏi tài khoản ngay bây giờ?</Modal.Body>
            <Modal.Footer>
              <Button variant="dark" onClick={handleClose}>
                Hủy
              </Button>
              <Button variant="warning" onClick={() => handleLogout()}>
                Đăng xuất
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      )}

    </>
  );
};

interface SaveEditProfileModalProps {
  isEditing: boolean;
  setIsEditing: (value: boolean) => void;
  handleEdit: () => void;
}

export const SaveEditProfileModal: React.FC<SaveEditProfileModalProps> = ({ isEditing, setIsEditing, handleEdit }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    changeState();
    setShow(false)
  };
  const handleShow = () => setShow(true);

  const changeState = () => {
    setIsEditing(!isEditing);

    const inputs = document.querySelectorAll('input[type="text"]');

    inputs.forEach((input) => {
      if (!isEditing) {
        input.removeAttribute('readonly');
        input.classList.remove('input-required');
      } else {
        handleEdit();
        input.setAttribute('readonly', '');
        input.classList.add('input-required');
      }
    });
  };

  return (
    <>
      <button
        className="btn btn-xs btn-primary mb-3 mt-2"
        id="save-profile-tab"
        type="button"
        data-bs-toggle="tab"
        // href="#account-details"
        role="tab"
        aria-controls="account-details"
        aria-selected="false"
        // onClick={handleShow}
        onClick={!isEditing ? changeState : handleShow}
        style={{ backgroundColor: "black", border: "none" }}
      >
        {isEditing ? "Lưu" : "Chỉnh sửa"}
      </button>
      {show && (
        <div className='overlay' >
          <Modal
            show={show}
            centered
            onHide={handleClose}
            backdropClassName="custom-backdrop"
          >
            <Modal.Header >
              <Modal.Title>Xác nhận lưu thay đổi</Modal.Title>
            </Modal.Header>
            <Modal.Body>Bạn có chắc muốn thông tin thay đổi tài khoản?</Modal.Body>
            <Modal.Footer>
              <Button variant="dark" onClick={handleClose}>
                Hủy
              </Button>
              <Button variant="warning" onClick={handleClose}>
                Lưu
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      )}
    </>
  );
};