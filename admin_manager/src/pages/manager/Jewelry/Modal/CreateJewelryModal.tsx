import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, Modal } from "react-bootstrap";
import { formatNumber } from "../../../../utils/formatNumber";
import { useCategories } from "../../../../hooks/useCategories";
import { JewelryMaterialView } from "../JewelryMaterialView";

type CreateJewelryModalProps = {
    handleChangeList: () => void;
};

interface EditJewelryRequest {
    id: number;
    name: string;
    buyNowPrice: number;
    state: string;
    category: string;
    receivedDate: string;
    deliveryDate: string;
    description: string;
    material: string;
    brand: string;
    weight: number;
    isHolding: boolean;
    createDate: string;
}


export const CreateJewelryModal: React.FC<CreateJewelryModalProps> = ({
    handleChangeList
}) => {
    const materialOptions = ['SILVER', 'GOLD', 'PLATINUM', 'DIAMOND'];
    const [show, setShow] = useState(false);
    const categories = useCategories();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const formik = useFormik<EditJewelryRequest>({
        initialValues: {
            id: 0,
            name: "",
            buyNowPrice: 0,
            category: "",
            state: "",
            receivedDate: "",
            deliveryDate: "",
            description: "",
            material: "",
            brand: "",
            weight: 0,
            isHolding: false,
            createDate: "",
        },
        validationSchema: Yup.object({
        }),
        onSubmit: (values) => {
        },
    });

    const updateCreateDate = (createDate: string) => {
        formik.setFieldValue("createDate", createDate);
    };

    const updateReceivedDate = (receivedDate: string) => {
        formik.setFieldValue("receivedDate", receivedDate);
    }

    const updateDeliveryDate = (deliveryDate: string) => {
        formik.setFieldValue("deliveryDate", deliveryDate);
    }

    return (
        <>
            <Button variant="warning" size="sm" className="btn_1" style={{ backgroundColor: "#3b76ef", border: "none", color: "white", marginTop: '20px' }} onClick={handleShow}>
                Thêm tài sản
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
                                    Thêm tài sản
                                </div>
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body className="p-3">
                            <form action="">
                                <div className="checkbox-form">
                                    <div className="fw-medium row">
                                        <div className="checkout-form-list my-4 col-md-12">
                                            <div className="checkout-form-list mb-2 ">
                                                <span>Tên tài sản:</span>
                                                <input className="mb-0"
                                                    type="text"
                                                    name="name"
                                                    value={formik.values.name}
                                                    onChange={formik.handleChange}
                                                />
                                            </div>
                                            <div className="checkout-form-list mb-2 ">
                                                <span>Giá mua ngay:</span>
                                                <input className="mb-0"
                                                    type="text"
                                                    name="buyNowPrice"
                                                    value={formatNumber(formik.values.buyNowPrice)}
                                                    onChange={formik.handleChange}
                                                />
                                            </div>
                                            <div className="checkout-form-list mb-2">
                                                <span>Ngày tạo yêu cầu: </span>
                                                <input
                                                    className="p-3"
                                                    type="datetime-local"
                                                    name="createDate"
                                                    id="txtCreateDate"
                                                    value={formik.values.createDate}
                                                    onChange={(e) => updateCreateDate(e.target.value)}
                                                    required
                                                />
                                            </div>
                                            <div className="checkout-form-list mb-2">
                                                <span>Ngày nhận tài sản:</span>
                                                <input
                                                    className="p-3"
                                                    type="datetime-local"
                                                    name="receivedDate"
                                                    id="txtReceivedDate"
                                                    value={formik.values.receivedDate}
                                                    onChange={(e) => updateReceivedDate(e.target.value)}
                                                    required
                                                />
                                            </div>
                                            <div className="checkout-form-list mb-2">
                                                <span>Ngày bàn giao tài sản: </span>
                                                <input
                                                    className="p-3"
                                                    type="datetime-local"
                                                    name="deliveryDate"
                                                    id="txtDeliveryDate"
                                                    value={formik.values.deliveryDate}
                                                    onChange={(e) => updateDeliveryDate(e.target.value)}
                                                    required
                                                />
                                            </div>
                                            <div className="checkout-form-list mb-2">
                                                <span>Danh mục: </span>
                                                <select className='rounded'
                                                    name="category"
                                                    value={formik.values.category}
                                                    onChange={formik.handleChange}
                                                    style={{ width: '100%', height: '40px', padding: '0 0 0 10px' }}
                                                    required
                                                >
                                                    {categories.map((category, index) => (
                                                        <option style={{ padding: '5px' }} key={index} value={category.name}>
                                                            {category.name}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div className="checkout-form-list mb-2">
                                                <span>Mô tả: </span>
                                                <input className="mb-0"
                                                    type="text"
                                                    name="description"
                                                    value={formik.values.description}
                                                    onChange={formik.handleChange}
                                                />
                                            </div>
                                            <div className="checkout-form-list mb-2">
                                                <span>Chất liệu: </span>
                                                <select
                                                    className="rounded"
                                                    name="material"
                                                    value={formik.values.material}
                                                    onChange={formik.handleChange}
                                                    style={{
                                                        width: "100%",
                                                        height: "40px",
                                                        padding: "0 0 0 10px"
                                                    }}
                                                    required
                                                >
                                                    {materialOptions.map(
                                                        (material, index) => (
                                                            <option
                                                                key={index}
                                                                value={material}
                                                            >
                                                                {<JewelryMaterialView material={material} />}
                                                            </option>
                                                        )
                                                    )}
                                                </select>
                                            </div>
                                            <div className="checkout-form-list mb-2">
                                                <span>Thương hiệu: </span>
                                                <input className="mb-0"
                                                    type="text"
                                                    name="brand"
                                                    value={formik.values.brand}
                                                    onChange={formik.handleChange}
                                                />
                                            </div>
                                            <div className="checkout-form-list mb-2">
                                                <span>Cân nặng: </span>
                                                <input className="mb-0"
                                                    type="text"
                                                    name="weight"
                                                    value={formik.values.weight}
                                                    onChange={formik.handleChange}
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