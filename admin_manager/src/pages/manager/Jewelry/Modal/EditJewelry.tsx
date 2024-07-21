import React, { useState } from "react";
import { Image } from "../../../../models/Image";
import { Jewelry } from "../../../../models/Jewelry";
import { useFormik } from "formik";
import * as Yup from "yup";
import { formatDateTimeBox } from "../../../../utils/formatDateString";
import { Alert, Button, Modal, Spinner } from "react-bootstrap";
import { formatNumber } from "../../../../utils/formatNumber";
import { useCategories } from "../../../../hooks/useCategories";
import { JewelryMaterialView } from "../JewelryMaterialView";
import { editJewelryById } from "../../../../api/JewelryAPI";
import Swal from "sweetalert2";
import { convertFilesToBase64, uploadFilesToFirebase } from "../../../../utils/imageFireBase";
import { deleteImagesByJewelryId, processImages, setImageForJewelry } from "../../../../api/ImageApi";
import { JEWELRY_IMAGES_FOLDER } from "../../../../global_variable/firebaseconfig";

type EditJewelryModalProps = {
    jewelry: Jewelry;
    images: Image[];
    handleChangeList: () => void;
};

interface EditJewelryRequest {
    id: number;
    name: string;
    buyNowPrice: number | undefined;
    state: string | undefined;
    category: string | undefined;
    receivedDate: string;
    deliveryDate: string;
    description: string | undefined;
    material: string | undefined;
    brand: string | undefined;
    weight: number | undefined;
    isHolding: boolean | undefined;
    createDate: string | undefined;
}


export const EditJewelryModal: React.FC<EditJewelryModalProps> = ({
    jewelry, images, handleChangeList
}) => {
    const materialOptions = ['SILVER', 'GOLD', 'PLATINUM', 'DIAMOND'];
    const [show, setShow] = useState(false);
    const [priceDisplay, setPriceDisplay] = useState(formatNumber(jewelry.buyNowPrice));
    const categories = useCategories();
    const [base64Images, setBase64Images] = useState<string[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const formik = useFormik<EditJewelryRequest>({
        initialValues: {
            id: jewelry.id,
            name: jewelry.name,
            buyNowPrice: jewelry.buyNowPrice,
            category: jewelry.category?.name,
            state: jewelry.state,
            receivedDate: formatDateTimeBox(jewelry.receivedDate),
            deliveryDate: formatDateTimeBox(jewelry.deliveryDate),
            description: jewelry.description,
            material: jewelry.material,
            brand: jewelry.brand,
            weight: jewelry.weight,
            isHolding: jewelry.isHolding,
            createDate: formatDateTimeBox(jewelry.createDate),
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Tên không được để trống"),
            buyNowPrice: Yup.number().required("Giá mua ngay không được để trống"),
            category: Yup.string().required("Danh mục không được để trống"),
            description: Yup.string().required("Mô tả không được để trống"),
            material: Yup.string().required("Chất liệu không được để trống"),
            brand: Yup.string().required("Thương hiệu không được để trống"),
            weight: Yup.number().required("Cân nặng không được để trống"),
            createDate: Yup.string().required("Ngày tạo không được để trống"),
        }),
        onSubmit: (values) => {
            editJewelryById(values)
                .then((result) => {
                    console.log(result);

                    if (result) {
                        Swal.fire({
                            icon: "success",
                            title: "Sửa thông tin tài sản thành công.",
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

    const updateCreateDate = (createDate: string) => {
        formik.setFieldValue("createDate", createDate);
    };

    const updateReceivedDate = (receivedDate: string) => {
        formik.setFieldValue("receivedDate", receivedDate);
    }

    const updateDeliveryDate = (deliveryDate: string) => {
        formik.setFieldValue("deliveryDate", deliveryDate);
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

    const handleImagesChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files) {
            const fileArray = Array.from(files);
            const base64Array = await convertFilesToBase64(fileArray);
            setBase64Images(base64Array);
            setLoading(true);
            try {
                await deleteImagesByJewelryId(jewelry.id);
                const urls = await uploadFilesToFirebase(fileArray, JEWELRY_IMAGES_FOLDER);
                if (urls.length > 0) {
                    await setImageForJewelry({ data: urls[0], jewelryId: jewelry.id }, true);
                }
                await processImages(urls, jewelry.id);
            }
            catch (error) {
                console.error("Error sending jewelry request:", error);
            }
            finally {
                setLoading(false);
            }

        }
    }

    return (
        <>
            <Button variant="dark" size="sm" onClick={handleShow}>
                Chỉnh sửa
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
                                    Chỉnh sửa thông tin tài sản
                                </div>
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body className="p-3">
                            <form action="">
                                <div className="checkbox-form">
                                    <div className="fw-medium row">
                                        <div className="checkout-form-list my-4 col-md-12">
                                            <div className="checkout-form-list mb-2">
                                                <label>Mã tài sản</label>
                                                <input className="mb-0 input-required"
                                                    type="text"
                                                    style={{ backgroundColor: "#F5F5F5" }}
                                                    value={formik.values.id}
                                                    readOnly
                                                />
                                            </div>
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
                                                {formik.errors.createDate && (
                                                    <Alert variant="danger">{formik.errors.createDate}</Alert>
                                                )}
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

                                        <label
                                            className="btn btn-dark mb-2"
                                            style={{ width: "auto", color: "white" }}
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
                                Lưu
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            )}
        </>
    );
};