import { useEffect, useState } from "react";
import { Category } from "../../models/Category";
import { formatVND } from "../../utils/formatVND";
import { useCategories } from "../../hooks/useCategories";
import useAccount from "../../hooks/useAccount";


interface JewelryRequest {
    id: number;
    name: string;
    price: string;
    category: string;
    description: string;
    material: string;
    brand: string;
    weight: string;
    images: string;
    user: string;
}

export const PageSendJewelry = () => {
    const categories: Category[] = useCategories();
    const token = localStorage.getItem("access_token");
    const user = useAccount(token);

    const [productName, setProductName] = useState('');
    const [productType, setProductType] = useState<string | number>('');
    const [price, setPrice] = useState<number | undefined>(undefined);
    const [priceDisplay, setPriceDisplay] = useState('');
    const [brand, setBrand] = useState('');
    const [description, setDescription] = useState('');
    const [material, setMaterial] = useState('');
    const [images, setImages] = useState<File[]>([]);
    const [base64Images, setBase64Images] = useState<string[]>([]);
    const [notification, setNotification] = useState("");
    const [jewelryRequest, setJewelryRequest] = useState<JewelryRequest>({
        id: 0,
        name: '',
        price: '',
        category: '',
        description: '',
        material: '',
        brand: '',
        weight: '',
        images: '',
        user: ''
    });



    const handleProductNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProductName(e.target.value);
        setJewelryRequest({ ...jewelryRequest, name: e.target.value });
    };

    const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setProductType(e.target.value);
        setJewelryRequest({ ...jewelryRequest, material: e.target.value });
    };

    const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const numericValue = parseInt(value.replace(/[^0-9]/g, ''), 10);
        if (!isNaN(numericValue)) {
            setPrice(numericValue);
            setPriceDisplay(formatVND(numericValue));
        } else {
            setPrice(undefined);
            setPriceDisplay('');
        }
    };

    const handleBrandChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBrand(e.target.value);
    };

    const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(e.target.value);
    };

    const handleMaterialChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMaterial(e.target.value);
        setJewelryRequest({ ...jewelryRequest, material: e.target.value });
    };

    const handleWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBrand(e.target.value);
        setJewelryRequest({ ...jewelryRequest, brand: e.target.value });
    };

    const handleImagesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files) {
            const fileArray = Array.from(files);
            setImages(fileArray);
            convertToBase64(fileArray);
        }
    };

    const convertToBase64 = (files: File[]) => {
        const base64Array: string[] = [];
        files.forEach(file => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                if (reader.result) {
                    base64Array.push(reader.result as string);
                    if (base64Array.length === files.length) {
                        setBase64Images(base64Array);
                    }
                }
            };
            reader.onerror = error => {
                console.error('Error converting file to base64:', error);
            };
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Kiểm tra nếu có bất kỳ thuộc tính nào của jewelryRequest không được cung cấp, hiển thị thông báo và không tiếp tục xử lý
        // const missingFields = Object.keys(jewelryRequest).filter((key: keyof JewelryRequest) => !jewelryRequest[key]);
        // if (missingFields.length > 0) {
        //     setNotification("Vui lòng điền đầy đủ thông tin");
        //     return;
        // }

        // Nếu tất cả các thuộc tính được cung cấp, tiến hành gửi dữ liệu
        try {
            // Gửi dữ liệu bằng cách sử dụng jewelryRequest
            // Ví dụ:
            // await sendJewelryRequest(jewelryRequest);
            setNotification("Yêu cầu của bạn đã được gửi thành công!");
        } catch (error) {
            console.error("Error sending jewelry request:", error);
            setNotification("Đã xảy ra lỗi khi gửi yêu cầu. Vui lòng thử lại sau.");
        }
    };

    return (
        <>
            <div className="breadcrumb-area">
                <div className="container">
                    <div className="breadcrumb-content">
                        <ul>
                            <li>
                                <a href="index.html">Trang chủ</a>
                            </li>
                            <li className="active">Gửi sản phẩm đấu giá</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="umino-login-register_area">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-xs-12 col-lg-12">
                            <form onSubmit={handleSubmit}>
                                <div className="login-form">
                                    <h4 className="login-title">Gửi thông tin sản phẩm</h4>
                                    <div className="row mb-4">
                                        <div className="col-md-6 col-12 mb--20">
                                            <label>Tên Sản Phẩm</label>
                                            <input
                                                type="text"
                                                placeholder="Nhập tên sản phẩm"
                                                value={productName}
                                                onChange={handleProductNameChange}
                                                required
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label>Loại sản phẩm</label>
                                            <select
                                                value={productType}
                                                onChange={handleCategoryChange}
                                                style={{ width: '100%', height: '40px', padding: '0 0 0 10px' }}
                                                required
                                            >
                                                <option value="">Chọn loại sản phẩm</option>
                                                {categories.map((category) => (
                                                    <option style={{ padding: '5px' }} key={category.id} value={category.id}>
                                                        {category.name}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="col-md-6">
                                            <label>Giá</label>
                                            <input
                                                className="mb-0"
                                                type="text"
                                                placeholder="Nhập giá mong muốn"
                                                value={priceDisplay}
                                                onChange={handlePriceChange}
                                                required
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label>Thương hiệu</label>
                                            <input
                                                type="text"
                                                placeholder="Nhập thương hiệu"
                                                value={brand}
                                                onChange={handleBrandChange}
                                                required
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label>Chất liệu</label>
                                            <input
                                                type="text"
                                                placeholder="Nhập chất liệu"
                                                value={brand}
                                                onChange={handleMaterialChange}
                                                required
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label>Cân nặng</label>
                                            <input
                                                type="text"
                                                placeholder="Nhập cân nặng"
                                                value={brand}
                                                onChange={handleWeightChange}
                                                required
                                            />
                                        </div>
                                        <div className="col-md-12">
                                            <label>Mô Tả</label>
                                            <textarea
                                                className="w-100 h-100 p-2"
                                                placeholder="Một số mô tả về sản phẩm của bạn"
                                                value={description}
                                                onChange={handleDescriptionChange}
                                                required
                                            />
                                        </div>
                                        <div className="col-md-8 row" style={{ marginTop: "60px" }}>
                                            <div className="col-md-6">
                                                <label className="btn btn-dark" htmlFor="jewelry-img">Ảnh sản phẩm</label>
                                                <input
                                                    id="jewelry-img"
                                                    type="file"
                                                    placeholder="Chọn ảnh sản phẩm"
                                                    multiple
                                                    onChange={handleImagesChange}
                                                    required
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                {base64Images.map((base64, index) => (
                                                    <img key={index} src={base64} alt={`Uploaded ${index}`} style={{ width: '100px', height: '100px', margin: '10px' }} />
                                                ))}
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button className="umino-register_btn" type="submit">
                                                Gửi yêu cầu
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
