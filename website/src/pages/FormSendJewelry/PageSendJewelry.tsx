import { useEffect, useState } from "react";
import { useCategories } from "../../hooks/useCategories";
import useAccount from "../../hooks/useAccount";
import { formatNumber } from "../../utils/formatNumber";
import { getLatestJewelry, sendJewelryFromUser } from "../../api/JewelryAPI";
import { Jewelry } from "../../models/Jewelry";
import { processImages, setImageForJewelry } from "../../api/ImageApi";
import { sendRequestApprovalFromUser } from "../../api/RequestApprovalAPI";
import { ToastContainer, toast } from "react-toastify";
import { useTranslation } from "react-i18next";
interface JewelryRequest {
  id: number;
  name: string;
  price: number;
  category: string | undefined;
  description: string;
  material: string;
  brand: string;
  weight: number;
  userId: number | undefined;
}

interface ImageRequest {
  data: string;
  jewelryId: number;
}
interface SendReqeustFromUser {
  senderId: number | undefined;
  jewelryId: number;
  requestTime: string;
}
export const PageSendJewelry = () => {
  const categories = useCategories();

  const { t } = useTranslation(["PageSendJewelry"]);

  const token = localStorage.getItem("access_token");
  const { account } = useAccount(token);

  const [productName, setProductName] = useState("");
  const [productType, setProductType] = useState<string | undefined>("");
  const [price, setPrice] = useState<number | undefined>(undefined);
  const [priceDisplay, setPriceDisplay] = useState("");
  const [brand, setBrand] = useState("");
  const [weight, setWeight] = useState(0);
  const [description, setDescription] = useState("");
  const [material, setMaterial] = useState("Bạc");
  const [images, setImages] = useState<File[]>([]);
  const [base64Images, setBase64Images] = useState<string[]>([]);
  const [notification, setNotification] = useState("");
  const [jewelryRequest, setJewelryRequest] = useState<JewelryRequest>({
    id: 0,
    name: "",
    price: 0,
    category: "",
    description: "",
    material: "",
    brand: "",
    weight: 0,
    userId: account?.id,
  });

  useEffect(() => {
    if (account) {
      setJewelryRequest((prevRequest) => ({
        ...prevRequest,
        userId: account.id,
      }));
    }
  }, [account]);

  useEffect(() => {
    if (categories.length > 0) {
      setProductType(categories[0].name);
      setJewelryRequest((prevRequest) => ({
        ...prevRequest,
        category: categories[0].name,
      }));
    }
  }, [categories]);
  useEffect(() => {
    setJewelryRequest({
      ...jewelryRequest,
      category: productType,
      material: material,
    });
  }, []);

  const handleProductNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProductName(e.target.value);
    setJewelryRequest({ ...jewelryRequest, name: e.target.value });
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setProductType(e.target.value);
    setJewelryRequest({ ...jewelryRequest, category: e.target.value });
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const numericValue = parseInt(value.replace(/[^0-9]/g, ""), 10);
    if (!isNaN(numericValue)) {
      setPrice(numericValue);
      setPriceDisplay(formatNumber(numericValue));
      setJewelryRequest({ ...jewelryRequest, price: numericValue });
    } else {
      setPrice(0);
      setPriceDisplay("");
      setJewelryRequest({ ...jewelryRequest, price: numericValue });
    }
  };

  const handleBrandChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBrand(e.target.value);
    setJewelryRequest({ ...jewelryRequest, brand: e.target.value });
  };

  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescription(e.target.value);
    setJewelryRequest({ ...jewelryRequest, description: e.target.value });
  };

  const handleMaterialChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setMaterial(e.target.value);
    setJewelryRequest({ ...jewelryRequest, material: e.target.value });
  };

  const handleWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    setWeight(value);
    setJewelryRequest({ ...jewelryRequest, weight: value });
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
    files.forEach((file) => {
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
      reader.onerror = (error) => {
        console.error("Error converting file to base64:", error);
      };
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (images.length === 0) {
      setNotification(t("SendSendJewelry.NotificationNotPhoto"));
      return;
    }
    console.log(jewelryRequest);
    try {
      const sendJewelry = await sendJewelryFromUser(jewelryRequest);
      if (sendJewelry) {
        console.log("tạo sp mới thành công");
        const newJewelry: Jewelry = await getLatestJewelry();
        if (newJewelry) {
          const newJewelryId = newJewelry.id;

          const iconImage = await setImageForJewelry(
            { data: base64Images[0], jewelryId: newJewelryId },
            true
          );
          processImages(base64Images, newJewelryId)
            .then(() => {
              console.log("Thêm ảnh thành công");
            })
            .catch((error) => {
              console.error("Error processing images:", error);
            });

          if (iconImage) {
            const newSendRequestBody: SendReqeustFromUser = {
              senderId: account?.id,
              jewelryId: newJewelry.id,
              requestTime: new Date().toISOString(),
            };
            const sendRequest = await sendRequestApprovalFromUser(
              newSendRequestBody
            );
            if (sendRequest) {
              console.log("Gửi yêu cầu cho sản phẩm mới thành công");
              toast.success(
                t("SendSendJewelry.GuiYeuCauChoSanPhamMoiThanhCong")
              );
              setProductName("");
              setProductType("Dây chuyền");
              setPrice(0);
              setPriceDisplay("");
              setBrand("");
              setWeight(0);
              setDescription("");
              setMaterial("Bạc");
              setImages([]);
              setBase64Images([]);
              setJewelryRequest({
                id: 0,
                name: "",
                price: 0,
                category: productType,
                description: "",
                material: material,
                brand: "",
                weight: 0,
                userId: account?.id,
              });
              setNotification("");
            }
          }
        }
      }
    } catch (error) {
      console.error("Error sending jewelry request:", error);
      setNotification(t("SendSendJewelry.ErrorSendJewelry"));
    }
  };

  return (
    <>
      <div className="breadcrumb-area">
        <div className="container">
          <div className="breadcrumb-content">
            <ul>
              <li>
                <a href="index.html">{t("SendSendJewelry.TrangChu")}</a>
              </li>
              <li className="active">
                {" "}
                {t("SendSendJewelry.GuiSanPhamDauGia")}
              </li>
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
                  <h4 className="login-title">
                    {" "}
                    {t("SendSendJewelry.GuiThongTinSanPham")}
                  </h4>
                  <div className="row mb-4">
                    <div className="col-md-6 col-12 mb--20">
                      <label>{t("SendSendJewelry.TenSanPham")}</label>
                      <input
                        type="text"
                        placeholder={t("SendSendJewelry.NhapTenSanPham")}
                        value={productName}
                        onChange={handleProductNameChange}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label>{t("SendSendJewelry.LoaiSanPham")}</label>
                      <select
                        value={productType}
                        onChange={handleCategoryChange}
                        style={{
                          width: "100%",
                          height: "40px",
                          padding: "0 0 0 10px",
                        }}
                        required
                      >
                        {categories.map((category) => (
                          <option
                            style={{ padding: "5px" }}
                            key={category.id}
                            value={category.name}
                          >
                            {category.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="col-md-6">
                      <label>{t("SendSendJewelry.Gia")}</label>
                      <input
                        className="mb-0"
                        type="text"
                        placeholder={t("SendSendJewelry.NhapGia")}
                        value={priceDisplay}
                        onChange={handlePriceChange}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label>{t("SendSendJewelry.ThuongHieu")}</label>
                      <input
                        type="text"
                        placeholder={t("SendSendJewelry.NhapThuongHieu")}
                        value={brand}
                        onChange={handleBrandChange}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label>{t("SendSendJewelry.ChatLieu")}</label>
                      <select
                        value={material}
                        onChange={handleMaterialChange}
                        style={{
                          width: "100%",
                          height: "40px",
                          padding: "0 0 0 10px",
                        }}
                        required
                      >
                        <option value="Bạc">{t("SendSendJewelry.Bac")}</option>
                        <option value="Vàng">
                          {t("SendSendJewelry.Vang")}
                        </option>
                        <option value="Kim cương">
                          {" "}
                          {t("SendSendJewelry.KimCuong")}
                        </option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <label>{t("SendSendJewelry.CanNang")} (g)</label>
                      <input
                        type="number"
                        step="0.01"
                        placeholder={t("SendSendJewelry.NhapCanNang")}
                        value={weight}
                        onChange={handleWeightChange}
                        required
                      />
                    </div>
                    <div className="col-md-12">
                      <label>Mô Tả</label>
                      <textarea
                        className="w-100 h-100 p-2"
                        placeholder={t("SendSendJewelry.NhapMoTaSanPham")}
                        value={description}
                        onChange={handleDescriptionChange}
                        required
                      />
                    </div>
                    <div className="col-md-8 row" style={{ marginTop: "60px" }}>
                      <div className="col-md-6">
                        <label
                          className="btn btn-dark"
                          style={{ width: "140px", height: "30px" }}
                          htmlFor="jewelry-img"
                        >
                          {t("SendSendJewelry.AnhSanPham")}
                        </label>
                        <input
                          id="jewelry-img"
                          type="file"
                          name="jewelryImages"
                          multiple
                          onChange={handleImagesChange}
                        />
                      </div>
                      <div className="col-md-6">
                        {base64Images.map((base64, index) => (
                          <img
                            key={index}
                            src={base64}
                            alt={`Uploaded ${index}`}
                            style={{
                              width: "100px",
                              height: "100px",
                              margin: "10px",
                            }}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="col-12">
                      <button className="umino-register_btn" type="submit">
                        {t("SendSendJewelry.GuiYeuCau")}
                      </button>
                      <ToastContainer />
                    </div>
                  </div>
                </div>
              </form>
              {notification && <p>{notification}</p>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
