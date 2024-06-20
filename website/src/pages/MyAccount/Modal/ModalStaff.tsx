import { Modal, Button, Form, Spinner } from "react-bootstrap";
import { RequestApproval } from "../../../models/RequestApproval";
import { Jewelry } from "../../../models/Jewelry";
import { Image } from "../../../models/Image";
import { User } from "../../../models/User";
import { Transaction } from "../../../models/Transaction";
import { Auction } from "../../../models/Auction";
import React, { ChangeEvent, useEffect, useState } from "react";
import { getIconImageByJewelryId, getImagesByJewelryId } from "../../../api/ImageApi";
import "./Modal.css";
import { formatNumber, formatNumberAcceptNull } from "../../../utils/formatNumber";
import { formatDateString, formatDateStringAcceptNull } from "../../../utils/formatDateString";
import changeStateRequest, { cancelRequest, confirmRequest, sendRequestApprovalFromStaff } from "../../../api/RequestApprovalAPI";
import { toast } from "react-toastify";
import { StateAuctionView } from "../../AuctionList/Components/StateAuctionView";
import { PaymentMethod } from "../Components/member/PaymentMethod";
import { StateTransaction } from "../Components/member/StateTransaction";
import { setJewelryHolding } from "../../../api/JewelryAPI";


// *** MODEL FOR STAFF
// Interface
interface MyRequestProps {
  request: RequestApproval;
}

interface JewelryModalProps {
  jewelry: Jewelry | undefined;
  images: Image[];
  user: User | null;
  request: RequestApproval;
  handleChangeList: () => Promise<void>;
}

interface JewelryCreateRequestModalProps {
  show: boolean;
  handleClose: () => void;
  jewelry: Jewelry | undefined;
  images: Image[];
  user: User | null;
  request: RequestApproval;
  handleChangeList: () => Promise<void>;
}

interface DeleteJewelryModalProps {
  jewelry: Jewelry | undefined;
  request: RequestApproval;
  handleChangeList: () => Promise<void>;
  user: User | null;
}

interface cancelRequestProps {
  requestId: number;
  note: string;
}

interface JewelryHanOverModalProps {
  transaction: Transaction;
  images: Image[];
  user: User | null;
  jewelry: Jewelry | undefined;
  auction: Auction | undefined | null;
}

interface CreateHandoverReportModalProps {
  show: boolean;
  handleClose: () => void;
  auction: Auction | undefined | null;
  jewelry: Jewelry | undefined;
  user: User | null;
}

interface ConfirmHoldingModalProps {
  jewelry: Jewelry;
  handleChangeList: () => Promise<void>
}

type AuctionType = {
  auction: Auction;
};

// Modal
export const ViewStaffRequestModal: React.FC<MyRequestProps> = ({
  request,
}) => {
  const [show, setShow] = useState(false);
  const [image, setImage] = useState<Image | null>(null);
  const [images, setImages] = useState<Image[]>([]);
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
  }, [request]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="dark" size="sm" onClick={handleShow}>
        Xem
      </Button>
      {show && (
        <div className="overlay">
          <Modal
            show={show}
            onHide={handleClose}
            centered
            backdropClassName="custom-backdrop"
            size="lg"
          >
            <Modal.Header>
              <Modal.Title className="w-100 p-3">
                <div className="col-12 text-center">Thông tin yêu cầu</div>
                <div className="col-12 mb-3 text-center ">
                  Sản phẩm:{" "}
                  <span className="text-warning fw-bold">
                    {request.jewelry?.name}
                  </span>
                </div>
                <h5 className="col-12">
                  Nhân viên gửi yêu cầu -{" "}
                  <span className=" fw-bold">{request.sender?.fullName}</span>
                </h5>
                <h5 className="col-12">
                  Mã nhân viên -{" "}
                  <span className=" fw-bold">{request.sender?.id}</span>
                </h5>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="p-4">
              <form action="">
                <div className="checkbox-form">
                  <div className="row">
                    <div className="col-md-12 fw-medium">
                      <div className="checkout-form-list mb-2">
                        <label>Mã tài sản: </label>
                        <span className="fw-bold"> {request.jewelry?.id}</span>
                      </div>
                      <div className="checkout-form-list mb-2">
                        <label>Mã yêu cầu:</label>
                        <span className="fw-bold"> {request.id}</span>
                      </div>
                      <div className="checkout-form-list mb-2 row">
                        <div className="col-md-6 mb-2">
                          <label>Danh mục:</label>
                          <span className="fw-bold">
                            {" "}
                            {request.jewelry?.category?.name}
                          </span>
                        </div>
                        <div className="col-md-6">
                          <label>Thương hiệu:</label>
                          <span className="fw-bold">
                            {" "}
                            {request.jewelry?.brand}
                          </span>
                        </div>
                        <div className="col-md-6">
                          <label>Chất liệu:</label>
                          <span className="fw-bold">
                            {" "}
                            {request.jewelry?.material}
                          </span>
                        </div>
                        <div className="col-md-6">
                          <label>Trọng lượng (g):</label>
                          <span className="fw-bold">
                            {" "}
                            {request.jewelry?.weight}
                          </span>
                        </div>
                      </div>
                      <div className="checkout-form-list checkout-form-list-2 mb-2">
                        <label>Mô tả trang sức</label>
                        <br />
                        <textarea
                          readOnly
                          className="w-100 h-auto p-2"
                          id="checkout-mess"
                          value={request.jewelry?.description}
                        ></textarea>
                      </div>
                      <div className="w-100 fw-medium">
                        <div className="checkout-form-list row">
                          <label>Hình ảnh</label>
                          {React.Children.toArray(
                            images.map((img: Image) => (
                              <div className="col-md-3">
                                <img src={img.data} alt="Ảnh sản phẩm" />
                              </div>
                            ))
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="checkout-form-list">
                        <label className=" fw-bold">Giá đề xuất</label>
                        <input
                          className=" fw-bold"
                          placeholder=""
                          type="text"
                          value={formatNumber(request?.desiredPrice)}
                          readOnly={true}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="checkout-form-list">
                        <label className="text-danger fw-bold">Định giá</label>
                        <input
                          className=" fw-bold"
                          placeholder=""
                          type="text"
                          value={formatNumber(request?.valuation)}
                          readOnly={true}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="checkout-form-list">
                        <label className="text-danger fw-bold">
                          Thời gian yêu cầu
                        </label>
                        <input
                          className=" fw-bold"
                          placeholder=""
                          type="text"
                          value={formatDateStringAcceptNull(
                            request.requestTime
                          )}
                          readOnly={true}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="checkout-form-list">
                        <label className="fw-bold">Trạng thái</label>
                        {request.state === "HIDDEN" ? (
                          <input
                            className=" fw-bold text-danger"
                            placeholder=""
                            type="text"
                            value="Đã bị hủy"
                            readOnly={true}
                          />
                        ) : (
                          <input
                            className=" fw-bold text-success"
                            placeholder=""
                            type="text"
                            value={`${request.isConfirm
                              ? "Đã phê duyệt"
                              : "Chưa phê duyệt"
                              }`}
                            readOnly={true}
                          />
                        )}
                      </div>
                    </div>
                    {request.state === "HIDDEN" && (
                      <>
                        <div className="col-md-6">
                          <div className="checkout-form-list">
                            <label className="fw-bold">*Lý do: </label>
                            <p className="fw-semibold">{request.note}</p>
                          </div>
                        </div>
                      </>
                    )}
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

export const JewelryModal: React.FC<JewelryModalProps> = ({
  jewelry,
  images,
  user,
  request,
  handleChangeList,
}) => {
  const [show, setShow] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [valuation, setValuation] = useState<number | undefined>(
    request.valuation
  );

  const handleChangePrice = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.replace(/[^0-9]/g, "");
    const numericValue = parseInt(value);
    setValuation(numericValue);
    request.valuation = numericValue;
  };

  const handleCloseJewelryDetail = () => setShow(false);
  const handleShowJewelryDetail = () => setShow(true);

  const handleShowCreateModal = () => {
    setShow(false);
    setShowCreateModal(true);
  };
  const handleCloseCreateModal = () => setShowCreateModal(false);
  return (
    <>
      <Button variant="dark" size="sm" onClick={handleShowJewelryDetail}>
        View
      </Button>
      {show && (
        <div className="overlay">
          <Modal
            show={show}
            onHide={handleCloseJewelryDetail}
            centered
            backdrop="static"
            size='lg'
          >
            <Modal.Header>
              <Modal.Title className="w-100">
                <div className="col-12 text-center">Thông tin tài sản</div>
                <div className="col-12 mb-3 text-center ">
                  <span className="text-warning fw-bold">{jewelry?.name}</span>
                </div>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="p-4">
              <form action="">
                <div className="checkbox-form">
                  <div className="row">
                    <div className="col-md-12 ">
                      <div className="country-select clearfix"></div>
                    </div>
                    <div className="col-md-12 fw-medium">
                      <div className="checkout-form-list mb-2 row">
                        <div className="col-md-6">
                          <label>Chủ tài sản:</label>
                          <span className="fw-bold">
                            {" "}
                            {jewelry?.user?.fullName}
                          </span>
                        </div>
                        <div className="col-md-6">
                          <label>Mã người dùng:</label>
                          <span className="fw-bold"> {jewelry?.user?.id}</span>
                        </div>
                      </div>
                      <div className="checkout-form-list mb-2">
                        <label>Mã tài sản: </label>
                        <span className="fw-bold"> {jewelry?.id}</span>
                      </div>
                      <div className="checkout-form-list mb-2">
                        <label>Tên:</label>
                        <span className="fw-bold"> {jewelry?.name}</span>
                      </div>
                      <div className="checkout-form-list mb-2 row">
                        <div className="col-md-6 mb-2">
                          <label>Danh mục:</label>
                          <span className="fw-bold">
                            {" "}
                            {jewelry?.category?.name}
                          </span>
                        </div>
                        <div className="col-md-6">
                          <label>Thương hiệu:</label>
                          <span className="fw-bold"> {jewelry?.brand}</span>
                        </div>
                        <div className="col-md-6">
                          <label>Chất liệu:</label>
                          <span className="fw-bold"> {jewelry?.material}</span>
                        </div>
                        <div className="col-md-6">
                          <label>Trọng lượng (g):</label>
                          <span className="fw-bold"> {jewelry?.weight}</span>
                        </div>
                      </div>
                      <div className="checkout-form-list checkout-form-list-2 mb-2">
                        <label>Mô tả</label>
                        <br />
                        <textarea
                          readOnly
                          className="w-100 h-auto p-1"
                          id="checkout-mess"
                          value={jewelry?.description}
                          style={{ height: '500px' }}
                        ></textarea>
                      </div>


                      <div className="w-100 fw-medium">
                        <div className="checkout-form-list row">
                          <label>Hình ảnh</label>
                          {React.Children.toArray(
                            images.map((img: Image) => (
                              <div className="col-md-3">
                                <img src={img.data} alt="Ảnh sản phẩm" />
                              </div>
                            ))
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="checkout-form-list">
                        <label className="text-danger fw-bold">
                          Giá đề xuất
                        </label>
                        <input
                          className=" fw-bold"
                          placeholder=""
                          type="text"
                          value={formatNumber(request?.desiredPrice)}
                          readOnly={true}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="checkout-form-list">
                        <label className="text-success fw-bold">Định giá</label>
                        <input
                          className=" fw-bold"
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
              </Button>
              <Button variant="warning" onClick={handleShowCreateModal}>
                Tạo yêu cầu
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      )}

      <JewelryCreateRequestModal
        show={showCreateModal}
        handleClose={handleCloseCreateModal}
        request={request}
        jewelry={jewelry}
        images={images}
        user={user}
        handleChangeList={handleChangeList}
      />
    </>
  );
};

export const JewelryCreateRequestModal: React.FC<
  JewelryCreateRequestModalProps
> = ({
  show,
  handleClose,
  jewelry,
  images,
  user,
  request,
  handleChangeList,
}) => {
    const handleSendRequestFromStaff = async () => {
      const requestBody = {
        id: 0,
        senderId: user?.id,
        requestApprovalId: request.id,
        valuation: request.valuation,
        requestTime: new Date().toISOString(),
      };
      console.log(requestBody);

      const newRequest = await sendRequestApprovalFromStaff(requestBody);
      if (newRequest) {
        console.log("Staff send request thanh cong");
        handleChangeList();
      }
    };

    const handleConfirm = async () => {
      const confirm = await confirmRequest(request.id, user?.id);
      if (confirm) {
        console.log("confirm thành công");
        handleSendRequestFromStaff();
      }
      handleClose();
      toast.success("Định giá cho tài sản đã được gửi đi");
    };
    return (
      <>
        {show && (
          <div className="overlay">
            <Modal show={show} onHide={handleClose} centered backdrop="static" size="lg">
              <Modal.Header>
                <Modal.Title className="w-100">
                  <div className="col-12 text-center">
                    Tạo yêu cầu phê duyệt tài sản
                  </div>
                  <div className="col-12 mb-3 text-center ">
                    <span className="text-warning fw-bold">{jewelry?.name}</span>
                  </div>
                  <h5 className="col-12">
                    Nhân viên gửi yêu cầu -{" "}
                    <span className=" fw-bold">{user?.fullName}</span>
                  </h5>
                  <h5 className="col-12">
                    Mã nhân viên - <span className=" fw-bold">{user?.id}</span>
                  </h5>
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <form action="">
                  <div className="checkbox-form">
                    <div className="row">
                      <div className="col-md-12 ">
                        <div className="country-select clearfix"></div>
                      </div>
                      <div className="col-md-6 fw-medium">
                        <div className="checkout-form-list">
                          <label>Mã tài sản </label>
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
                          <label>Danh mục</label>
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
                          <label>Chất liệu</label>
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
                          <label>Thương hiệu</label>
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
                          <label>Cân nặng (g)</label>
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
                          <textarea
                            readOnly
                            id="checkout-mess"
                            value={jewelry?.description}
                          ></textarea>
                        </div>
                      </div>
                      <div className="order-notes col-md-12 fw-medium">
                        <div className="checkout-form-list checkout-form-list-2 row">
                          <label>Hình ảnh sản phẩm </label>
                          {React.Children.toArray(
                            images.map((img: Image) => (
                              <div className="col-md-3">
                                <img src={img.data} alt="Ảnh sản phẩm" />
                              </div>
                            ))
                          )}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="checkout-form-list">
                          <label className="text-danger fw-bold">
                            Giá đề xuất
                          </label>
                          <input
                            className=" fw-bold"
                            placeholder=""
                            type="text"
                            value={formatNumber(request.desiredPrice)}
                            readOnly={true}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="checkout-form-list">
                          <label className="text-success fw-bold">Định giá</label>
                          <input
                            className=" fw-bold"
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

export const DeleteJewelryRequestModal: React.FC<DeleteJewelryModalProps> = ({
  jewelry,
  request,
  user,
  handleChangeList,
}) => {
  const [show, setShow] = useState(false);
  const [reason, setReason] = useState("");
  const [notification, setNotification] = useState("");
  const [cancel, setCancel] = useState<cancelRequestProps>({
    requestId: request.id,
    note: reason,
  });

  const handleClose = () => {
    setNotification("");
    setShow(false);
  };
  const handleShow = () => setShow(true);
  const handleDelete = async () => {
    if (reason === "") {
      setNotification("Cung cấp lý do hủy yêu cầu tài sản");
    } else {
      try {
        if (user) {
          const setState = await changeStateRequest(
            request.id,
            user?.id,
            "HIDDEN"
          );
          const setNote = await cancelRequest(cancel);
          if (setState && setNote) {
            await handleChangeList();
            handleClose();
            toast.success("Xóa thành công.");
          } else {
            setNotification(
              "Hệ thống có một chút sự cố, chưa thể xóa được trang sức này"
            );
          }
        }
      } catch (error) {
        setNotification(
          "Hệ thống có một chút sự cố, chưa thể xóa được trang sức này"
        );
      }
    }
  };

  const handleReasonChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setNotification("");
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
        <div className="overlay">
          <Modal
            show={show}
            onHide={handleClose}
            centered
            backdropClassName="custom-backdrop"
          >
            <Modal.Header className="text-center w-100">
              <Modal.Title className="w-100">
                <div className="col-12 text-center">Xác nhận hủy yêu cầu</div>
                <div className="col-12 mb-3 text-center ">
                  <span className="text-danger fw-bold">{jewelry?.name}</span>
                </div>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p className="fw-semibold">
                Bạn có chắc muốn xóa sản phẩm này khỏi danh sách chờ không?
              </p>
              <Form>
                <Form.Group controlId="formReason">
                  <Form.Label className="fw-semibold">
                    Nhập lý do <span className="text-danger">*</span>
                  </Form.Label>
                  <p className="text-danger fw-semibold">{notification}</p>
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
        <div className="overlay">
          <Modal
            show={show}
            onHide={handleClose}
            centered
            backdropClassName="custom-backdrop"
            size="lg"
          >
            <Modal.Header>
              <Modal.Title className="w-100">
                <div className="col-12 text-center">Thông tin phiên đấu</div>
                <div className="col-12 mb-3 text-center ">
                  <span className="text-warning fw-bold">{auction.name}</span>
                </div>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {" "}
              <form action="">
                <div className="checkbox-form">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="country-select clearfix"></div>
                    </div>
                    <div className="col-md-9 fw-medium">
                      <div className="checkout-form-list">
                        <label>Phiên đấu giá</label>
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
                        <label>Phí tham gia (VNĐ)</label>
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
                        <label>Thời gian bắt đầu</label>
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
                        <label>Thời gian kết thúc</label>
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
                        <label>Giá khởi điểm (VNĐ)</label>
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
                        <label>Tiền đặt trước (VNĐ)</label>
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
                        <label>Bước giá (VNĐ)</label>
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
                        <textarea
                          readOnly
                          id="checkout-mess"
                          value={auction.description}
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-md-6 fw-medium text-danger">
                      <div className="checkout-form-list">
                        <label>Giá cuối (VNĐ)</label>
                        <input
                          className="fw-bold"
                          placeholder="Chưa cập nhật"
                          type="text"
                          value={
                            auction?.lastPrice !== undefined
                              ? formatNumberAcceptNull(auction.lastPrice)
                              : ""
                          }
                          readOnly={true}
                        />
                      </div>
                    </div>
                    <div className="col-md-6 fw-semibold text-success">
                      <div className="checkout-form-list">
                        <label>Trạng thái</label>
                        <input
                          className="fw-bold"
                          placeholder="Street address"
                          type="text"
                          value={auction.state}
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
            </Modal.Footer>
          </Modal>
        </div>
      )}
    </>
  );
};

export const JewelryHanOverModal: React.FC<JewelryHanOverModalProps> = ({
  transaction,
  images,
  user,
  jewelry,
  auction,
}) => {
  const winner = transaction.user;

  const [show, setShow] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const handleCloseJewelryDetail = () => setShow(false);
  const handleShowJewelryDetail = () => setShow(true);

  const handleShowCreateModal = () => {
    setShow(false);
    setShowCreateModal(true);
  };
  const handleCloseCreateModal = () => setShowCreateModal(false);
  return (
    <>
      <Button variant="dark" size="sm" onClick={handleShowJewelryDetail}>
        Xem
      </Button>
      {show && (
        <div className="overlay">
          <Modal
            show={show}
            onHide={handleCloseJewelryDetail}
            centered
            backdrop="static"
            size="lg"
          >
            <Modal.Header>
              <Modal.Title className="w-100">
                <div className="col-12 text-center">Tài sản bàn giao</div>
                <div className="col-12 mb-3 text-center ">
                  <span className="text-warning fw-bold">{jewelry?.name}</span>
                </div>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className='p-4'>
              <form action="">
                <div className="checkbox-form">
                  <div className="row">
                    <div className="col-md-6 fw-medium">
                      <h4 className=" fw-medium">1. Thông tin tài sản</h4>
                      <div className="checkout-form-list mb-2">
                        <label>Mã tài sản: </label>
                        <span className="fw-bold"> {jewelry?.id}</span>
                      </div>
                      <div className="checkout-form-list mb-2">
                        <label>Tên:</label>
                        <span className="fw-bold"> {jewelry?.name}</span>
                      </div>
                      <div className="checkout-form-list mb-2 row">
                        <div className="col-md-6 mb-2">
                          <label>Thương hiệu:</label>
                          <span className="fw-bold"> {jewelry?.brand}</span>
                        </div>
                        <div className="col-md-6">
                          <label>Chất liệu:</label>
                          <span className="fw-bold"> {jewelry?.material}</span>
                        </div>
                        <div className="col-md-6">
                          <label>Trọng lượng (g):</label>
                          <span className="fw-bold"> {jewelry?.weight}</span>
                        </div>
                      </div>
                      <div className="checkout-form-list checkout-form-list-2 mb-2">
                        <label>Mô tả sản phẩm </label>
                        <br />
                        <textarea
                          readOnly
                          className="w-100 p-2"
                          style={{ height: "100px" }}
                          id="checkout-mess"
                          value={jewelry?.description}
                        ></textarea>
                      </div>
                      <div className="w-100 fw-medium">
                        <div className="checkout-form-list row">
                          <label>Hình ảnh</label>
                          {React.Children.toArray(
                            images.map((img: Image) => (
                              <div className="col-md-3">
                                <img src={img.data} alt="Ảnh sản phẩm" />
                              </div>
                            ))
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 fw-medium">
                      <h4 className=" fw-medium">2. Phiên đấu</h4>
                      <div className="checkout-form-list mb-2">
                        <label>Mã phiên: </label>
                        <span className="fw-bold"> {auction?.id}</span>
                      </div>
                      <div className="checkout-form-list mb-2">
                        <label>Tên:</label>
                        <span className="fw-bold"> {auction?.name}</span>
                      </div>
                      <div className="checkout-form-list mb-2 ">
                        <label>Bắt đầu:</label>
                        <span className="fw-bold">
                          {" "}
                          {formatDateString(
                            auction?.startDate ? auction.startDate : ""
                          )}
                        </span>
                      </div>
                      <div className="checkout-form-list mb-2">
                        <label>Kết thúc:</label>
                        <span className="fw-bold">
                          {" "}
                          {formatDateString(
                            auction?.endDate ? auction.endDate : ""
                          )}
                        </span>
                      </div>
                      <div className="checkout-form-list mb-2">
                        <label>Trạng thái: </label>

                        <span className='fw-bold text-uppercase text-success'> <StateAuctionView state={auction?.state ? auction.state : 'FINISHED'} /></span>
                      </div>
                      <div className="checkout-form-list mb-2">
                        <label>
                          Giá cuối:
                        </label>
                        <span className='fw-bold text-uppercase text-danger'> {formatNumberAcceptNull(auction?.lastPrice)} VND</span>
                      </div>
                      <div className="checkout-form-list mb-2">
                        <label>
                          Phương thức thanh toán:
                        </label>
                        <span className='fw-bold text-uppercase'> <PaymentMethod method={transaction.paymentMethod ? transaction.paymentMethod : 'BANKING'} /></span>
                      </div>
                      <div className="checkout-form-list mb-2">
                        <label>
                          Trạng thái:
                        </label>
                        <span className='fw-bold text-uppercase text-danger'> <StateTransaction state={transaction.state} /></span>

                      </div>
                    </div>
                    <div className="col-md-12 fw-medium row">
                      <h4 className=" fw-medium">
                        3. Người đấu giá thành công
                      </h4>
                      <div className="checkout-form-list mb-2 col-md-6">
                        <div className="checkout-form-list mb-2">
                          <label>Mã người dùng: </label>
                          <span className="fw-bold"> {winner?.id}</span>
                        </div>
                        <div className="checkout-form-list mb-2 ">
                          <label>Tên người dùng:</label>
                          <span className="fw-bold"> {winner?.fullName}</span>
                        </div>
                        <div className="checkout-form-list mb-2 ">
                          <label>Số CCCD:</label>
                          <span className="fw-bold"> {winner?.cccd}</span>
                        </div>
                        <div className="checkout-form-list mb-2">
                          <label>Địa chỉ:</label>
                          <span className="fw-semibold">
                            {" "}
                            {winner?.address}, {winner?.ward},{" "}
                            {winner?.district}, {winner?.city}{" "}
                          </span>
                        </div>
                        <div className="checkout-form-list mb-2">
                          <label>Email: </label>
                          <span className="fw-semibold"> {winner?.email}</span>
                        </div>
                      </div>
                      <div className="checkout-form-list mb-2 col-md-6 border p-2 row">
                        <div className="checkout-form-list mb-0 col-md-6">
                          <img src={winner?.bank?.logo} alt="bank" />
                        </div>
                        <div className="checkout-form-list mb-2 col-md-12">
                          <label>Thẻ ngân hàng: </label>
                          <span className="fw-bold text-uppercase">
                            {" "}
                            {winner?.bank?.bankName}
                          </span>
                        </div>
                        <div className="checkout-form-list mb-2 col-md-12 ">
                          <label>Mã số thẻ: </label>
                          <span className="fw-bold text-success">
                            {winner?.bankAccountName} -{" "}
                            {winner?.bankAccountNumber}
                          </span>
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
              </Button>
              <Button variant="warning" onClick={handleShowCreateModal}>
                Tiến hành bàn giao
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      )}

      <CreateHandoverReportModal
        show={showCreateModal}
        handleClose={handleCloseCreateModal}
        auction={auction}
        jewelry={jewelry}
        user={user}
      />
    </>
  );
};

export const CreateHandoverReportModal: React.FC<
  CreateHandoverReportModalProps
> = ({ show, handleClose, user, auction, jewelry }) => {
  return (
    <>
      {show && (
        <div className="overlay">
          <Modal
            show={show}
            onHide={handleClose}
            centered
            backdrop="static"
            size="lg"
          >
            <Modal.Header>
              <Modal.Title className="w-100">
                <div className="col-12 text-center">
                  Thông tin bàn giao sản phẩm
                </div>
                <div className="col-12 mb-3 text-center ">
                  <span className="text-warning fw-bold">{jewelry?.name}</span>
                </div>
                <h5 className="col-12">
                  Nhân viên - <span className=" fw-bold">{user?.fullName}</span>
                </h5>
                <h5 className="col-12">
                  Mã nhân viên - <span className=" fw-bold">{user?.id}</span>
                </h5>
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

export const ConfirmHoldingModal: React.FC<ConfirmHoldingModalProps> = ({
  jewelry,
  handleChangeList,
}) => {
  const [show, setShow] = useState(false);

  const handleCloseJewelryDetail = () => {
    handleChangeList();
    setShow(false);
  };
  const handleShowJewelryDetail = () => setShow(true);

  const handleConfirm = async () => {
    const confirm = await setJewelryHolding(jewelry.id);
    if (confirm) {
      console.log("set holding thành công");
    }
    handleChangeList()
    handleCloseJewelryDetail();
  };

  return (
    <>
      <Button variant="warning" size="sm" onClick={handleShowJewelryDetail}>
        Đã nhận
      </Button>
      {show && (
        <div className="overlay">
          <Modal
            show={show}
            onHide={handleCloseJewelryDetail}
            centered
            backdrop="static"
            size='lg'
            className="p-4"
          >
            <Modal.Header>
              <Modal.Title className="w-100">
                <div className="col-12 text-center">Xác nhận đã nhận tài sản</div>
                <div className="col-12 mb-3 text-center ">
                  <span className="text-success fw-bold">{jewelry?.name}</span>
                </div>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="p-4">
              <h6 className="lh-base">
                Tài sản{" "}
                <span className="text-success fw-semibold">
                  {jewelry?.name}
                </span>{" "}
                được xác nhận đã có mặt tại cơ sở?
              </h6>
              <h6 className="lh-base">
                Nhân viên kiểm tra kỹ chính xác thông tin tài sản trước khi tiến hành xác nhận
              </h6>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="dark" onClick={handleCloseJewelryDetail}>
                Đóng
              </Button>
              <Button variant="warning" onClick={handleConfirm}>
                Xác nhận
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      )}
    </>
  );
};
