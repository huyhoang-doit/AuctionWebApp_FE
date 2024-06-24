import { useTranslation } from "react-i18next";
const ShippingArea = () => {
  const { t } = useTranslation(["Components"]);

  return (
    <div className="umino-shipping_area  ">
      <div className="container">
        <div className="shipping-nav">
          <div className="row no-gutters">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="shipping-item">
                <div className="shipping-icon">
                  <i className="fa fa-paper-plane"></i>
                </div>
                <div className="shipping-content">
                  <h5>{t("Components.Vận chuyển")}</h5>
                  <p>{t("Components.An toàn đảm bảo")}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="shipping-item">
                <div className="shipping-icon">
                  <i className="ion-ios-reload"></i>
                </div>
                <div className="shipping-content">
                  <h5>{t("Components.Hoàn tiền đặt trước")}</h5>
                  <p>{t("Components.Ngay khi phiên đấu giá khép lại")}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="shipping-item">
                <div className="shipping-icon">
                  <i className="fa fa-credit-card"></i>
                </div>
                <div className="shipping-content">
                  <h5>{t("Components.Giao dịch nhanh gọn")}</h5>
                  <p>PayPal / VNPay </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="shipping-item">
                <div className="shipping-icon">
                  <i className="ion-help-buoy"></i>
                </div>
                <div className="shipping-content">
                  <h5> {t("Components.Hỗ trợ")}</h5>
                  <p>{t("Components.Tư vấn, hỗ trợ bạn 24/7")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingArea;
