import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Alert, Button, Modal } from "react-bootstrap";
import { formatNumber } from "../../../../utils/formatNumber";
import { useCategories } from "../../../../hooks/useCategories";
import { JewelryMaterialView } from "../JewelryMaterialView";
import { addNewJewelry } from "../../../../api/JewelryAPI";
import Swal from "sweetalert2";

type CreateJewelryModalProps = {
    handleChangeList: () => void;
};

interface AddJewelryRequest {
    id: number;
    name: string;
    buyNowPrice: number;
    category: string;
    description: string;
    material: string;
    brand: string;
    weight: number;
}


export const CreateJewelryModal: React.FC<CreateJewelryModalProps> = ({
    handleChangeList
}) => {
    const materialOptions = ['SILVER', 'GOLD', 'PLATINUM', 'DIAMOND'];
    const [show, setShow] = useState(false);
    const categories = useCategories();
    const [priceDisplay, setPriceDisplay] = useState("");

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const formik = useFormik<AddJewelryRequest>({
        initialValues: {
            id: 0,
            name: "",
            buyNowPrice: 0,
            category: "",
            description: "",
            material: "",
            brand: "",
            weight: 0,
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Tên không được để trống"),
            buyNowPrice: Yup.number().required("Giá mua ngay không được để trống").min(1000000, "Giá mua ngay phải lớn hơn 1.000.000"),
            category: Yup.string().required("Danh mục không được để trống"),
            description: Yup.string().required("Mô tả không được để trống"),
            material: Yup.string().required("Chất liệu không được để trống"),
            brand: Yup.string().required("Thương hiệu không được để trống"),
            weight: Yup.number().required("Cân nặng không được để trống").min(0.1, "Cân nặng phải lớn hơn 0"),
        }),
        onSubmit: (values) => {
            addNewJewelry(values)
                .then((result) => {
                    if (result) {
                        Swal.fire({
                            icon: "success",
                            title: "Assert add successfully.",
                        });
                        handleChangeList();
                        handleClose();
                    } else {
                        Swal.fire({
                            icon: "error",
                            title: "Failed to edit assert.",
                        });
                    }
                });
        },
    });

    const handleSubmit = () => {
        formik.submitForm();
    }

    const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const numericValue = parseInt(value.replace(/[^0-9]/g, ""), 10);
        if (!isNaN(numericValue)) {
            setPriceDisplay(formatNumber(numericValue));
            formik.setFieldValue("buyNowPrice", numericValue);
        } else {
            setPriceDisplay("");
            formik.setFieldValue("buyNowPrice", numericValue);
        }
    };

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
                                                {formik.errors.name && (
                                                    <Alert variant="danger">{formik.errors.name}</Alert>
                                                )}
                                            </div>
                                            <div className="checkout-form-list mb-2 ">
                                                <span>Giá mua ngay:</span>
                                                <input className="mb-0"
                                                    type="text"
                                                    name="buyNowPrice"
                                                    value={priceDisplay}
                                                    onChange={handlePriceChange}
                                                />
                                                {formik.errors.buyNowPrice && (
                                                    <Alert variant="danger">{formik.errors.buyNowPrice}</Alert>
                                                )}
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
                                                    <option
                                                        value=""
                                                        disabled
                                                    >
                                                        --Chọn danh mục--
                                                    </option>
                                                    {categories.map((category, index) => (
                                                        <option style={{ padding: '5px' }} key={index} value={category.name}>
                                                            {category.name}
                                                        </option>
                                                    ))}
                                                </select>
                                                {formik.errors.category && (
                                                    <Alert variant="danger">{formik.errors.category}</Alert>
                                                )}
                                            </div>
                                            <div className="checkout-form-list mb-2">
                                                <span>Mô tả: </span>
                                                <input className="mb-0"
                                                    type="text"
                                                    name="description"
                                                    value={formik.values.description}
                                                    onChange={formik.handleChange}
                                                />
                                                {formik.errors.description && (
                                                    <Alert variant="danger">{formik.errors.description}</Alert>
                                                )}
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
                                                    <option
                                                        value=""
                                                        disabled
                                                    >
                                                        --Chọn chất liệu--
                                                    </option>
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
                                                {formik.errors.material && (
                                                    <Alert variant="danger">{formik.errors.material}</Alert>
                                                )}
                                            </div>
                                            <div className="checkout-form-list mb-2">
                                                <span>Thương hiệu: </span>
                                                <input className="mb-0"
                                                    type="text"
                                                    name="brand"
                                                    value={formik.values.brand}
                                                    onChange={formik.handleChange}
                                                />
                                                {formik.errors.brand && (
                                                    <Alert variant="danger">{formik.errors.brand}</Alert>
                                                )}
                                            </div>
                                            <div className="checkout-form-list mb-2">
                                                <span>Cân nặng: </span>
                                                <input className="mb-0"
                                                    type="text"
                                                    name="weight"
                                                    value={formik.values.weight}
                                                    onChange={formik.handleChange}
                                                />
                                                {formik.errors.weight && (
                                                    <Alert variant="danger">{formik.errors.weight}</Alert>
                                                )}
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
                            <Button variant="primary" onClick={handleSubmit}>
                                Thêm
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            )}
        </>
    );
};