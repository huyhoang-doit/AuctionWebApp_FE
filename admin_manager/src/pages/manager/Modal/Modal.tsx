import React, { useEffect, useState } from "react";
import { Image } from "../../../models/Image";
import { Jewelry } from "../../../models/Jewelry";
import { RequestApproval } from "../../../models/RequestApproval";
import { User } from "../../../models/User";
import { Button, Form, Modal, Spinner, Table } from "react-bootstrap";
import {
  formatNumber,
  formatNumberAcceptNull,
} from "../../../utils/formatNumber";
import changeStateRequest, {
  cancelRequest,
  confirmRequest,
  sendRequestApprovalFromManager,
} from "../../../api/RequestApprovalAPI";
import { toast } from "react-toastify";
import "./Modal.css";
import {
  formatDateString,
  formatDateStringAcceptNull,
} from "../../../utils/formatDateString";
import { Auction } from "../../../models/Auction";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { getMembers, getUserById } from "../../../api/UserAPI";
import { PaginationControl } from "react-bootstrap-pagination-control";
import { createNewAuctionFromManager, deleteAuctionResult } from "../../../api/AuctionAPI";
import PARTICIPATION_FEE from "../../../global_variable/variable";
import { descriptionAuction } from "../../../utils/descriptionAuction";
import { changeStateTransaction } from "../../../api/TransactionAPI";
import { Transaction } from "../../../models/Transaction";
import { TypeTransaction } from "../Transaction/TypeTransaction";
import { PaymentMethod } from "../Transaction/PaymentMethod";
import { convertFilesToBase64, uploadFilesToFirebase } from "../../../utils/imageFireBase";
import { JEWELRY_IMAGES_FOLDER } from "../../../global_variable/firebaseconfig";
import { deleteImagesByJewelryId, processImages, setImageForJewelry } from "../../../api/ImageApi";
import { getAuctionRegistrationsByAuctionId } from "../../../api/AuctionRegistrationAPI";
import { AuctionRegistration } from "../../../models/AuctionRegistration";
import { Link } from "react-router-dom";
import { StateTransaction } from "../Transaction/StateTransaction";

// *** MODAL FOR MANAGER ***
// Modal for Jewelry List
interface JewelryModalProps {
  jewelry: Jewelry | undefined;
  images: Image[];
  user: User | null;
  request: RequestApproval;
  handleChangeList: () => Promise<void>;
}
export const JewelryModal: React.FC<JewelryModalProps> = ({
  jewelry,
  images,
  user,
  request,
  handleChangeList,
}) => {
  const [show, setShow] = useState(false);

  const handleCloseJewelryDetail = () => setShow(false);
  const handleShowJewelryDetail = () => setShow(true);
  //

  const handleSendRequestFromManager = async () => {
    const requestBody = {
      id: 0,
      senderId: user?.id,
      requestApprovalId: request.id,
      requestTime: new Date().toISOString(),
    };
    console.log(requestBody);

    const newRequest = await sendRequestApprovalFromManager(requestBody);
    if (newRequest) {
      console.log("Staff send request thanh cong");
      handleChangeList();
    }
  };

  const handleConfirm = async () => {
    const confirm = await confirmRequest(request.id, user?.id);
    if (confirm) {
      handleSendRequestFromManager();
    }
    handleCloseJewelryDetail();
  };

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
                <div className="col-12 text-center">Thông tin tài sản</div>
                <div className="col-12 mb-3 text-center ">
                  <span className="text-warning fw-bold">{jewelry?.name}</span>
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
            <Modal.Body>
              <form action="">
                <div className="checkbox-form">
                  <div className="row">
                    <div className="col-md-12 ">
                      <div className="country-select clearfix"></div>
                    </div>
                    <div className="col-md-12 fw-medium">
                      <div className="checkout-form-list mb-2 row">
                        <div className="col-md-6">
                          <span>Chủ tài sản:</span>
                          <span className="fw-bold">
                            {" "}
                            {jewelry?.user?.fullName}
                          </span>
                        </div>
                        <div className="col-md-6">
                          <span>Mã người dùng:</span>
                          <span className="fw-bold"> {jewelry?.user?.id}</span>
                        </div>
                      </div>
                      <div className="checkout-form-list mb-2">
                        <span>Mã tài sản: </span>
                        <span className="fw-bold"> {jewelry?.id}</span>
                      </div>
                      <div className="checkout-form-list mb-2">
                        <span>Tên:</span>
                        <span className="fw-bold"> {jewelry?.name}</span>
                      </div>
                      <div className="checkout-form-list mb-2 row">
                        <div className="col-md-6 mb-2">
                          <span>Danh mục:</span>
                          <span className="fw-bold">
                            {" "}
                            {jewelry?.category?.name}
                          </span>
                        </div>
                        <div className="col-md-6">
                          <span>Thương hiệu:</span>
                          <span className="fw-bold"> {jewelry?.brand}</span>
                        </div>
                        <div className="col-md-6">
                          <span>Chất liệu:</span>
                          <span className="fw-bold"> {jewelry?.material}</span>
                        </div>
                        <div className="col-md-6">
                          <span>Trọng lượng (g):</span>
                          <span className="fw-bold"> {jewelry?.weight}</span>
                        </div>
                      </div>
                      <div className="checkout-form-list checkout-form-list-2" style={{ height: '150px' }}>
                        <span>Mô tả </span>
                        <br />
                        <textarea
                          readOnly
                          className="w-100 h-100 p-1"
                          id="checkout-mess"
                          value={jewelry?.description}
                        ></textarea>
                      </div>
                      <div className="w-100 fw-medium mt-5">
                        <div className="checkout-form-list row">
                          <label>Hình ảnh</label>
                          {React.Children.toArray(
                            images.map((img: Image) => (
                              <div className="col-md-3">
                                <img
                                  src={img.data}
                                  alt="Ảnh sản phẩm"
                                  className="w-100"
                                />
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
                          value={formatNumberAcceptNull(request?.desiredPrice)}
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
                          value={formatNumberAcceptNull(request.valuation)}
                          readOnly={true}
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

// Delete Jewelry Modal
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

// *** MANAGE AUCTION

type AuctionType = {
  auction: Auction;
};
export const AuctionModal: React.FC<AuctionType> = ({ auction }) => {
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
                <h5 className="col-12">
                  Nhân viên phụ trách -{" "}
                  <span className=" fw-bold">{auction.user?.fullName}</span>
                </h5>
                <h5 className="col-12">
                  Mã nhân viên -{" "}
                  <span className=" fw-bold">{auction.user?.id}</span>
                </h5>
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
                    <div className="order-notes col-md-12 fw-medium mb-5 ">
                      <div className="checkout-form-list checkout-form-list-2" style={{ height: '200px' }}>
                        <label>Mô tả </label>

                        <div className="border p-2" dangerouslySetInnerHTML={{ __html: auction?.description ? auction?.description : '' }} style={{ overflowY: 'auto', height: '100%' }} />
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

// CREATE NEW AUCTION MODAL
interface CreateNewAuctionModalProps {
  request: RequestApproval;
  jewelry: Jewelry | undefined;
  images: Image[];
  user: User | null;
  handleChangeList: () => Promise<void>;
}

interface NewAuctionRequestProps {
  id: number;
  name: string;
  startDate: string;
  endDate: string;
  description: string;
  firstPrice: number;
  deposit: number;
  priceStep: number;
  jewelryId: number;
  staffId: number;
}
export const CreateNewAuctionModal: React.FC<CreateNewAuctionModalProps> = ({
  request,
  jewelry,
  images,
  user,
  handleChangeList,
}) => {
  const [show, setShow] = useState(false);
  const [showContinueModal, setShowContinueModal] = useState(false);
  const handleCloseCreateAuction = () => setShow(false);
  const handleShowCreateAuction = () => setShow(true);
  const [loading, setLoading] = useState<boolean>(false);
  //
  const participationFee: number = PARTICIPATION_FEE;
  const firstPrice: number = request?.valuation ? request.valuation : 0;
  const deposit: number =
    request && request.valuation
      ? Math.round((request.valuation * 0.1) / 50000) * 50000
      : 0;
  const priceStep: number =
    request && request.valuation
      ? Math.round((request.valuation * 0.05) / 50000) * 50000
      : 0;
  const jewelryId = request.jewelry?.id ? request.jewelry.id : 0;

  //
  const [errorTime, setErrorTime] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  //
  const [name, setName] = useState<string>("");
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [base64Images, setBase64Images] = useState<string[]>([]);


  const [newAuctionRequest, setNewAuctionRequest] =
    useState<NewAuctionRequestProps>({
      id: 0,
      name: "",
      startDate: "",
      endDate: "",
      description: "",
      firstPrice: firstPrice,
      deposit: deposit,
      priceStep: priceStep,
      jewelryId: jewelryId,
      staffId: 0,
    });

  const handleImagesChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const fileArray = Array.from(files);
      const base64Array = await convertFilesToBase64(fileArray);
      setBase64Images(base64Array);
      setLoading(true);
      try {
        await deleteImagesByJewelryId(jewelryId);
        const urls = await uploadFilesToFirebase(fileArray, JEWELRY_IMAGES_FOLDER);
        console.log(urls);
        if (urls.length > 0) {
          await setImageForJewelry({ data: urls[0], jewelryId: jewelryId }, true);
        }
        await processImages(urls, jewelryId);

        console.log("Jewelry images updated successfully.");
      }
      catch (error) {
        console.error("Error sending jewelry request:", error);
      }
      finally {
        setLoading(false);
      }

    }
  }

  const updateName = (name: string) => {
    setName(name);
    setError(null);
    setNewAuctionRequest((prev) => ({ ...prev, name: name }));
  };

  const updateStartDate = (startDate: string) => {
    setStartDate(startDate);
    setNewAuctionRequest((prev) => ({ ...prev, startDate: startDate }));
    setErrorTime(null);
    setError(null);
  };

  const updateEndDate = (endDate: string) => {
    const start = new Date(newAuctionRequest.startDate).getTime();
    const end = new Date(endDate).getTime();
    const fourHours = 4 * 60 * 60 * 1000;

    if (end - start < fourHours) {
      setErrorTime(
        "Thời gian kết thúc phải sau thời gian bắt đầu ít nhất 4 tiếng"
      );
      setEndDate("");
    } else {
      setErrorTime(null);
      setError(null);
      setEndDate(endDate);
      setNewAuctionRequest((prev) => ({ ...prev, endDate: endDate }));
    }
  };

  const getNextDayMinDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split(".")[0];
  };

  const updateDescription = (description: string) => {
    setDescription(description);
    setNewAuctionRequest((prev) => ({ ...prev, description: description }));
  };

  const handleShowSelectStaffModal = () => {
    if (name === "" || startDate === "" || endDate === "") {
      setError("Cần cung cấp đủ thông tin");
    } else {
      setShow(false);
      setShowContinueModal(true);
    }
  };

  const handleComback = () => {
    handleCloseSelectStaffModal();
    handleShowCreateAuction();
  };

  useEffect(() => {
    const desString = descriptionAuction({
      jewelry,
      participationFee,
      firstPrice,
      deposit,
      priceStep,
      startDate,
      endDate,
    });

    setDescription(desString);
  }, [
    jewelry,
    participationFee,
    firstPrice,
    deposit,
    priceStep,
    startDate,
    endDate,
  ]);
  const handleCloseSelectStaffModal = () => setShowContinueModal(false);
  return (
    <>
      <Button variant="warning" size="sm" onClick={handleShowCreateAuction}>
        Tạo phiên đấu giá
      </Button>
      {show && (
        <div className="overlay">
          <Modal
            show={show}
            onHide={handleCloseCreateAuction}
            centered
            backdrop="static"
            size="xl"
          >
            <Modal.Header>
              <Modal.Title className="w-100">
                <div className="col-12 text-center">Tạo phiên đấu giá </div>
                <div className="col-12 mb-3 text-center ">
                  <span className="text-warning fw-bold">
                    {request.jewelry?.name}
                  </span>
                </div>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="p-4 fs-6">
              <form action="">
                <div className="checkbox-form fw-medium row mb-3">
                  <h4 className=" fw-medium text-center text-decoration-underline">
                    1. Thông tin tài sản
                  </h4>
                  <div className="col-md-8 checkout-form-list mb-2">
                    <span>Chủ tài sản:{"   "}</span>
                    <span className="fw-bold">
                      {" "}
                      {request?.responder?.fullName}
                    </span>
                  </div>
                  <div className="col-md-4 checkout-form-list mb-2">
                    <span>Mã người dùng:{"   "}</span>
                    <span className="fw-bold">{request?.responder?.id}</span>
                  </div>
                  <div className="col-md-8 checkout-form-list mb-2">
                    <span>Tên tài sản:{"   "}</span>
                    <span className="fw-bold"> {jewelry?.name}</span>
                  </div>
                  <div className="col-md-4 checkout-form-list mb-2">
                    <span>Mã tài sản:</span>
                    <span className="fw-bold"> {jewelry?.id}</span>
                  </div>
                  <div className="mb-2">
                    <div className="row px-2 pt-4 border">
                      <div className="col-md-6 mb-2">
                        <div className="mb-2">
                          <span>Thương hiệu:</span>
                          <span className="fw-bold"> {jewelry?.brand}</span>
                        </div>
                        <div className="mb-2">
                          <span>Chất liệu:</span>
                          <span className="fw-bold"> {jewelry?.material}</span>
                        </div>
                        <div>
                          <span>Trọng lượng (g):</span>
                          <span className="fw-bold"> {jewelry?.weight}</span>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="checkout-form-list checkout-form-list-2">
                          <span>Mô tả </span>
                          <br />
                          <textarea
                            readOnly
                            className="w-100 mt-2 p-2"
                            style={{ height: "100px" }}
                            id="checkout-mess"
                            value={jewelry?.description}
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>

                  <label
                    className="btn btn-dark mb-2"
                    style={{ width: "auto" }}
                    htmlFor="jewelry-img"
                  >
                    Cập nhật ảnh tài sản
                  </label>
                  <input
                    style={{ display: 'none' }}
                    id="jewelry-img"
                    type="file"
                    name="jewelryImages"
                    multiple
                    onChange={handleImagesChange}
                  />
                  <div className="w-100 fw-medium border">
                    <div className="checkout-form-list row px-2 pt-4">
                      <label>Hình ảnh</label>
                      {loading ? <Spinner animation="border" /> : (base64Images.length > 0 ? (React.Children.toArray(
                        base64Images.map((img: string) => (
                          <div className="col-md-2">
                            <img
                              src={img}
                              alt="Ảnh sản phẩm"
                              style={{ width: "100%" }}
                            />
                          </div>
                        ))
                      )) : (React.Children.toArray(
                        images.map((img: Image) => (
                          <div className="col-md-2">
                            <img
                              src={img.data}
                              alt="Ảnh sản phẩm"
                              style={{ width: "100%" }}
                            />
                          </div>
                        ))
                      )))}

                      { }
                    </div>
                  </div>
                </div>
              </form>
              <form action="">
                <div className="checkbox-form fw-medium row ">
                  <h4 className="fw-medium text-center text-decoration-underline">
                    2. Nhập thông tin phiên đấu giá
                  </h4>
                  <div className="col-md-12 mb-2 mt-3">
                    <label htmlFor="txtAuctionName">Tên phiên: </label>
                    <input
                      id="txtAuctionName"
                      className="fw-semibold p-2 w-100"
                      placeholder=" Nhập tên phiên đấu giá"
                      type="text"
                      value={name}
                      onChange={(e) => updateName(e.target.value)}
                      required
                    />
                  </div>

                  <div className="col-md-6 mt-2">
                    <div className="checkout-form-list mb-2">
                      <span>Phí tham gia:</span>
                      <span className="fw-bold">
                        {" "}
                        {formatNumber(participationFee)} VND
                      </span>
                    </div>
                    <div className="checkout-form-list mb-2">
                      <span>Giá khởi điểm:</span>{" "}
                      <span className="fw-bold">
                        {" "}
                        {formatNumber(firstPrice)} VND
                      </span>
                    </div>
                    <div className="checkout-form-list mb-2">
                      <span>Tiền đặt trước:</span>{" "}
                      <span className="fw-bold">
                        {formatNumber(deposit)} VND
                      </span>
                    </div>
                    <div className="checkout-form-list mb-2">
                      <span>Bước giá:</span>
                      <span className="fw-bold">
                        {" "}
                        {formatNumber(priceStep)} VND
                      </span>
                    </div>
                  </div>
                  <div className="col-md-6 mt-3" style={{ fontSize: "12px" }}>
                    <ul>
                      <li>
                        (*) Giá khởi điểm được cung cấp từ định giá của tài sản.
                      </li>
                      <li>
                        Tiền đặt trước được tính từ 9% - 11% định giá của tài
                        sản. (Được làm tròn với bội số của 50.000 VND)
                      </li>
                      <li>
                        Bước giá được tính từ 5% định giá của tài sản. (Được làm
                        tròn với bội số của 50.000 VND)
                      </li>
                      <li></li>
                    </ul>
                  </div>
                  <div
                    className="col-md-6 mb-2 mt-2"
                    style={{ display: "flex", flexDirection: "column" }}
                  >
                    <label style={{ marginBottom: "5px" }} htmlFor="txtStart">
                      Thời gian bắt đầu:
                    </label>
                    <input
                      className="p-3"
                      type="datetime-local"
                      name="txtDatetimeLocal"
                      id="txtStart"
                      value={startDate}
                      onChange={(e) => {
                        updateStartDate(e.target.value);
                      }}
                      min={getNextDayMinDate()}
                      required
                    />
                  </div>
                  <div
                    className="col-md-6 mb-2 mt-2"
                    style={{ display: "flex", flexDirection: "column" }}
                  >
                    <label style={{ marginBottom: "5px" }} htmlFor="txtEnd">
                      Thời gian kết thúc:
                    </label>
                    <input
                      className="p-3"
                      type="datetime-local"
                      name="txtDatetimeLocal"
                      id="txtEnd"
                      value={endDate}
                      onChange={(e) => {
                        updateEndDate(e.target.value);
                      }}
                      min={getNextDayMinDate()}
                      required
                    />
                  </div>
                  {errorTime && <p style={{ color: "red" }}>{errorTime}</p>}
                  <div className="col-md-12 mt-2">
                    <label style={{ marginBottom: "5px" }} htmlFor="txtStart">
                      Mô tả cho phiên:
                    </label>
                    <div style={{ height: "400px" }}>
                      <CKEditor
                        editor={ClassicEditor}
                        data={description}
                        config={{
                          ckbox: {
                            tokenUrl:
                              "https://111289.cke-cs.com/token/dev/bpym057sSTzEaKMwFLqRUCAT2BZ92hvE6xKw?limit=10",
                            theme: "lark",
                          },
                        }}
                        onReady={(editor) => {
                          console.log("Đã sử dụng được");

                          editor.editing.view.change((writer) => {
                            const root = editor.editing.view.document.getRoot();
                            if (root) {
                              writer.setStyle("height", "300px", root);
                            }
                          });
                        }}
                        onChange={(event, editor) => {
                          const data = editor.getData();
                          updateDescription(data);
                        }}
                      />
                    </div>
                  </div>
                </div>

                {error && (
                  <div className="me-5 text-end w-100">
                    <p style={{ color: "red" }}>{error}</p>
                  </div>
                )}
              </form>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="dark" onClick={handleCloseCreateAuction}>
                Đóng
              </Button>
              <Button variant="warning" onClick={handleShowSelectStaffModal}>
                Tiếp tục
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      )}

      <SelectStaffForAucionModal
        show={showContinueModal}
        handleClose={handleCloseSelectStaffModal}
        user={user}
        handleComback={handleComback}
        newAuction={newAuctionRequest}
        handleChangeList={handleChangeList}
      />
    </>
  );
};

interface SelectStaffForAucionModal {
  show: boolean;
  handleClose: () => void;
  handleComback: () => void;
  user: User | null;
  newAuction: NewAuctionRequestProps;
  handleChangeList: () => Promise<void>;
}

export const SelectStaffForAucionModal: React.FC<SelectStaffForAucionModal> = ({
  show,
  handleClose,
  handleComback,
  newAuction,
  handleChangeList,
}) => {
  const [staffs, setStaffs] = useState<User[]>([]);
  const [page, setPage] = useState(1);
  const [totalElements, setTotalElements] = useState(0);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(false);
  const [staff, setStaff] = useState<User>();

  useEffect(() => {
    setLoading(true);
    getMembers("STAFF", "", "VERIFIED", page).then((response) => {
      setStaffs(response.usersData);
      setTotalElements(response.totalElements);
    });
    setLoading(false);
  }, [page]);

  const selectStaff = async (staffId: number) => {
    setSelected(true);
    const response = await getUserById(staffId);
    setStaff(response);
    newAuction.staffId = staffId;
  };

  const completeCreateAuction = async () => {
    const response = await createNewAuctionFromManager(newAuction);
    if (response) {
      console.log("Dang ky phien dau gia moi thanh cong");
      handleChangeList();
    }
    handleClose();
  };
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
                  Nhân viên quản lý phiên
                </div>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="">
                <div className="white_box_tittle list_header">
                  <h4>Danh sách nhân viên</h4>
                  <div className="box_right d-flex lms_block"></div>
                </div>
                {selected && (
                  <div className="row">
                    <div className="col-md-4">
                      <div
                        style={{
                          width: "100%",
                          height: "220px",
                          overflow: "hidden",
                          borderRadius: "50%",
                          position: "relative",
                        }}
                      >
                        <img
                          src={staff?.avatar}
                          alt="avatar"
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            objectPosition: "center",
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-md-8 ps-5 mt-3">
                      <div className="checkout-form-list mb-2">
                        <span>Mã nhân viên:</span>
                        <span className="fw-bold"> {staff?.id}</span>
                      </div>
                      <div className="checkout-form-list mb-2">
                        <span>Tên:</span>{" "}
                        <span className="fw-bold"> {staff?.fullName}</span>
                      </div>
                      <div className="checkout-form-list mb-2">
                        <span>Số điện thoại:</span>{" "}
                        <span className="fw-bold">{staff?.phone}</span>
                      </div>
                      <div className="checkout-form-list mb-2">
                        <span>Email:</span>
                        <span className="fw-bold"> {staff?.phone}</span>
                      </div>
                    </div>
                  </div>
                )}

                <div className="QA_table border mt-4">
                  <table className="table lms_table_active text-center">
                    <thead>
                      <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Tên</th>
                        <th scope="col">Email</th>
                        <th scope="col">Số điện thoại</th>
                        <th scope="col">Thao tác</th>
                      </tr>
                    </thead>
                    <tbody>
                      {loading ? (
                        <tr>
                          <td colSpan={5} className="text-center">
                            <Spinner animation="border" />
                          </td>
                        </tr>
                      ) : (
                        staffs.map((staff) => (
                          <tr key={staff.id}>
                            <td>{staff.id}</td>
                            <td>{staff.fullName}</td>
                            <td>{staff.email}</td>
                            <td>{staff.phone}</td>

                            <td>
                              <div className="btn-group">
                                <Button
                                  size="sm"
                                  onClick={() => {
                                    selectStaff(staff.id);
                                  }}
                                >
                                  Chọn
                                </Button>
                              </div>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                  <PaginationControl
                    page={page}
                    between={3}
                    total={totalElements}
                    limit={5}
                    changePage={(page) => {
                      setPage(page);
                    }}
                    ellipsis={1}
                  />
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="dark" onClick={handleClose}>
                Đóng
              </Button>
              <Button variant="dark" onClick={handleComback}>
                Quay lại
              </Button>
              <Button variant="warning" onClick={completeCreateAuction}>
                Hoàn tất
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      )}
    </>
  );
};

// *** MAGAGE TRANSACTIONS
type TransacationModalProps = {
  transaction: Transaction;
};
export const ViewTransactionModal: React.FC<TransacationModalProps> = ({
  transaction,
}) => {
  const payer = transaction.user;

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
                <div className="col-12 text-center">
                  Thông tin chi tiết giao dịch
                </div>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="p-3">
              <form action="">
                <div className="checkbox-form">
                  <div className="fw-medium row">
                    <h4 className=" fw-medium text-decoration-underline">
                      Tài khoản giao dịch
                    </h4>
                    <div className="checkout-form-list my-4 col-md-6">
                      <div className="checkout-form-list mb-2">
                        <span>Mã người dùng: </span>
                        <span className="fw-bold"> {payer?.id}</span>
                      </div>
                      <div className="checkout-form-list mb-2 ">
                        <span>Tên người dùng:</span>
                        <span className="fw-bold">
                          {" "}
                          {payer?.firstName} {payer?.lastName}
                        </span>
                      </div>
                      <div className="checkout-form-list mb-2 ">
                        <span>Số CCCD:</span>
                        <span className="fw-bold"> {payer?.cccd}</span>
                      </div>
                      <div className="checkout-form-list mb-2">
                        <span>Địa chỉ:</span>
                        <span className="fw-semibold">
                          {" "}
                          {payer?.address}, {payer?.city}, {payer?.district}{" "}
                        </span>
                      </div>
                      <div className="checkout-form-list mb-2">
                        <span>Email: </span>
                        <span className="fw-semibold"> {payer?.email}</span>
                      </div>
                    </div>
                    <div className="checkout-form-list ms-2 mb-2 col-md-6 border p-2 row">
                      <div className="checkout-form-list mb-0 col-md-6">
                        <img src={payer?.bank?.logo} alt="bank" />
                      </div>
                      <div className="checkout-form-list mb-2 col-md-12">
                        <span>Thẻ ngân hàng: </span>
                        <span className="fw-bold text-uppercase">
                          {" "}
                          {payer?.bank?.bankName}
                        </span>
                      </div>
                      <div className="checkout-form-list mb-2 col-md-12 ">
                        <span>Mã số thẻ:</span>
                        <span className="fw-bold text-success">
                          {" "}
                          {payer?.bankAccountName} - {payer?.bankAccountNumber}
                        </span>
                      </div>
                    </div>
                    <div className="checkout-form-list my-4 col-md-12 p-2 row">
                      <h4 className=" fw-medium text-decoration-underline">
                        Thông tin giao dịch
                      </h4>

                      <div className="checkout-form-list my-4 col-md-6">
                        <div className="checkout-form-list mb-2">
                          <span>Loại giao dịch: </span>
                          <span className="fw-bold">
                            {" "}
                            <TypeTransaction type={transaction.type} />
                          </span>
                        </div>
                        <div className="checkout-form-list mb-2">
                          <span>Phiên đấu giá: </span>
                          <span className="fw-bold">
                            {" "}
                            {transaction.auction?.id} -{" "}
                            {transaction.auction?.name}
                          </span>
                        </div>
                        <div className="checkout-form-list mb-2 ">
                          <span>Phương thức thanh toán:</span>
                          <span className="fw-bold">
                            {" "}
                            <PaymentMethod method={transaction.paymentMethod ?? ""} />
                          </span>

                        </div>
                      </div>
                      <div className="checkout-form-list my-4 col-md-6">
                        <div className="checkout-form-list mb-2">
                          <span>Thời gian khởi tạo: </span>
                          <span className="fw-bold">
                            {" "}
                            {formatDateStringAcceptNull(transaction.createDate)}
                          </span>
                        </div>
                        <div className="checkout-form-list mb-2 ">
                          <span>Thời gian thanh toán:</span>
                          <span className="fw-bold">
                            {" "}
                            {transaction.paymentTime ? formatDateStringAcceptNull(
                              transaction.paymentTime
                            ) : <StateTransaction state={transaction.state} />}

                          </span>
                        </div>
                      </div>
                      <div className="checkout-form-list mb-2 col-md-12">
                        <span>Tổng số tiền: </span>
                        <span className="fw-bold text-uppercase fs-4 text-success">
                          {" "}
                          {formatNumberAcceptNull(transaction.totalPrice)} VND
                        </span>
                      </div>
                      <div className="mt-3">
                        <span style={{ fontSize: "12px" }}>
                          (*)Mọi thắc mắc xin liên hệ hotline (+84) 0123456789
                          để được hỗ trợ.
                        </span>
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
// Delete Transaction Modal
interface DeleteTransactionModalProps {
  transaction: Transaction;
}

export const DeleteTransactionModal: React.FC<DeleteTransactionModalProps> = ({
  transaction,
}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);
  const handleDelete = async () => {
    changeStateTransaction(transaction.id, "HIDDEN");
    handleClose();
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
        Xóa
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
                <div className="col-12 text-center">Xác nhận xóa giao dịch</div>
                <div className="col-12 mb-3 text-center ">
                  <span className="text-danger fw-bold">{transaction.id}</span>
                </div>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h5 className="fw-semibold">
                Bạn có chắc muốn xóa giao dịch này khỏi danh sách không?
              </h5>
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

interface DeleteAuctionResultModalProps {
  transaction: Transaction;
}

export const DeleteAuctionResultModal: React.FC<DeleteAuctionResultModalProps> = ({
  transaction,
}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);
  const handleDelete = async () => {
    deleteAuctionResult(transaction.id);
    handleClose();
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
        Hủy kết quả
      </button>
      {show && (
        <div className="overlay">
          <Modal
            show={show}
            onHide={handleClose}
            centered
            backdropClassName="custom-backdrop"
            size="lg"
          >
            <Modal.Header className="text-center w-100">
              <Modal.Title className="w-100">
                <div className="col-12 text-center">Hủy kết quả phiên đấu giá</div>
                <div className="col-12 mb-3 text-center ">
                  <span className="text-danger fw-bold">{transaction.auction?.name}{' '} </span>
                  <span className="text-danger fw-bold">(Mã phiên {transaction.id} )</span>
                </div>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p className="fw-bold" style={{ fontSize: '1.2rem', marginBottom: '1rem', color: '#333' }}>
                Xác nhận hủy kết quả phiên đấu giá:
              </p>
              <ul className="fw-semibold" style={{ listStyleType: 'circle', paddingLeft: '20px', color: '#555' }}>
                <li style={{ marginBottom: '0.5rem' }}>Giao dịch này sẽ bị hủy bỏ</li>
                <li style={{ marginBottom: '0.5rem' }}>Tài sản sẽ được tạo phiên đấu giá mới</li>
                <li style={{ marginBottom: '0.5rem' }}>Tài khoản người dùng tham gia không hợp lệ sẽ bị khóa theo quy định</li>
              </ul>
              <p className="fw-bold" style={{ fontSize: '1.2rem', marginTop: '1.5rem', color: '#333' }}>
                Bạn có chắc muốn hủy kết quả phiên đấu giá này không?
              </p>
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

interface ViewAuctionRegistratopnModalProps {
  auctionId: number;
  name: string;
}

export const ViewAuctionRegistrationModal: React.FC<ViewAuctionRegistratopnModalProps> = ({ name, auctionId }) => {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true);
  const [auctionRegistrations, setAuctionRegistrations] = useState<AuctionRegistration[]>(
    []
  );
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    setLoading(true);
    getAuctionRegistrationsByAuctionId(auctionId)
      .then((response) => {
        setAuctionRegistrations(response.auctionRegistrationsData);
      })
      .catch(() => { });
    setLoading(false);
  }, [auctionRegistrations, auctionId])

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
            size="xl"
          >
            <Modal.Header className="text-center w-100">
              <Modal.Title className="w-100">
                <div className="col-12 text-center fw-bold">
                  Danh sách đăng ký tham gia phiên đấu giá
                </div>
                <div className="col-12 mb-3 text-center ">
                  <span className="text-danger fw-bold">
                    {name} (Phiên số {auctionId})
                  </span>
                </div>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="myaccount-orders">
                <div className="table-responsive mt-2">
                  <Table striped bordered hover>
                    <tbody>
                      <tr>
                        <th>Mã số</th>
                        <th>Tên người dùng đã đăng ký</th>
                        <th>Thời gian đăng ký</th>
                        <th>Phí đăng ký (VNĐ)</th>
                        <th>Tiền đặt cọc (VNĐ)</th>
                        <th>Tổng tiền (VNĐ)</th>
                        <th>Trạng thái thanh toán</th>
                      </tr>
                      {loading ? (
                        <tr>
                          <td colSpan={4} className="text-center">
                            <Spinner animation="border" />
                          </td>
                        </tr>
                      ) : auctionRegistrations.length > 0 ? (
                        React.Children.toArray(
                          auctionRegistrations.map((auctionRegistration) => (
                            <tr>
                              <td className="fw-semibold">
                                {auctionRegistration.id}
                              </td>
                              <td>
                                {auctionRegistration.user?.username}
                                <Link target="_blank" to={`/manager/chi-tiet-nguoi-dung/${auctionRegistration.user?.id}`}><i className="ms-2 fa-solid fa-eye text-dark"></i></Link>
                              </td>
                              <td>{formatDateString(auctionRegistration.registrationDate ?? "")}</td>
                              <td>{formatNumber(auctionRegistration.auction?.participationFee)}</td>
                              <td>{formatNumber(auctionRegistration.auction?.deposit)}</td>
                              <td className="fw-bold text-danger">
                                {formatNumber(auctionRegistration.registrationFee)}
                              </td>
                              <td className="fw-bold text-success">
                                {auctionRegistration.state === "VALID" ? "Đã thanh toán" : "Chưa thanh toán"}
                              </td>
                            </tr>
                          ))
                        )
                      ) : (
                        <tr className="text-center">
                          <td colSpan={7}>
                            <h5 className='fw-semibold lh-base mt-2'>
                              Chưa có bất kì ai đăng ký tham gia phiên đấu giá này</h5>
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </Table>
                </div>
              </div>
              <div className="mt-4">
                {/* <PaginationControl
                  page={page}
                  between={3}
                  total={totalElements}
                  limit={5}
                  changePage={(page) => {
                    setPage(page);
                  }}
                  ellipsis={1}
                /> */}
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