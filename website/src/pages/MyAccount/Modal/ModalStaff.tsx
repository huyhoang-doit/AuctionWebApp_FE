import { Modal, Button, Form, Spinner } from "react-bootstrap";
import { RequestApproval } from "../../../models/RequestApproval";
import { Jewelry } from "../../../models/Jewelry";
import { Image } from "../../../models/Image";
import { User } from "../../../models/User";
import { Transaction } from "../../../models/Transaction";
import { Auction } from "../../../models/Auction";
import React, { ChangeEvent, useEffect, useState } from "react";
import {
  getIconImageByJewelryId,
  getImagesByJewelryId,
} from "../../../api/ImageApi";
import "./Modal.css";
import {
  formatNumber,
  formatNumberAcceptNull,
} from "../../../utils/formatNumber";
import {
  formatDateString,
  formatDateStringAcceptNull,
} from "../../../utils/formatDateString";
import changeStateRequest, {
  cancelRequest,
  confirmRequest,
  sendRequestApprovalFromStaff,
} from "../../../api/RequestApprovalAPI";
import { toast } from "react-toastify";
import { StateAuctionView } from "../../AuctionList/Components/StateAuctionView";
import { PaymentMethod } from "../Components/member/PaymentMethod";
import { StateTransaction } from "../Components/member/StateTransaction";
import { setJewelryHolding } from "../../../api/JewelryAPI";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import PDFHandover from "../../../utils/PDFHandover";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useTranslation } from "react-i18next";

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
  handleChangeList: () => Promise<void>;
}

interface CreateHandoverReportModalProps {
  show: boolean;
  handleClose: () => void;
  auction: Auction | undefined | null;
  jewelry: Jewelry | undefined;
  user: User | null;
  winner: User | undefined;
  handleChangeList: () => Promise<void>;
}

interface ConfirmHoldingModalProps {
  jewelry: Jewelry;
  handleChangeList: () => Promise<void>;
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

  const { t } = useTranslation(["ModalStaff"]);

  return (
    <>
      <Button variant="dark" size="sm" onClick={handleShow}>
        {t("ModalStaff.Xem")}
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
                <div className="col-12 text-center">
                  {t("ModalStaff.Thông tin yêu cầu")}
                </div>
                <div className="col-12 mb-3 text-center ">
                  {t("ModalStaff.Sản phẩm")}{" "}
                  <span className="text-warning fw-bold">
                    {request.jewelry?.name}
                  </span>
                </div>
                <h5 className="col-12">
                  {t("ModalStaff.Nhân viên gửi yêu cầu")} -{" "}
                  <span className=" fw-bold">{request.sender?.fullName}</span>
                </h5>
                <h5 className="col-12">
                  {t("ModalStaff.Mã nhân viên")} -{" "}
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
                        <label>{t("ModalStaff.Mã tài sản")} </label>
                        <span className="fw-bold"> {request.jewelry?.id}</span>
                      </div>
                      <div className="checkout-form-list mb-2">
                        <label>{t("ModalStaff.Mã yêu cầu")}</label>
                        <span className="fw-bold"> {request.id}</span>
                      </div>
                      <div className="checkout-form-list mb-2 row">
                        <div className="col-md-6 mb-2">
                          <label>{t("ModalStaff.Danh mục")}</label>
                          <span className="fw-bold">
                            {" "}
                            {t(`ModalStaff.${request.jewelry?.category?.name}`)}
                          </span>
                        </div>
                        <div className="col-md-6">
                          <label>{t("ModalStaff.Thương hiệu")}</label>
                          <span className="fw-bold">
                            {" "}
                            {request.jewelry?.brand}
                          </span>
                        </div>
                        <div className="col-md-6">
                          <label>{t("ModalStaff.Chất liệu")}</label>
                          <span className="fw-bold">
                            {" "}
                            {t(`ModalStaff.${request.jewelry?.material}`)}
                          </span>
                        </div>
                        <div className="col-md-6">
                          <label>{t("ModalStaff.Trọng lượng (g)")}</label>
                          <span className="fw-bold">
                            {" "}
                            {request.jewelry?.weight}
                          </span>
                        </div>
                      </div>
                      <div
                        className="checkout-form-list checkout-form-list-2 mb-5"
                        style={{ height: "150px" }}
                      >
                        <label>{t("ModalStaff.Mô tả")}</label>
                        <br />
                        <textarea
                          readOnly
                          className="w-100 h-100 p-2"
                          id="checkout-mess"
                          value={request.jewelry?.description}
                        ></textarea>
                      </div>
                      <div className="w-100 fw-medium">
                        <div className="checkout-form-list row">
                          <label>{t("ModalStaff.Hình ảnh")}</label>
                          {React.Children.toArray(
                            images.map((img: Image) => (
                              <div className="col-md-3">
                                <img
                                  src={img.data}
                                  alt={t("ModalStaff.Ảnh tài sản")}
                                />
                              </div>
                            ))
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="checkout-form-list">
                        <label className=" fw-bold">
                          {t("ModalStaff.Giá đề xuất")}
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
                        <label className="text-danger fw-bold">
                          {t("ModalStaff.Định giá")}
                        </label>
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
                          {t("ModalStaff.Thời gian yêu cầu")}
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
                        <label className="fw-bold">
                          {t("ModalStaff.Trạng thái")}
                        </label>
                        {request.state === "HIDDEN" ? (
                          <input
                            className=" fw-bold text-danger"
                            placeholder=""
                            type="text"
                            value={t("ModalStaff.Đã bị hủy")}
                            readOnly={true}
                          />
                        ) : (
                          <input
                            className=" fw-bold text-success"
                            placeholder=""
                            type="text"
                            value={`${
                              request.isConfirm
                                ? t("ModalStaff.Đã phê duyệt")
                                : t("ModalStaff.Chưa phê duyệt")
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
                            <label className="fw-bold">
                              {t("ModalStaff.Lý do")}{" "}
                            </label>
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
                {t("ModalStaff.Đóng")}
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
  const { t } = useTranslation(["ModalStaff"]);
  return (
    <>
      <Button variant="dark" size="sm" onClick={handleShowJewelryDetail}>
        {t("ModalStaff.Xem")}
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
                <div className="col-12 text-center">
                  {t("ModalStaff.Thông tin tài sản")}
                </div>
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
                          <label>{t("ModalStaff.Chủ tài sản")}</label>
                          <span className="fw-bold">
                            {" "}
                            {jewelry?.user?.fullName}
                          </span>
                        </div>
                        <div className="col-md-6">
                          <label>{t("ModalStaff.Mã người dùng")}</label>
                          <span className="fw-bold"> {jewelry?.user?.id}</span>
                        </div>
                      </div>
                      <div className="checkout-form-list mb-2">
                        <label>{t("ModalStaff.Mã tài sản")} </label>
                        <span className="fw-bold"> {jewelry?.id}</span>
                      </div>
                      <div className="checkout-form-list mb-2">
                        <label>{t("ModalStaff.Tên")}</label>
                        <span className="fw-bold"> {jewelry?.name}</span>
                      </div>
                      <div className="checkout-form-list mb-2 row">
                        <div className="col-md-6 mb-2">
                          <label>{t("ModalStaff.Danh mục")}</label>
                          <span className="fw-bold">
                            {" "}
                            {jewelry?.category?.name}
                          </span>
                        </div>
                        <div className="col-md-6">
                          <label>{t("ModalStaff.Thương hiệu")}</label>
                          <span className="fw-bold"> {jewelry?.brand}</span>
                        </div>
                        <div className="col-md-6">
                          <label>{t("ModalStaff.Chất liệu")}</label>
                          <span className="fw-bold"> {jewelry?.material}</span>
                        </div>
                        <div className="col-md-6">
                          <label>{t("ModalStaff.Trọng lượng (g)")}</label>
                          <span className="fw-bold"> {jewelry?.weight}</span>
                        </div>
                      </div>
                      <div
                        className="checkout-form-list checkout-form-list-2 mb-5"
                        style={{ height: "150px" }}
                      >
                        <label>{t("ModalStaff.Mô tả")}</label>
                        <br />
                        <textarea
                          readOnly
                          className="w-100 h-100 p-1"
                          id="checkout-mess"
                          value={jewelry?.description}
                          style={{ height: "500px" }}
                        ></textarea>
                      </div>

                      <div className="w-100 fw-medium">
                        <div className="checkout-form-list row">
                          <label>{t("ModalStaff.Hình ảnh")}</label>
                          {React.Children.toArray(
                            images.map((img: Image) => (
                              <div className="col-md-3">
                                <img
                                  src={img.data}
                                  alt={t("ModalStaff.Ảnh tài sản")}
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
                          {t("ModalStaff.Giá đề xuất")}
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
                        <label className="text-success fw-bold">
                          {t("ModalStaff.Định giá")}
                        </label>
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
                {t("ModalStaff.Đóng")}
              </Button>
              <Button variant="warning" onClick={handleShowCreateModal}>
                {t("ModalStaff.Tạo yêu cầu")}
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

  const { t } = useTranslation(["ModalStaff"]);

  const handleConfirm = async () => {
    const confirm = await confirmRequest(request.id, user?.id);
    if (confirm) {
      console.log("confirm thành công");
      handleSendRequestFromStaff();
    }
    handleClose();
    toast.success(t("ModalStaff.Định giá cho tài sản đã được gửi đi"));
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
                  {t("ModalStaff.Tạo yêu cầu phê duyệt tài sản")}
                </div>
                <div className="col-12 mb-3 text-center ">
                  <span className="text-warning fw-bold">{jewelry?.name}</span>
                </div>
                <h5 className="col-12">
                  {t("ModalStaff.Nhân viên gửi yêu cầu")} -{" "}
                  <span className=" fw-bold">{user?.fullName}</span>
                </h5>
                <h5 className="col-12">
                  {t("ModalStaff.Mã nhân viên")} -{" "}
                  <span className=" fw-bold">{user?.id}</span>
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
                        <label>{t("ModalStaff.Mã tài sản")} </label>
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
                        <label>{t("ModalStaff.Danh mục")}</label>
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
                        <label>{t("ModalStaff.Chất liệu")}</label>
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
                        <label>{t("ModalStaff.Thương hiệu")}</label>
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
                        <label>{t("ModalStaff.Trọng lượng (g)")}</label>
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
                        <label>{t("ModalStaff.Mô tả")} </label>
                        <textarea
                          readOnly
                          id="checkout-mess"
                          value={jewelry?.description}
                        ></textarea>
                      </div>
                    </div>
                    <div className="order-notes col-md-12 fw-medium">
                      <div className="checkout-form-list checkout-form-list-2 row">
                        <label>{t("ModalStaff.Hình ảnh tài sản")} </label>
                        {React.Children.toArray(
                          images.map((img: Image) => (
                            <div className="col-md-3">
                              <img
                                src={img.data}
                                alt={t("ModalStaff.Ảnh tài sản")}
                              />
                            </div>
                          ))
                        )}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="checkout-form-list">
                        <label className="text-danger fw-bold">
                          {t("ModalStaff.Giá đề xuất")}
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
                        <label className="text-success fw-bold">
                          {t("ModalStaff.Định giá")}
                        </label>
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
                {t("ModalStaff.Đóng")}
              </Button>
              <Button variant="warning" onClick={handleConfirm}>
                {t("ModalStaff.Gửi yêu cầu")}
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

  const { t } = useTranslation(["ModalStaff"]);

  const handleDelete = async () => {
    if (reason === "") {
      setNotification(t("ModalStaff.Cung cấp lý do hủy yêu cầu tài sản"));
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
            toast.success(t("ModalStaff.Xóa thành công."));
          } else {
            setNotification(
              t(
                "ModalStaff.Hệ thống có một chút sự cố, chưa thể xóa được tài sản này"
              )
            );
          }
        }
      } catch (error) {
        setNotification(
          t(
            "ModalStaff.Hệ thống có một chút sự cố, chưa thể xóa được tài sản này"
          )
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
        {t("ModalStaff.Hủy")}
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
                <div className="col-12 text-center">
                  {" "}
                  {t("ModalStaff.Xác nhận hủy yêu cầu")}
                </div>
                <div className="col-12 mb-3 text-center ">
                  <span className="text-danger fw-bold">{jewelry?.name}</span>
                </div>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p className="fw-semibold">
                {t(
                  "ModalStaff.Bạn có chắc muốn xóa tài sản này khỏi danh sách chờ không?"
                )}
              </p>
              <Form>
                <Form.Group controlId="formReason">
                  <Form.Label className="fw-semibold">
                    {t("ModalStaff.Nhập lý do")}
                    <span className="text-danger">*</span>
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
                {t("ModalStaff.Hủy")}
              </Button>
              <Button variant="danger" onClick={handleDelete}>
                {t("ModalStaff.Xác nhận")}
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
  const { t } = useTranslation(["ModalStaff"]);
  return (
    <>
      <Button variant="dark" size="sm" onClick={handleShow}>
        {t("ModalStaff.Chi tiết")}
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
                  {t("ModalStaff.Thông tin phiên đấu")}
                </div>
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
                        <label>{t("ModalStaff.Phiên đấu giá")}</label>
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
                        <label>{t("ModalStaff.Phí tham gia (VNĐ)")}</label>
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
                        <label>{t("ModalStaff.Thời gian bắt đầu")}</label>
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
                        <label> {t("ModalStaff.Thời gian kết thúc")}</label>
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
                        <label>{t("ModalStaff.Giá khởi điểm (VNĐ)")}</label>
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
                        <label>{t("ModalStaff.Tiền đặt trước (VNĐ)")}</label>
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
                        <label>{t("ModalStaff.Bước giá (VNĐ)")}</label>
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
                        <label>{t("ModalStaff.Mô tả")} </label>
                        <textarea
                          readOnly
                          id="checkout-mess"
                          value={auction.description}
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-md-6 fw-medium text-danger">
                      <div className="checkout-form-list">
                        <label>{t("ModalStaff.Giá cuối (VNĐ)")}</label>
                        <input
                          className="fw-bold"
                          placeholder={t("ModalStaff.Chưa cập nhật")}
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
                        <label>{t("ModalStaff.Trạng thái")}</label>
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
                {t("ModalStaff.Đóng")}
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
  handleChangeList,
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
  const { t } = useTranslation(["ModalStaff"]);
  return (
    <>
      <Button variant="dark" size="sm" onClick={handleShowJewelryDetail}>
        {t("ModalStaff.Xem")}
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
                <div className="col-12 text-center">
                  {t("ModalStaff.Tài sản bàn giao")}
                </div>
                <div className="col-12 mb-3 text-center ">
                  <span className="text-warning fw-bold">{jewelry?.name}</span>
                </div>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="p-4">
              <form action="">
                <div className="checkbox-form">
                  <div className="row">
                    <div className="col-md-6 fw-medium">
                      <h4 className=" fw-medium">
                        {t("ModalStaff.1Thông tin tài sản")}
                      </h4>
                      <div className="checkout-form-list mb-2">
                        <label>{t("ModalStaff.Mã tài sản")} </label>
                        <span className="fw-bold"> {jewelry?.id}</span>
                      </div>
                      <div className="checkout-form-list mb-2">
                        <label>{t("ModalStaff.Tên")}</label>
                        <span className="fw-bold"> {jewelry?.name}</span>
                      </div>
                      <div className="checkout-form-list mb-2 row">
                        <div className="col-md-6 mb-2">
                          <label>{t("ModalStaff.Thương hiệu")}</label>
                          <span className="fw-bold"> {jewelry?.brand}</span>
                        </div>
                        <div className="col-md-6">
                          <label>{t("ModalStaff.Chất liệu")}</label>
                          <span className="fw-bold"> {jewelry?.material}</span>
                        </div>
                        <div className="col-md-6">
                          <label>{t("ModalStaff.Trọng lượng (g)")}</label>
                          <span className="fw-bold"> {jewelry?.weight}</span>
                        </div>
                      </div>
                      <div className="checkout-form-list checkout-form-list-2 mb-2">
                        <label>{t("ModalStaff.Mô tả tài sản")} </label>
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
                          <label>{t("ModalStaff.Hình ảnh")}</label>
                          {React.Children.toArray(
                            images.map((img: Image) => (
                              <div className="col-md-3">
                                <img
                                  src={img.data}
                                  alt={t("ModalStaff.Ảnh tài sản")}
                                />
                              </div>
                            ))
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 fw-medium">
                      <h4 className=" fw-medium">
                        {t("ModalStaff.2. Phiên đấu giá")}
                      </h4>
                      <div className="checkout-form-list mb-2">
                        <label>{t("ModalStaff.Mã phiên đấu giá")} </label>
                        <span className="fw-bold"> {auction?.id}</span>
                      </div>
                      <div className="checkout-form-list mb-2">
                        <label>{t("ModalStaff.Tên")}</label>
                        <span className="fw-bold"> {auction?.name}</span>
                      </div>
                      <div className="checkout-form-list mb-2 ">
                        <label>{t("ModalStaff.Bắt đầu")}</label>
                        <span className="fw-bold">
                          {" "}
                          {formatDateString(
                            auction?.startDate ? auction.startDate : ""
                          )}
                        </span>
                      </div>
                      <div className="checkout-form-list mb-2">
                        <label>{t("ModalStaff.Kết thúc")}</label>
                        <span className="fw-bold">
                          {" "}
                          {formatDateString(
                            auction?.endDate ? auction.endDate : ""
                          )}
                        </span>
                      </div>
                      <div className="checkout-form-list mb-2">
                        <label>{t("ModalStaff.Trạng thái")} </label>

                        <span className="fw-bold text-uppercase text-success">
                          <StateAuctionView
                            state={auction?.state ? auction.state : "FINISHED"}
                          />
                        </span>
                      </div>
                      <div className="checkout-form-list mb-2">
                        <label>{t("ModalStaff.Giá cuối")}</label>
                        <span className="fw-bold text-uppercase text-danger">
                          {" "}
                          {formatNumberAcceptNull(auction?.lastPrice)} VND
                        </span>
                      </div>
                      <div className="checkout-form-list mb-2">
                        <label>{t("ModalStaff.Phương thức thanh toán:")}</label>
                        <span className="fw-bold text-uppercase">
                          {" "}
                          <PaymentMethod
                            method={
                              transaction.paymentMethod
                                ? transaction.paymentMethod
                                : "BANKING"
                            }
                          />
                        </span>
                      </div>
                      <div className="checkout-form-list mb-2">
                        <label>{t("ModalStaff.Trạng thái")}</label>
                        <span className="fw-bold text-uppercase text-danger">
                          {" "}
                          <StateTransaction state={transaction.state} />
                        </span>
                      </div>
                    </div>
                    <div className="col-md-12 fw-medium row">
                      <h4 className=" fw-medium">
                        {t("ModalStaff.3. Người đấu giá thành công")}
                      </h4>
                      <div className="checkout-form-list mb-2 col-md-6">
                        <div className="checkout-form-list mb-2">
                          <label>{t("ModalStaff.Mã người dùng")} </label>
                          <span className="fw-bold"> {winner?.id}</span>
                        </div>
                        <div className="checkout-form-list mb-2 ">
                          <label>{t("ModalStaff.Tên người dùng")}</label>
                          <span className="fw-bold"> {winner?.fullName}</span>
                        </div>
                        <div className="checkout-form-list mb-2 ">
                          <label>{t("ModalStaff.Số CCCD")}</label>
                          <span className="fw-bold"> {winner?.cccd}</span>
                        </div>
                        <div className="checkout-form-list mb-2">
                          <label>{t("ModalStaff.Địa chỉ")}</label>
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
                          <label>{t("ModalStaff.Thẻ ngân hàng")} </label>
                          <span className="fw-bold text-uppercase">
                            {" "}
                            {winner?.bank?.bankName}
                          </span>
                        </div>
                        <div className="checkout-form-list mb-2 col-md-12 ">
                          <label>{t("ModalStaff.Mã số thẻ")} </label>
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
                {t("ModalStaff.Đóng")}
              </Button>
              <Button variant="warning" onClick={handleShowCreateModal}>
                {t("ModalStaff.Tiến hành bàn giao")}
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
        winner={winner}
        handleChangeList={handleChangeList}
      />
    </>
  );
};

export const CreateHandoverReportModal: React.FC<
  CreateHandoverReportModalProps
> = ({
  show,
  handleClose,
  user,
  winner,
  auction,
  jewelry,
  handleChangeList,
}) => {
  const jewelryId = jewelry?.id ? jewelry.id : 1;
  const handleConfirm = async () => {
    const confirm = await setJewelryHolding(jewelryId, false);
    if (confirm) {
      console.log("set holding thành công");
    }
    handleChangeList();
    handleClose();
  };
  const { t } = useTranslation(["ModalStaff"]);
  return (
    <>
      {show && (
        <div className="overlay">
          <Modal
            show={show}
            onHide={handleClose}
            centered
            backdrop="static"
            size="xl"
          >
            <Modal.Header>
              <Modal.Title className="w-100">
                <div className="col-12 text-center">
                  {t("ModalStaff.Thông tin bàn giao tài sản")}
                </div>
                <div className="col-12 mb-3 text-center ">
                  <span className="text-warning fw-bold">{jewelry?.name}</span>
                </div>
                <h5 className="col-12">
                  {t("ModalStaff.Tên nhân viên")} -{" "}
                  <span className=" fw-bold">{user?.fullName}</span>
                </h5>
                <h5 className="col-12">
                  {t("ModalStaff.Mã nhân viên")} -{" "}
                  <span className=" fw-bold">{user?.id}</span>
                </h5>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ height: "650px" }}>
              <PDFViewer style={{ width: "100%", height: "100%" }}>
                <PDFHandover
                  winner={winner}
                  auction={auction}
                  jewelry={jewelry}
                />
              </PDFViewer>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="dark" onClick={handleClose}>
                {t("ModalStaff.Đóng")}
              </Button>
              <Button variant="warning" onClick={handleConfirm}>
                {t("ModalStaff.Xác nhận")}
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
    const confirm = await setJewelryHolding(jewelry.id, true);
    if (confirm) {
      console.log("set holding thành công");
    }
    handleChangeList();
    handleCloseJewelryDetail();
  };

  const { t } = useTranslation(["ModalStaff"]);

  return (
    <>
      <Button variant="warning" size="sm" onClick={handleShowJewelryDetail}>
        {t("ModalStaff.Đã nhận")}
      </Button>
      {show && (
        <div className="overlay">
          <Modal
            show={show}
            onHide={handleCloseJewelryDetail}
            centered
            backdrop="static"
            size="lg"
            className="p-4"
          >
            <Modal.Header>
              <Modal.Title className="w-100">
                <div className="col-12 text-center">
                  {t("ModalStaff.Xác nhận đã nhận tài sản")}
                </div>
                <div className="col-12 mb-3 text-center ">
                  <span className="text-success fw-bold">{jewelry?.name}</span>
                </div>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="p-4">
              <h6 className="lh-base">
                {t("ModalStaff.Tài sản")}{" "}
                <span className="text-success fw-semibold">
                  {jewelry?.name}
                </span>{" "}
                {t("ModalStaff.được xác nhận đã có mặt tại cơ sở?")}
              </h6>
              <h6 className="lh-base">
                {t(
                  "ModalStaff.Nhân viên kiểm tra kỹ chính xác thông tin tài sản trước khi tiến hành xác nhận"
                )}
              </h6>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="dark" onClick={handleCloseJewelryDetail}>
                {t("ModalStaff.Đóng")}
              </Button>
              <Button variant="warning" onClick={handleConfirm}>
                {t("ModalStaff.Xác nhận")}
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      )}
    </>
  );
};
