import React, { ChangeEvent, useEffect, useState } from 'react';
import { Modal, Button, Form, Spinner } from 'react-bootstrap';
import './Modal.css';
import { handleLogout } from '../../../utils/logout';
import { formatNumber, formatNumberAcceptNull } from '../../../utils/formatNumber';
import { numberToVietnameseText } from '../../../utils/numberToVietnameseText';
import { Image } from '../../../models/Image';
import { Jewelry } from '../../../models/Jewelry';
import { bidByUser, confirmDeleteBid, getAuctionHistoriesByAuctionId, getAuctionHistoriesByAuctionIdAndUserId } from '../../../api/AuctionHistoryAPI';
import { Auction } from '../../../models/Auction';
import { formatDateString, formatDateStringAcceptNull } from '../../../utils/formatDateString';
import { User } from '../../../models/User';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { AuctionHistory } from '../../../models/AuctionHistory';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss'
import { isPhoneNumberWrongFormat, isYearOfBirthWrongFormat } from '../../../utils/checkRegister';
import { RequestApproval } from '../../../models/RequestApproval';
import changeStateRequest, { cancelRequest, confirmRequest, sendRequestApprovalFromStaff } from '../../../api/RequestApprovalAPI';
import { changePassword } from '../../../api/AuthenticationAPI';
import { getIconImageByJewelryId, getImagesByJewelryId } from '../../../api/ImageApi';
import Stomp from "stompjs";
import { Transaction } from '../../../models/Transaction';
import { PaginationControl } from 'react-bootstrap-pagination-control';
import { TypeTransaction } from '../Components/TypeTransaction';

// *** MODAL FOR USER

interface SaveEditProfileModalProps {
  user: User | null
  isEditing: boolean;
  setIsEditing: (value: boolean) => void;
  handleEdit: (isConfirm: boolean) => void;
}

interface BidConfirmDeleteProps {
  stompClient: Stomp.Client | null;
  connected: boolean;
  bidCode: string;
  user: User | null;
  auction: Auction | undefined;
}

interface ChangePasswordConfirmProps {
  request: {
    token: string,
    oldPassword: string;
    newPassword: string;
    confirmPassword: string;
  };
  setRequest: (request: {
    token: string;
    oldPassword: string;
    newPassword: string;
    confirmPassword: string;
  }) => void;
}

interface ViewTransactionModalProps {
  transaction: Transaction;
}

export const ViewTransactionModal: React.FC<ViewTransactionModalProps> = ({ transaction }) => {
  const payer = transaction.user;
  console.log(transaction);

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
              <Modal.Title className='w-100'>

                <div className='col-12 text-center'>Thông tin chi tiết giao dịch</div>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className='p-5'>
              <form action="">
                <div className="checkbox-form">
                  <div className="fw-medium row">
                    <h4 className=' fw-medium text-decoration-underline'>Tài khoản giao dịch</h4>
                    <div className="checkout-form-list my-4 col-md-6">
                      <div className='checkout-form-list mb-2'>
                        <label>
                          Mã người dùng:{" "}
                        </label>
                        <span className='fw-bold'> {payer?.id}</span>

                      </div>
                      <div className="checkout-form-list mb-2 ">
                        <label>
                          Tên người dùng:
                        </label>
                        <span className='fw-bold'> {payer?.firstName} {payer?.lastName}</span>
                      </div>
                      <div className="checkout-form-list mb-2 ">
                        <label>
                          Số CCCD:
                        </label>
                        <span className='fw-bold'> {payer?.cccd}</span>
                      </div>
                      <div className="checkout-form-list mb-2">
                        <label>
                          Địa chỉ:
                        </label>
                        <span className='fw-semibold'> {payer?.address}, {payer?.city}, {payer?.district} </span>
                      </div>
                      <div className="checkout-form-list mb-2">
                        <label>Email:  </label>
                        <span className='fw-semibold'> {payer?.email}</span>
                      </div>
                    </div>
                    <div className="checkout-form-list ms-2 mb-2 col-md-6 border p-2 row">
                      <div className="checkout-form-list mb-0 col-md-6">
                        <img src={payer?.bank?.logo} alt="bank" />
                      </div>
                      <div className='checkout-form-list mb-2 col-md-12'>
                        <label>
                          Thẻ ngân hàng:{" "}
                        </label>
                        <span className='fw-bold text-uppercase'> {payer?.bank?.bankName}</span>
                      </div>
                      <div className="checkout-form-list mb-2 col-md-12 ">
                        <label>
                          Mã số thẻ:
                        </label>
                        <span className='fw-bold text-success'> {payer?.bankAccountName} - {payer?.bankAccountNumber}</span>
                      </div>

                    </div>
                    <div className="checkout-form-list my-4 col-md-12 p-2 row">
                      <h4 className=' fw-medium text-decoration-underline'>Thông tin giao dịch</h4>

                      <div className="checkout-form-list my-4 col-md-6">
                        <div className='checkout-form-list mb-2'>
                          <label>
                            Loại giao dịch:{" "}
                          </label>
                          <span className='fw-bold'> <TypeTransaction type={transaction.type} /></span>

                        </div>
                        <div className='checkout-form-list mb-2'>
                          <label>
                            Phiên đấu giá:{" "}
                          </label>
                          <span className='fw-bold'> {transaction.auction?.id} - {transaction.auction?.name}</span>

                        </div>
                        <div className="checkout-form-list mb-2 ">
                          <label>
                            Phương thức thanh toán:
                          </label>
                          <span className='fw-bold'> {transaction.paymentMethod}</span>
                        </div>
                      </div>
                      <div className="checkout-form-list my-4 col-md-6">
                        <div className='checkout-form-list mb-2'>
                          <label>
                            Thời gian khởi tạo:{" "}
                          </label>
                          <span className='fw-bold'> {formatDateStringAcceptNull(transaction.createDate)}</span>

                        </div>
                        <div className="checkout-form-list mb-2 ">
                          <label>
                            Thời gian thanh toán:
                          </label>
                          <span className='fw-bold'> {formatDateStringAcceptNull(transaction.paymentTime)}</span>
                        </div>
                      </div>
                      <div className='checkout-form-list mb-2 col-md-12'>
                        <label>
                          Tổng số tiền:{" "}
                        </label>
                        <span className='fw-bold text-uppercase fs-4 text-success'>    {formatNumberAcceptNull(transaction.totalPrice)} VND</span>
                      </div>
                      <div className='mt-3'>
                        <span style={{ fontSize: '12px' }}>(*)Mọi thắc mắc xin liên hệ hotline (+84) 0123456789 để được hỗ trợ.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </Modal.Body>
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


interface TransactionModalProps {
  transaction: Transaction;
}

export const TransactionModal: React.FC<TransactionModalProps> = ({ transaction }) => {
  const payer = transaction.user;
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const [show, setShow] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleShowCreateModal = () => {
    setShow(false)
    setShowCreateModal(true);
  };
  const handleCloseCreateModal = () => setShowCreateModal(false);

  return (
    <>
      <Button variant="warning" size="sm" onClick={handleShow}>
        Thanh toán
      </Button>
      {show && (
        <div className='overlay' >
          <Modal
            show={show}
            onHide={handleClose}
            centered
            backdropClassName="custom-backdrop"
            size="sm"
          >
            <Modal.Header >
              <Modal.Title className='w-100'>

                <div className='col-12 text-center fw-semibold text-warning'>Chọn phương thức thanh toán</div>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className='p-4'>
              <form action="">
                <div
                  className="row"
                  style={{
                    border: '1px solid #000',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    marginBottom: '10px',
                    padding: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    backgroundColor: hoverIndex === 0 ? '#f0f0f0' : 'transparent'
                  }}
                  onMouseEnter={() => setHoverIndex(0)}
                  onMouseLeave={() => setHoverIndex(null)}
                  onClick={handleClose}
                >
                  <div className="col-md-4" style={{ flex: '0 0 33.333333%', maxWidth: '33.333333%' }}>
                    <img src="/assets/images/icon/pay_at_counter.png" alt="" />
                  </div>
                  <div className="col-md-8" style={{ flex: '0 0 66.666667%', maxWidth: '66.666667%' }}>
                    <h5 className='fw-semibold mb-0 text-center'>Tại quầy</h5>
                  </div>
                </div>
                <div
                  className="row"
                  style={{
                    border: '1px solid #000',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    padding: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    backgroundColor: hoverIndex === 1 ? '#f0f0f0' : 'transparent'
                  }}
                  onMouseEnter={() => setHoverIndex(1)}
                  onMouseLeave={() => setHoverIndex(null)}
                  onClick={handleShowCreateModal}
                >
                  <div className="col-md-4" style={{ flex: '0 0 33.333333%', maxWidth: '33.333333%' }}>
                    <img src="/assets/images/icon/banking.png" alt="" />
                  </div>
                  <div className="col-md-8" style={{ flex: '0 0 66.666667%', maxWidth: '66.666667%' }}>
                    <h5 className='fw-semibold mb-0 text-center'>Chuyển khoản</h5>
                  </div>
                </div>
              </form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="dark" onClick={handleClose}>
                Đóng
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      )}
      <CreateTransactionWinnerModal show={showCreateModal} handleClose={handleCloseCreateModal} auction={transaction.auction} winner={payer} />
    </>
  );
}





interface CreateTransactionWinnerModalProps {
  show: boolean;
  handleClose: () => void;
  auction: Auction | undefined | null;
  winner: User | undefined
}


export const CreateTransactionWinnerModal: React.FC<CreateTransactionWinnerModalProps> = ({ show, handleClose, auction, winner }) => {
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
            <Modal.Title className='w-100'>
              <div className='col-12 text-center'>Hóa đơn điện tử</div>
              <div className='col-12 mb-3 text-center '><span className='text-warning fw-bold'>{auction?.name}</span></div>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className='p-4'>
            <form action="">
              <div className="checkbox-form">
                <div className="row">
                  <div className="col-md-12 ">
                    <div className="col-md-12 fw-medium row">
                      <h4 className=' fw-medium'>Tài khoản thanh toán</h4>
                      <div className="checkout-form-list my-3 col-md-6">
                        <div className='checkout-form-list mb-2'>
                          <label>
                            Mã người dùng:{" "}
                          </label>
                          <span className='fw-bold'> {winner?.id}</span>

                        </div>
                        <div className="checkout-form-list mb-2 ">
                          <label>
                            Tên người dùng:
                          </label>
                          <span className='fw-bold'> {winner?.firstName} {winner?.lastName}</span>
                        </div>
                        <div className="checkout-form-list mb-2 ">
                          <label>
                            Số CCCD:
                          </label>
                          <span className='fw-bold'> {winner?.cccd}</span>
                        </div>
                        <div className="checkout-form-list mb-2">
                          <label>
                            Địa chỉ:
                          </label>
                          <span className='fw-semibold'> {winner?.address}, {winner?.city}, {winner?.district} </span>
                        </div>
                        <div className="checkout-form-list mb-2">
                          <label>Email:  </label>
                          <span className='fw-semibold'> {winner?.email}</span>
                        </div>
                      </div>
                      <div className="checkout-form-list mb-2 col-md-6 border p-2 row">
                        <div className="checkout-form-list mb-0 col-md-6">
                          <img src={winner?.bank?.logo} alt="bank" />
                        </div>
                        <div className='checkout-form-list mb-2 col-md-12'>
                          <label>
                            Thẻ ngân hàng:{" "}
                          </label>
                          <span className='fw-bold text-uppercase'> {winner?.bank?.bankName}</span>
                        </div>
                        <div className="checkout-form-list mb-2 col-md-12 ">
                          <label>
                            Mã số thẻ:
                          </label>
                          <span className='fw-bold text-success'> {winner?.bankAccountName} - {winner?.bankAccountNumber}</span>
                        </div>

                      </div>
                      <div className="checkout-form-list mb-2 col-md-12 p-2 row">
                        <div className='checkout-form-list mb-2 col-md-12'>
                          <label>
                            Số tiền cần trả:{" "}
                          </label>
                          <span className='fw-bold text-uppercase fs-4 text-success'>    {formatNumberAcceptNull(auction?.lastPrice)} VND</span>
                        </div>
                        <div className='mt-3'>
                          <span style={{ fontSize: '12px' }}>(*)Mọi thắc mắc xin liên hệ hotline (+84) 0123456789 để được hỗ trợ.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="dark" onClick={handleClose}>
              Đóng
            </Button>
            <Button variant="warning" onClick={handleClose}>
              Thanh toán
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    )}

    </>
  );
};

interface MyRequestProps {
  request: RequestApproval
}

export const ConfirmModal: React.FC<JewelryModalProps> = ({ jewelry, images, user, request, handleChangeList }) => {
  const [show, setShow] = useState(false);


  const handleCloseJewelryDetail = () => {
    handleChangeList()
    setShow(false);
  }
  const handleShowJewelryDetail = () => setShow(true);

  const handleConfirm = async () => {
    const confirm = await confirmRequest(request.id, user?.id)
    if (confirm) {
      console.log('confirm thành công')
    }

    handleShowJewelryDetail()
  }

  return (
    <>
      <Button variant="success" size="sm" onClick={handleConfirm}>
        Đồng ý
      </Button>
      {show && (
        <div className='overlay' >
          <Modal
            show={show}
            onHide={handleCloseJewelryDetail}
            centered
            backdrop="static"
          >
            <Modal.Header>
              <Modal.Title className='w-100'>

                <div className='col-12 text-center'>Xác nhận thành công</div>
                <div className='col-12 mb-3 text-center '><span className='text-success fw-bold'>{jewelry?.name}</span></div>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className='p-4'>
              <h5 className='lh-base'>Chúng tôi đã nhận được phản hồi từ bạn, sản phẩm <span className='text-success fw-semibold'>{jewelry?.name}</span> sẽ được tiến hành đăng ký cho phiên đấu giá phù hợp</h5>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="dark" onClick={handleCloseJewelryDetail}>
                Đóng
              </Button >
            </Modal.Footer>
          </Modal>
        </div >
      )}
    </>
  );
};


interface RefuseJewelryModalProps {
  jewelry: Jewelry | undefined;
  request: RequestApproval;
  handleChangeList: () => Promise<void>
  user: User | null;
}

export const RefuseJewelryRequestModal: React.FC<RefuseJewelryModalProps> = ({ jewelry, request, user, handleChangeList }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);
  const handleDelete = async () => {
    try {
      if (user) {
        const resultDelete = await changeStateRequest(request.id, user?.id, 'HIDDEN');
        if (resultDelete) {
          await handleChangeList();
          handleClose();
          toast.success("Xóa thành công.");
        } else {
          console.log('Xóa thất bại');

        }
      }
    } catch (error) {
      console.log('Xóa thất bại');

    }
  };

  return (
    <><button
      type="button"
      className="btn btn-sm btn-danger "
      id="save-profile-tab"
      role="tab"
      aria-controls="account-details"
      aria-selected="false"
      onClick={handleShow}

    >
      Từ chối
    </button>
      {show && (
        <div className='overlay'>
          <Modal show={show} onHide={handleClose} centered backdropClassName="custom-backdrop">
            <Modal.Header>
              <Modal.Title>Xác nhận {jewelry?.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>Bạn có chắc muốn từ chối mức giá do chúng tôi đưa ra cho sản phẩm này không?</Modal.Body>
            <Modal.Footer>
              <Button variant="dark" onClick={handleClose}>
                Hủy
              </Button>
              <Button variant="danger" onClick={handleDelete}>
                Xác nhận
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      )}
    </>
  );
};

export const ViewStaffRequestModal: React.FC<MyRequestProps> = ({ request }) => {
  const [show, setShow] = useState(false);
  const [image, setImage] = useState<Image | null>(null)
  const [images, setImages] = useState<Image[]>([])
  useEffect(() => {
    getIconImageByJewelryId(request.jewelry?.id ? request.jewelry?.id : 1)
      .then((response) => {
        setImage(response);
      })
      .catch((error) => {
        console.error(error.message);
      });

    getImagesByJewelryId(request.jewelry?.id ? request.jewelry?.id : 1)
      .then((response) => {
        setImages(response);
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, [request])

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
            size='lg'
          >
            <Modal.Header >
              <Modal.Title className='w-100 p-3'>

                <div className='col-12 text-center'>Thông tin yêu cầu</div>
                <div className='col-12 mb-3 text-center '>Sản phẩm: <span className='text-warning fw-bold'>{request.jewelry?.name}</span></div>
                <h5 className='col-12'>Nhân viên gửi yêu cầu - <span className=' fw-bold'>{request.sender?.fullName}</span></h5>
                <h5 className='col-12'>Mã nhân viên - <span className=' fw-bold'>{request.sender?.id}</span></h5>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className='p-4'>
              <form action="">
                <div className="checkbox-form">
                  <div className="row">

                    <div className="col-md-12 fw-medium">
                      <div className="checkout-form-list mb-2">
                        <label>
                          Mã tài sản:{" "}
                        </label>
                        <span className='fw-bold'> {request.jewelry?.id}</span>
                      </div>
                      <div className="checkout-form-list mb-2">
                        <label>
                          Mã yêu cầu:
                        </label>
                        <span className='fw-bold'> {request.id}</span>
                      </div>
                      <div className="checkout-form-list mb-2 row">
                        <div className='col-md-6 mb-2'>
                          <label>
                            Danh mục:
                          </label>
                          <span className='fw-bold'> {request.jewelry?.category?.name}</span>
                        </div>
                        <div className='col-md-6'>
                          <label>
                            Thương hiệu:
                          </label>
                          <span className='fw-bold'> {request.jewelry?.brand}</span>
                        </div>
                        <div className='col-md-6'>
                          <label>
                            Chất liệu:
                          </label>
                          <span className='fw-bold'> {request.jewelry?.material}</span>
                        </div>
                        <div className='col-md-6'>
                          <label>
                            Trọng lượng (g):
                          </label>
                          <span className='fw-bold'> {request.jewelry?.weight}</span>
                        </div>
                      </div>
                      <div className="checkout-form-list checkout-form-list-2 mb-2">
                        <label>Mô tả trang sức</label><br />
                        <textarea readOnly className='w-100 h-auto p-2'
                          id="checkout-mess"
                          value={request.jewelry?.description}
                        ></textarea>
                      </div>
                      <div className="w-100 fw-medium">
                        <div className="checkout-form-list row">
                          <label>
                            Hình ảnh
                          </label>
                          {React.Children.toArray(images.map(
                            (img: Image) =>
                              <div className='col-md-3'>
                                <img src={img.data} alt="Ảnh sản phẩm" />
                              </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="checkout-form-list">
                        <label className=' fw-bold'>Giá đề xuất</label>
                        <input className=' fw-bold'
                          placeholder=""
                          type="text"
                          value={formatNumber(request?.desiredPrice)}
                          readOnly={true}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="checkout-form-list">
                        <label className='text-danger fw-bold'>Định giá</label>
                        <input className=' fw-bold'
                          placeholder=""
                          type="text"
                          value={formatNumber(request?.valuation)}
                          readOnly={true}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="checkout-form-list">
                        <label className='text-danger fw-bold'>Thời gian yêu cầu</label>
                        <input className=' fw-bold'
                          placeholder=""
                          type="text"
                          value={formatDateStringAcceptNull(request.requestTime)}
                          readOnly={true}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="checkout-form-list">
                        <label className='fw-bold'>Trạng thái</label>
                        {request.state === 'HIDDEN' ? (
                          <input
                            className=' fw-bold text-danger'
                            placeholder=""
                            type="text"
                            value='Đã bị hủy'
                            readOnly={true}
                          />
                        ) : (
                          <input
                            className=' fw-bold text-success'
                            placeholder=""
                            type="text"
                            value={`${request.isConfirm ? 'Đã phê duyệt' : 'Chưa phê duyệt'}`}
                            readOnly={true}
                          />
                        )}

                      </div>
                    </div>
                    {request.state === 'HIDDEN' &&
                      (<>
                        <div className="col-md-6">
                          <div className="checkout-form-list">
                            <label className='fw-bold'>*Lý do:{' '}</label>
                            <p className="fw-semibold">
                              {request.note}
                            </p>
                          </div>
                        </div>
                      </>)}
                  </div>
                </div>
              </form>
            </Modal.Body>
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


export const ViewJewelryRequestModal: React.FC<MyRequestProps> = ({ request }) => {
  const [show, setShow] = useState(false);
  const [image, setImage] = useState<Image | null>(null)
  const [images, setImages] = useState<Image[]>([])
  useEffect(() => {
    getIconImageByJewelryId(request.jewelry?.id ? request.jewelry?.id : 1)
      .then((response) => {
        setImage(response);
      })
      .catch((error) => {
        console.error(error.message);
      });

    getImagesByJewelryId(request.jewelry?.id ? request.jewelry?.id : 1)
      .then((response) => {
        setImages(response);
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, [request])

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
          >
            <Modal.Header >
              <Modal.Title className='w-100'>

                <div className='col-12 text-center'>Thông tin tài sản</div>
                <div className='col-12 mb-3 text-center '><span className='text-warning fw-bold'>{request.jewelry?.name}</span></div>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form action="">
                <div className="checkbox-form">
                  <div className="row">
                    <div className="col-md-12 ">
                      <div className="country-select clearfix">
                      </div>
                    </div>
                    <div className="col-md-12 fw-medium">
                      <div className="checkout-form-list mb-2">
                        <label>
                          Mã tài sản:{" "}
                        </label>
                        <span className='fw-bold'> {request.jewelry?.id}</span>
                      </div>
                      <div className="checkout-form-list mb-2">
                        <label>
                          Tên:
                        </label>
                        <span className='fw-bold'> {request.jewelry?.name}</span>
                      </div>
                      <div className="checkout-form-list mb-2 row">
                        <div className='col-md-6'>
                          <label>
                            Danh mục:
                          </label>
                          <span className='fw-bold'> {request.jewelry?.category?.name}</span>
                        </div>
                        <div className='col-md-6'>
                          <label>
                            Thương hiệu:
                          </label>
                          <span className='fw-bold'> {request.jewelry?.brand}</span>
                        </div>
                        <div className='col-md-6'>
                          <label>
                            Chất liệu:
                          </label>
                          <span className='fw-bold'> {request.jewelry?.material}</span>
                        </div>
                        <div className='col-md-6'>
                          <label>
                            Trọng lượng (g):
                          </label>
                          <span className='fw-bold'> {request.jewelry?.weight}</span>
                        </div>
                      </div>
                      <div className="checkout-form-list checkout-form-list-2 mb-2">
                        <label>Mô tả </label><br />
                        <textarea readOnly className='w-100 h-auto p-1'
                          id="checkout-mess"
                          value={request.jewelry?.description}
                        ></textarea>
                      </div>
                      <div className="w-100 fw-medium">
                        <div className="checkout-form-list row">
                          <label>
                            Hình ảnh
                          </label>
                          {React.Children.toArray(images.map(
                            (img: Image) =>
                              <div className='col-md-3'>
                                <img src={img.data} alt="Ảnh sản phẩm" />
                              </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="checkout-form-list">
                        <label className='text-danger fw-bold'>Giá đề xuất</label>
                        <input className=' fw-bold'
                          placeholder=""
                          type="text"
                          value={formatNumber(request?.desiredPrice)}
                          readOnly={true}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="checkout-form-list">
                        <label className='fw-bold'>Trạng thái</label>
                        {request.state === 'HIDDEN' ? (
                          <input
                            className=' fw-bold text-danger'
                            placeholder=""
                            type="text"
                            value='Đã bị hủy'
                            readOnly={true}
                          />
                        ) : (
                          <input
                            className=' fw-bold text-success'
                            placeholder=""
                            type="text"
                            value={`${request.isConfirm ? 'Đã phê duyệt' : 'Chưa phê duyệt'}`}
                            readOnly={true}
                          />
                        )}

                      </div>
                    </div>
                    {request.state === 'HIDDEN' &&
                      (<>
                        <div className="col-md-6">
                          <div className="checkout-form-list">
                            <label className='fw-bold'>*Lý do:{' '}</label>
                            <p className="fw-semibold">
                              {request.note}
                            </p>
                          </div>
                        </div>
                      </>)}
                  </div>
                </div>
              </form>
            </Modal.Body>
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

interface JewelryModalProps {
  jewelry: Jewelry | undefined;
  images: Image[];
  user: User | null;
  request: RequestApproval;
  handleChangeList: () => Promise<void>
}

// *** MODAL FOR STAFF ***
// Modal for Jewelry List
export const JewelryModal: React.FC<JewelryModalProps> = ({ jewelry, images, user, request, handleChangeList }) => {
  const [show, setShow] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [valuation, setValuation] = useState<number | undefined>(request.valuation);


  const handleChangePrice = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.replace(/[^0-9]/g, '');
    const numericValue = parseInt(value);
    setValuation(numericValue)
    request.valuation = numericValue

  };

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
          >
            <Modal.Header>
              <Modal.Title className='w-100'>

                <div className='col-12 text-center'>Thông tin tài sản</div>
                <div className='col-12 mb-3 text-center '><span className='text-warning fw-bold'>{jewelry?.name}</span></div>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form action="">
                <div className="checkbox-form">
                  <div className="row">
                    <div className="col-md-12 ">
                      <div className="country-select clearfix">
                      </div>
                    </div>
                    <div className="col-md-12 fw-medium">
                      <div className="checkout-form-list mb-2 row">
                        <div className='col-md-6'>
                          <label>
                            Chủ tài sản:
                          </label>
                          <span className='fw-bold'> {jewelry?.user?.fullName}</span>
                        </div>
                        <div className='col-md-6'>
                          <label>
                            Mã người dùng:
                          </label>
                          <span className='fw-bold'> {jewelry?.user?.id}</span>
                        </div>
                      </div>
                      <div className="checkout-form-list mb-2">
                        <label>
                          Mã tài sản:{" "}
                        </label>
                        <span className='fw-bold'> {jewelry?.id}</span>
                      </div>
                      <div className="checkout-form-list mb-2">
                        <label>
                          Tên:
                        </label>
                        <span className='fw-bold'> {jewelry?.name}</span>
                      </div>
                      <div className="checkout-form-list mb-2 row">
                        <div className='col-md-6'>
                          <label>
                            Danh mục:
                          </label>
                          <span className='fw-bold'> {jewelry?.category?.name}</span>
                        </div>
                        <div className='col-md-6'>
                          <label>
                            Thương hiệu:
                          </label>
                          <span className='fw-bold'> {jewelry?.brand}</span>
                        </div>
                        <div className='col-md-6'>
                          <label>
                            Chất liệu:
                          </label>
                          <span className='fw-bold'> {jewelry?.material}</span>
                        </div>
                        <div className='col-md-6'>
                          <label>
                            Trọng lượng (g):
                          </label>
                          <span className='fw-bold'> {jewelry?.weight}</span>
                        </div>
                      </div>
                      <div className="checkout-form-list checkout-form-list-2 mb-2">
                        <label>Mô tả </label><br />
                        <textarea readOnly className='w-100 h-auto p-1'
                          id="checkout-mess"
                          value={jewelry?.description}
                        ></textarea>
                      </div>
                      <div className="w-100 fw-medium">
                        <div className="checkout-form-list row">
                          <label>
                            Hình ảnh
                          </label>
                          {React.Children.toArray(images.map(
                            (img: Image) =>
                              <div className='col-md-3'>
                                <img src={img.data} alt="Ảnh sản phẩm" />
                              </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="checkout-form-list">
                        <label className='text-danger fw-bold'>Giá đề xuất</label>
                        <input className=' fw-bold'
                          placeholder=""
                          type="text"
                          value={formatNumber(request?.desiredPrice)}
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
                          value={formatNumber(valuation)}
                          onChange={handleChangePrice}
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

      <JewelryCreateRequestModal show={showCreateModal} handleClose={handleCloseCreateModal} request={request} jewelry={jewelry} images={images} user={user} handleChangeList={handleChangeList} />
    </>
  );
};

interface JewelryCreateRequestModalProps {
  show: boolean;
  handleClose: () => void;
  jewelry: Jewelry | undefined;
  images: Image[];
  user: User | null;
  request: RequestApproval;
  handleChangeList: () => Promise<void>
}


export const JewelryCreateRequestModal: React.FC<JewelryCreateRequestModalProps> = ({ show, handleClose, jewelry, images, user, request, handleChangeList }) => {
  const handleSendRequestFromStaff = async () => {
    const requestBody = {
      id: 0,
      senderId: user?.id,
      requestApprovalId: request.id,
      valuation: request.valuation,
      requestTime: new Date().toISOString()
    }
    console.log(requestBody);

    const newRequest = await sendRequestApprovalFromStaff(requestBody)
    if (newRequest) {
      console.log('Staff send request thanh cong');
      handleChangeList()

    }
  }

  const handleConfirm = async () => {
    const confirm = await confirmRequest(request.id, user?.id)
    if (confirm) {
      console.log('confirm thành công')
      handleSendRequestFromStaff()

    }
    handleClose()
    toast.success("Định giá cho tài sản đã được gửi đi")
  }
  return (
    <>{show && (
      <div className='overlay' >
        <Modal
          show={show}
          onHide={handleClose}
          centered
          backdrop="static"
        >
          <Modal.Header>
            <Modal.Title className='w-100'>
              <div className='col-12 text-center'>Tạo yêu cầu phê duyệt tài sản</div>
              <div className='col-12 mb-3 text-center '><span className='text-warning fw-bold'>{jewelry?.name}</span></div>
              <h5 className='col-12'>Nhân viên gửi yêu cầu - <span className=' fw-bold'>{user?.firstName}</span></h5>
              <h5 className='col-12'>Mã nhân viên - <span className=' fw-bold'>{user?.id}</span></h5>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form action="">
              <div className="checkbox-form">
                <div className="row">
                  <div className="col-md-12 ">
                    <div className="country-select clearfix">
                    </div>
                  </div>
                  <div className="col-md-6 fw-medium">
                    <div className="checkout-form-list">
                      <label>
                        Mã tài sản{" "}
                      </label>
                      <input
                        placeholder=""
                        type="text"
                        value={jewelry?.id}
                        readOnly={true}
                      />
                    </div>
                  </div>
                  <div className="col-md-6 fw-medium">
                    <div className="checkout-form-list">
                      <label>
                        Danh mục
                      </label>
                      <input
                        placeholder=""
                        type="text"
                        value={jewelry?.category?.name}
                        readOnly={true}
                      />
                    </div>
                  </div>
                  <div className="col-md-4 fw-medium">
                    <div className="checkout-form-list">
                      <label>
                        Chất liệu
                      </label>
                      <input
                        placeholder=""
                        type="text"
                        value={jewelry?.material}
                        readOnly={true}
                      />
                    </div>
                  </div>

                  <div className="col-md-4 fw-medium">
                    <div className="checkout-form-list">
                      <label>
                        Thương hiệu
                      </label>
                      <input
                        placeholder="Street address"
                        type="text"
                        value={jewelry?.brand}
                        readOnly={true}
                      />
                    </div>
                  </div>
                  <div className="col-md-4 fw-medium">
                    <div className="checkout-form-list">
                      <label>
                        Cân nặng (g)
                      </label>
                      <input
                        placeholder="Street address"
                        type="text"
                        value={jewelry?.weight}
                        readOnly={true}
                      />
                    </div>


                  </div>
                  <div className="order-notes fw-medium">
                    <div className="checkout-form-list checkout-form-list-2">
                      <label>Mô tả </label>
                      <textarea readOnly
                        id="checkout-mess"
                        value={jewelry?.description}
                      ></textarea>
                    </div>
                  </div>
                  <div className="order-notes col-md-12 fw-medium">
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
                        value={formatNumber(request.desiredPrice)}
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
                        value={formatNumber(request.valuation)}
                        readOnly={true}
                      />
                    </div>
                  </div>



                </div>
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="dark" onClick={handleClose}>
              Đóng
            </Button>
            <Button variant="warning" onClick={handleConfirm}>
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
interface DeleteJewelryModalProps {
  jewelry: Jewelry | undefined;
  request: RequestApproval;
  handleChangeList: () => Promise<void>
  user: User | null;
}
interface cancelRequestProps {
  requestId: number,
  note: string
}


export const DeleteJewelryRequestModal: React.FC<DeleteJewelryModalProps> = ({ jewelry, request, user, handleChangeList }) => {
  const [show, setShow] = useState(false);
  const [reason, setReason] = useState('');
  const [notification, setNotification] = useState('');
  const [cancel, setCancel] = useState<cancelRequestProps>({
    requestId: request.id,
    note: reason

  });

  const handleClose = () => {
    setNotification('');
    setShow(false);
  };
  const handleShow = () => setShow(true);
  const handleDelete = async () => {
    if (reason === '') {
      setNotification("Cung cấp lý do hủy yêu cầu tài sản");
    } else {
      try {
        if (user) {
          const setState = await changeStateRequest(request.id, user?.id, 'HIDDEN');
          const setNote = await cancelRequest(cancel)
          if (setState && setNote) {
            await handleChangeList();
            handleClose();
            toast.success("Xóa thành công.");
          } else {
            setNotification("Hệ thống có một chút sự cố, chưa thể xóa được trang sức này");
          }
        }

      } catch (error) {
        setNotification("Hệ thống có một chút sự cố, chưa thể xóa được trang sức này");
      }
    }

  };

  const handleReasonChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNotification('')
    setReason(event.target.value);
    setCancel({ ...cancel, note: event.target.value });
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-sm btn-danger ms-2 "
        id="save-profile-tab"
        role="tab"
        aria-controls="account-details"
        aria-selected="false"
        onClick={handleShow}

      >
        Hủy
      </button>
      {show && (
        <div className='overlay'>
          <Modal show={show} onHide={handleClose} centered backdropClassName="custom-backdrop">
            <Modal.Header className='text-center w-100'>
              <Modal.Title className='w-100'>
                <div className='col-12 text-center'>Xác nhận hủy yêu cầu</div>
                <div className='col-12 mb-3 text-center '><span className='text-danger fw-bold'>{jewelry?.name}</span></div>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p className='fw-semibold'>Bạn có chắc muốn xóa sản phẩm này khỏi danh sách chờ không?</p>
              <Form>
                <Form.Group controlId="formReason">
                  <Form.Label className='fw-semibold'>Nhập lý do <span className='text-danger'>*</span></Form.Label>
                  <p className='text-danger fw-semibold'>{notification}</p>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    value={reason}
                    onChange={handleReasonChange}
                    required
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="dark" onClick={handleClose}>
                Hủy
              </Button>
              <Button variant="danger" onClick={handleDelete}>
                Xác nhận
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      )}
    </>
  );
};


// Modal view AUCTION HISTORY
interface ViewBidHistoryModalProps {
  auctionId: number | undefined;
  userId: number | undefined;
  auctionHistoryState: string
}

export const ViewBidHistoryModal: React.FC<ViewBidHistoryModalProps> = ({ auctionId, userId, auctionHistoryState }) => {
  const [auctionHistories, setAuctionHistories] = useState<AuctionHistory[]>([]);
  const [totalElements, setTotalElements] = useState(0)
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true)
    if (userId) {
      getAuctionHistoriesByAuctionIdAndUserId(auctionId, userId, auctionHistoryState, page)
        .then((response) => {
          setAuctionHistories(response.auctionHistoriesData);
          setTotalElements(response.totalElements);
        })
        .catch(() => {
        });
    }
    setLoading(false)
  }, [auctionId, userId]);

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);

  return (
    <>
      <button
        type="button"
        className="btn btn-sm btn-dark ms-2 "
        id="save-profile-tab"
        role="tab"
        aria-controls="account-details"
        aria-selected="false"
        onClick={handleShow}

      >
        Lịch sử đặt giá
      </button>
      {show && (
        <div className='overlay'>
          <Modal show={show} onHide={handleClose} centered backdropClassName="custom-backdrop" size='xl'>
            <Modal.Header className='text-center w-100'>
              <Modal.Title className='w-100'>
                <div className='col-12 text-center'>Lịch sử đặt giá phiên đấu</div>
                <div className='col-12 mb-3 text-center '><span className='text-danger fw-bold'>{auctionId}</span></div>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="myaccount-orders">

                <div className="table-responsive mt-2">
                  <table className="table table-bordered table-hover">
                    <tbody>
                      <tr>
                        <th>Mã số</th>
                        <th>BID</th>
                        <th>Giá đã đặt (VND)</th>
                        <th>Thời gian </th>

                      </tr>{loading ? (
                        <tr>
                          <td colSpan={4} className="text-center">
                            <Spinner animation="border" />
                          </td>
                        </tr>

                      ) : (auctionHistories.length > 0 ? (React.Children.toArray(auctionHistories.map(
                        (auctionHistory) =>
                          <tr>
                            <td className='fw-semibold'>
                              {auctionHistory.id}
                            </td>
                            <td className='fw-semibold text-danger'>
                              {auctionHistory.bidCode}
                            </td>
                            <td>
                              {formatNumber(auctionHistory.priceGiven)}
                            </td>
                            <td>
                              {formatDateStringAcceptNull(auctionHistory.time)}
                            </td>

                          </tr>
                      ))) : (<td colSpan={4} className="text-center">
                        <h5 className='fw-semibold lh-base mt-2'>Chưa có đặt giá nào cho phiên này</h5>
                      </td>))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="mt-4">
                <PaginationControl
                  page={page}
                  between={3}
                  total={totalElements}
                  limit={5}
                  changePage={(page) => {
                    setPage(page)
                  }}
                  ellipsis={1}
                />
              </div>

            </Modal.Body>
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

interface BidConfirmProps {
  bidValue: number;
  setDisplayValue: (value: string) => void;
  setAuction: (auction: Auction) => void;
  username: string | undefined;
  auction: Auction | null,
  setAuctionHistories: (auctionHistories: AuctionHistory[]) => void;
  stompClient: Stomp.Client | null;
  connected: boolean;
}

// Modal for Jewelry HandOver
export const BidConfirm: React.FC<BidConfirmProps> = ({ stompClient, connected, setAuctionHistories, bidValue, username, auction, setDisplayValue, setAuction }) => {

  return (
    <>
      <button
        className="fw-bold text-center eg-btn btn--primary text-white btn--sm"
        style={{
          backgroundColor: "#B41712",
          textTransform: "unset",
          border: "unset",
          borderRadius: "5px",
          padding: "10px 10px",
          fontSize: "16px"
        }}
        onClick={() =>
          Swal.fire({
            icon: "question",
            html: `
            <div>Trả giá trang sức với: ${formatNumber(bidValue)} VNĐ.</div>
            <div>Giá của bạn: <span class="fw-bold text-danger">${numberToVietnameseText(bidValue)}.</span></div>`,
            showCancelButton: true,
            cancelButtonText: 'Hủy',
            confirmButtonText: 'Xác nhận',
            showLoaderOnConfirm: true,
            preConfirm: () => {
              if (username !== undefined && auction && bidValue) {
                bidByUser(username, auction?.id, bidValue)
                  .then((response) => {
                    if (response === true) {
                      getAuctionHistoriesByAuctionId(auction.id, 3)
                        .then((updatedHistories) => {
                          setAuctionHistories(updatedHistories.auctionHistoriesData);
                        });

                      if (stompClient && connected) {
                        stompClient.send(
                          "/app/update-auction",
                          {},
                          JSON.stringify(auction.id)
                        );

                      } else {
                        console.error("WebSocket client is not connected.");
                      }
                      setDisplayValue(formatNumber(bidValue || 0));
                      setAuction({ ...auction, lastPrice: bidValue });
                      toast.success('Trả giá thành công!');
                    } else {
                      toast.error('Trả giá không thành thành công, vui lòng thực hiện lại!');
                    }
                  })
                  .catch((error) => {
                    console.log(error.message);
                  });
              }
            },
            allowOutsideClick: () => !Swal.isLoading(),
          })
        }
      >
        <i className="fa fa-gavel" style={{ marginRight: "7px" }}></i>Trả giá
      </button>
    </>
  );
};

type AuctionType = {
  auction: Auction;
}
// Modal for Jewelry HandOver
export const AssignAuctionModal: React.FC<AuctionType> = ({ auction }) => {
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
              <Modal.Title className='w-100'>
                <div className='col-12 text-center'>Thông tin phiên đấu</div>
                <div className='col-12 mb-3 text-center '><span className='text-warning fw-bold'>{auction.name}</span></div></Modal.Title>
            </Modal.Header>
            <Modal.Body> <form action="">
              <div className="checkbox-form">
                <div className="row">
                  <div className="col-md-12">
                    <div className="country-select clearfix">
                    </div>
                  </div>
                  <div className="col-md-9 fw-medium">
                    <div className="checkout-form-list">
                      <label>
                        Phiên đấu giá
                      </label>
                      <input
                        placeholder=""
                        type="text"
                        value={auction?.name}
                        readOnly={true}
                      />
                    </div>
                  </div>
                  <div className="col-md-3 fw-medium">
                    <div className="checkout-form-list">
                      <label>
                        Phí tham gia (VNĐ)
                      </label>
                      <input
                        placeholder=""
                        type="text"
                        value={formatNumber(auction?.participationFee)}
                        readOnly={true}
                      />
                    </div>
                  </div>
                  <div className="col-md-6 fw-medium">
                    <div className="checkout-form-list">
                      <label>
                        Thời gian bắt đầu
                      </label>
                      <input
                        placeholder=""
                        type="text"
                        value={formatDateString(auction.startDate)}
                        readOnly={true}
                      />
                    </div>
                  </div>
                  <div className="col-md-6 fw-medium">
                    <div className="checkout-form-list">
                      <label>
                        Thời gian kết thúc
                      </label>
                      <input
                        placeholder=""
                        type="text"
                        value={formatDateString(auction.endDate)}
                        readOnly={true}
                      />
                    </div>
                  </div>
                  <div className="col-md-4 fw-medium">
                    <div className="checkout-form-list">
                      <label>
                        Giá khởi điểm (VNĐ)
                      </label>
                      <input
                        placeholder=""
                        type="text"
                        value={formatNumber(auction.firstPrice)}
                        readOnly={true}
                      />
                    </div>
                  </div>

                  <div className="col-md-4 fw-medium">
                    <div className="checkout-form-list">
                      <label>
                        Tiền đặt trước (VNĐ)
                      </label>
                      <input
                        placeholder="Street address"
                        type="text"
                        value={formatNumber(auction.deposit)}
                        readOnly={true}
                      />
                    </div>
                  </div>
                  <div className="col-md-4 fw-medium">
                    <div className="checkout-form-list">
                      <label>
                        Bước giá (VNĐ)
                      </label>
                      <input
                        placeholder="Street address"
                        type="text"
                        value={formatNumber(auction.priceStep)}
                        readOnly={true}
                      />
                    </div>
                  </div>
                  <div className="order-notes col-md-12 fw-medium">
                    <div className="checkout-form-list checkout-form-list-2">
                      <label>Mô tả </label>
                      <textarea readOnly
                        id="checkout-mess"
                        value={auction.description}
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-md-6 fw-medium text-danger">
                    <div className="checkout-form-list">
                      <label>
                        Giá cuối (VNĐ)
                      </label>
                      <input className='fw-bold'
                        placeholder="Chưa cập nhật"
                        type="text"
                        value={auction?.lastPrice !== undefined ? formatNumberAcceptNull(auction.lastPrice) : ''}
                        readOnly={true}
                      />
                    </div>
                  </div>
                  <div className="col-md-6 fw-semibold text-success">
                    <div className="checkout-form-list">
                      <label>
                        Trạng thái
                      </label>
                      <input className='fw-bold'
                        placeholder="Street address"
                        type="text"
                        value={auction.state}
                        readOnly={true}
                      />
                    </div>
                  </div>

                </div>
              </div>
            </form></Modal.Body>
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

interface JewelryHanOverModalProps {
  transaction: Transaction;
  images: Image[];
  user: User | null;
  jewelry: Jewelry | undefined;
  auction: Auction | undefined | null
}
export const JewelryHanOverModal: React.FC<JewelryHanOverModalProps> = ({ transaction, images, user, jewelry, auction }) => {
  const winner = transaction.user

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
        Xem
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
              <Modal.Title className='w-100'>

                <div className='col-12 text-center'>Tài sản bàn giao</div>
                <div className='col-12 mb-3 text-center '><span className='text-warning fw-bold'>{jewelry?.name}</span></div>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form action="">
                <div className="checkbox-form">
                  <div className="row">
                    <div className="col-md-6 fw-medium">
                      <h4 className=' fw-medium'>1. Thông tin tài sản</h4>
                      <div className="checkout-form-list mb-2">
                        <label>
                          Mã tài sản:{" "}
                        </label>
                        <span className='fw-bold'> {jewelry?.id}</span>
                      </div>
                      <div className="checkout-form-list mb-2">
                        <label>
                          Tên:
                        </label>
                        <span className='fw-bold'> {jewelry?.name}</span>
                      </div>
                      <div className="checkout-form-list mb-2 row">
                        <div className='col-md-6 mb-2'>
                          <label>
                            Thương hiệu:
                          </label>
                          <span className='fw-bold'> {jewelry?.brand}</span>
                        </div>
                        <div className='col-md-6'>
                          <label>
                            Chất liệu:
                          </label>
                          <span className='fw-bold'> {jewelry?.material}</span>
                        </div>
                        <div className='col-md-6'>
                          <label>
                            Trọng lượng (g):
                          </label>
                          <span className='fw-bold'> {jewelry?.weight}</span>
                        </div>
                      </div>
                      <div className="checkout-form-list checkout-form-list-2 mb-2">
                        <label>Mô tả sản phẩm </label><br />
                        <textarea readOnly className='w-100 p-2' style={{ height: '100px' }}
                          id="checkout-mess"
                          value={jewelry?.description}
                        ></textarea>
                      </div>
                      <div className="w-100 fw-medium">
                        <div className="checkout-form-list row">
                          <label>
                            Hình ảnh
                          </label>
                          {React.Children.toArray(images.map(
                            (img: Image) =>
                              <div className='col-md-3'>
                                <img src={img.data} alt="Ảnh sản phẩm" />
                              </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 fw-medium">
                      <h4 className=' fw-medium'>2. Phiên đấu</h4>
                      <div className="checkout-form-list mb-2">
                        <label>
                          Mã phiên:{" "}
                        </label>
                        <span className='fw-bold'> {auction?.id}</span>
                      </div>
                      <div className="checkout-form-list mb-2">
                        <label>
                          Tên:
                        </label>
                        <span className='fw-bold'> {auction?.name}</span>
                      </div>
                      <div className="checkout-form-list mb-2 ">
                        <label>
                          Bắt đầu:
                        </label>
                        <span className='fw-bold'> {formatDateString(auction?.startDate ? auction.startDate : "")}</span>
                      </div>
                      <div className="checkout-form-list mb-2">
                        <label>
                          Kết thúc:
                        </label>
                        <span className='fw-bold'> {formatDateString(auction?.endDate ? auction.endDate : "")}</span>
                      </div>
                      <div className="checkout-form-list mb-2">
                        <label>Trạng thái: </label>
                        <span className='fw-bold text-uppercase text-success'> {auction?.state}</span>
                      </div>
                      <div className="w-100 fw-medium">
                        <div className="checkout-form-list">
                          <label>
                            Giá cuối:
                          </label>
                          <span className='fw-bold text-uppercase text-danger'> {formatNumberAcceptNull(auction?.lastPrice)} VND</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12 fw-medium row">
                      <h4 className=' fw-medium'>3. Người đấu giá thành công</h4>
                      <div className="checkout-form-list mb-2 col-md-6">
                        <div className='checkout-form-list mb-2'>
                          <label>
                            Mã người dùng:{" "}
                          </label>
                          <span className='fw-bold'> {winner?.id}</span>

                        </div>
                        <div className="checkout-form-list mb-2 ">
                          <label>
                            Tên người dùng:
                          </label>
                          <span className='fw-bold'> {winner?.fullName}</span>
                        </div>
                        <div className="checkout-form-list mb-2 ">
                          <label>
                            Số CCCD:
                          </label>
                          <span className='fw-bold'> {winner?.cccd}</span>
                        </div>
                        <div className="checkout-form-list mb-2">
                          <label>
                            Địa chỉ:
                          </label>
                          <span className='fw-semibold'>  {winner?.address}, {winner?.ward}, {winner?.district}, {winner?.city} </span>
                        </div>
                        <div className="checkout-form-list mb-2">
                          <label>Email:  </label>
                          <span className='fw-semibold'> {winner?.email}</span>
                        </div>
                      </div>
                      <div className="checkout-form-list mb-2 col-md-6 border p-2 row">
                        <div className="checkout-form-list mb-0 col-md-6">
                          <img src={winner?.bank?.logo} alt="bank" />
                        </div>
                        <div className='checkout-form-list mb-2 col-md-12'>
                          <label>
                            Thẻ ngân hàng:{" "}
                          </label>
                          <span className='fw-bold text-uppercase'> {winner?.bank?.bankName}</span>
                        </div>
                        <div className="checkout-form-list mb-2 col-md-12 ">
                          <label>
                            Mã số thẻ:{" "}
                          </label>
                          <span className='fw-bold text-success'>{winner?.bankAccountName} - {winner?.bankAccountNumber}</span>
                        </div>
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
                Tiến hành bàn giao
              </Button>

            </Modal.Footer>
          </Modal>
        </div >
      )}

      <CreateHandoverReportModal show={showCreateModal} handleClose={handleCloseCreateModal} auction={auction} jewelry={jewelry} user={user} />
    </>
  );
};

interface CreateHandoverReportModalProps {
  show: boolean;
  handleClose: () => void;
  auction: Auction | undefined | null;
  jewelry: Jewelry | undefined
  user: User | null
}


export const CreateHandoverReportModal: React.FC<CreateHandoverReportModalProps> = ({ show, handleClose, user, auction, jewelry }) => {
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
            <Modal.Title className='w-100'>
              <div className='col-12 text-center'>Thông tin bàn giao sản phẩm</div>
              <div className='col-12 mb-3 text-center '><span className='text-warning fw-bold'>{jewelry?.name}</span></div>
              <h5 className='col-12'>Nhân viên  - <span className=' fw-bold'>{user?.fullName}</span></h5>
              <h5 className='col-12'>Mã nhân viên - <span className=' fw-bold'>{user?.id}</span></h5>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* <form action="">
              <div className="checkbox-form">
                <div className="row">
                  <div className="col-md-12 ">
                    <div className="col-md-12 fw-medium row">
                      <h4 className=' fw-medium'>Người thanh toán</h4>
                      <div className="checkout-form-list mb-2 col-md-6">
                        <div className='checkout-form-list mb-2'>
                          <label>
                            Mã người dùng:{" "}
                          </label>
                          <span className='fw-bold'> {jewelry?.id}</span>

                        </div>
                        <div className="checkout-form-list mb-2 ">
                          <label>
                            Tên người dùng:
                          </label>
                          <span className='fw-bold'> {jewelry?.id}</span>
                        </div>
                        <div className="checkout-form-list mb-2 ">
                          <label>
                            Số CCCD:
                          </label>
                          <span className='fw-bold'> {jewelry?.id}</span>
                        </div>
                        <div className="checkout-form-list mb-2">
                          <label>
                            Địa chỉ:
                          </label>
                          <span className='fw-semibold'> {jewelry?.id} </span>
                        </div>
                        <div className="checkout-form-list mb-2">
                          <label>Email:  </label>
                          <span className='fw-semibold'>{jewelry?.id}</span>
                        </div>
                      </div>
                      <div className="checkout-form-list mb-2 col-md-6 border p-2 row">
                        <div className="checkout-form-list mb-0 col-md-6">
                          <img src='' alt="bank" />
                        </div>
                        <div className='checkout-form-list mb-2 col-md-12'>
                          <label>
                            Thẻ ngân hàng:{" "}
                          </label>
                          <span className='fw-bold text-uppercase'> {jewelry?.id}</span>
                        </div>
                        <div className="checkout-form-list mb-2 col-md-12 ">
                          <label>
                            Mã số thẻ:
                          </label>
                          <span className='fw-bold text-success'>{jewelry?.id}</span>
                        </div>

                      </div>
                      <div className="checkout-form-list mb-2 col-md-12 p-2 row">
                        <div className='checkout-form-list mb-2 col-md-12'>
                          <label>
                            Số tiền cần trả:{" "}
                          </label>
                          <span className='fw-bold text-uppercase fs-4 text-success'>    {formatNumberAcceptNull(auction?.lastPrice)} VND</span>
                        </div>
                        <div className='mt-3'>
                          <span style={{ fontSize: '12px' }}>(*)Nhấn gửi yêu cầu để thông báo đến người dùng về giao dịch này</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form> */}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="dark" onClick={handleClose}>
              Đóng
            </Button>
            <Button variant="warning" onClick={handleClose}>
              Xác nhận
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    )}

    </>
  );
};

// MODAL FOR ALL ACCOUNT
export const LogoutModal = () => {
  return (
    <>
      <div
        style={{ cursor: "pointer" }}
        role="tab"
        aria-controls="account-details"
        aria-selected="false"
        // onClick={handleShow}
        onClick={() =>
          Swal.fire({
            icon: "warning",
            html: `
            <h4>Xác nhận đăng xuất.</h4>
            <div>Bạn có chắc muốn đăng xuất khỏi tài khoản ngay bây giờ?</span></div>`,
            showCancelButton: true,
            confirmButtonText: 'Xác nhận',
            cancelButtonText: 'Hủy',
            showLoaderOnConfirm: true,
            preConfirm: () => {
              handleLogout()
            },
            allowOutsideClick: () => !Swal.isLoading(),
          })}
      > ĐĂNG XUẤT
      </div>
    </>
  );
};

export const SaveEditProfileModal: React.FC<SaveEditProfileModalProps> = ({ user, isEditing, setIsEditing, handleEdit }) => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => {
    handleEdit(false);
    changeState();
    setShowModal(false);
  };
  const handleShow = () => setShowModal(true);

  const changeState = () => {
    setIsEditing(!isEditing);

    const inputs = document.querySelectorAll('input[type="text"]');
    const selects = document.querySelectorAll('select');

    inputs.forEach((input) => {
      if (!isEditing) {
        input.removeAttribute('readOnly');
        input.classList.remove('input-required');
      } else {
        input.setAttribute('readOnly', '');
        input.classList.add('input-required');
      }
    });

    selects.forEach((select) => {
      if (!isEditing) {
        select.removeAttribute('disabled');
        select.classList.remove('input-required');
      } else {
        select.setAttribute('disabled', '');
        select.classList.add('input-required');
      }
    });
  };


  const handleSave = () => {
    const isPhoneNumberValid = !isPhoneNumberWrongFormat(user?.phone ?? "");
    const isYearOfBirthValid = !isYearOfBirthWrongFormat(user?.yob ?? "");

    const errorMessages = [
      { isValid: isYearOfBirthValid, message: "Vui lòng chọn đúng định dạng ngày sinh." },
      { isValid: isPhoneNumberValid, message: "Vui lòng chọn đúng số điện thoại." },
      { isValid: user?.district, message: "Vui lòng chọn quận/huyện." },
      { isValid: user?.ward, message: "Vui lòng chọn phường/xã." },
      { isValid: user?.bankAccountNumber, message: "Vui lòng nhập số tài khoản nhận hoàn tiền đặt trước." },
      { isValid: user?.bankAccountName, message: "Vui lòng nhập tên chủ thẻ ngân hàng." }
    ];
    for (const { isValid, message } of errorMessages) {
      if (!isValid) {
        toast.error(message);
        setShowModal(false);
        return;
      }
    }

    handleEdit(true);
    setShowModal(false);
    changeState();
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-xs btn-primary mb-3 mt-2"
        id="save-profile-tab"
        role="tab"
        aria-controls="account-details"
        aria-selected="false"
        onClick={!isEditing ? changeState : handleShow}
        style={{ backgroundColor: "black", border: "none" }}
      >
        {isEditing ? "Lưu" : "Chỉnh sửa"}
      </button>
      {showModal && (
        <div className='overlay' >
          <Modal
            show={showModal}
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
              <Button variant="warning" onClick={handleSave}>
                Lưu
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      )}
      <ToastContainer />
    </>
  );
};

export const BidConfirmDelete: React.FC<BidConfirmDeleteProps> = ({ stompClient, connected, bidCode, user, auction }) => {
  const navigate = useNavigate();
  return (
    <>
      <button
        type="button"
        className="text-danger"
        id="save-profile-tab"
        role="tab"
        aria-controls="account-details"
        aria-selected="false"
        onClick={() =>
          Swal.fire({
            icon: "error",
            title: 'Xác nhận rút lại giá đã trả?',
            input: 'text',
            html: `
            <div>Nếu rút lại giá đã trả, bạn sẽ mất tiền đặt trước và bị truất quyền đấu giá! Vui lòng nhập mã xác nhận để tiếp tục.</div>
            <br/><div>Mã xác nhận: <span class="fw-bold text-danger">${bidCode}</span></div>`,
            inputPlaceholder: 'Nhập mã xác nhận...',
            inputAttributes: {
              maxLength: 10,
              autocapitalize: 'off',
            },
            showCancelButton: true,
            confirmButtonText: 'Xác nhận',
            cancelButtonText: 'Hủy',
            showLoaderOnConfirm: true,
            preConfirm: async (inputValue: string) => {
              if (!inputValue || inputValue.trim() !== bidCode) {
                Swal.showValidationMessage('Mã xác nhận không đúng.');
                return;
              }
              if (user && auction) {
                await confirmDeleteBid(user?.id, auction?.id);
                if (stompClient && connected) {
                  stompClient.send(
                    "/app/update-auction",
                    {},
                    JSON.stringify(auction.id)
                  );
                } else {
                  console.error("WebSocket client is not connected.");
                }
                toast.success("Xóa thành công.");
                navigate("/tai-san-dau-gia/" + auction.id);
              }
            },
            allowOutsideClick: () => !Swal.isLoading(),
          })}
      >
        <i className="fa-solid fa-trash"></i>
      </button >
    </>
  );
};

export const ChangePasswordConfirm: React.FC<ChangePasswordConfirmProps> = ({ request, setRequest }) => {
  const handleChangePassword = async () => {
    if (request.newPassword !== request.confirmPassword) {
      Swal.fire('Lỗi', 'Mật khẩu xác nhận không trùng khớp', 'error');
      return;
    }
    try {
      const response = await changePassword(request);
      if (response.status === 200) {
        Swal.fire(response.message, 'Mật khẩu đã được đổi', 'success');
        setRequest({
          token: "",
          oldPassword: "",
          newPassword: "",
          confirmPassword: "",
        })
      } else if (response.status === 404) {
        Swal.fire(response.message, 'Đổi mật khẩu thất bại', 'error');
      }
    } catch (error) {
      Swal.fire('Lỗi', 'Đã xảy ra lỗi khi đổi mật khẩu', 'error');
    }
  };
  return (
    <>
      <button
        type="button"
        className="btn btn-xs btn-dark mt-4"
        id="save-profile-tab"
        role="tab"
        aria-controls="account-details"
        aria-selected="false"
        onClick={() =>
          Swal.fire({
            icon: "warning",
            title: 'Bạn có chắc muốn đổi mật khẩu',
            showCancelButton: true,
            confirmButtonText: 'Xác nhận',
            cancelButtonText: 'Hủy',
            showLoaderOnConfirm: true,
            preConfirm: handleChangePassword,
            allowOutsideClick: () => !Swal.isLoading(),
          })}
      >
        Đổi mật khẩu
      </button >
    </>
  );
};