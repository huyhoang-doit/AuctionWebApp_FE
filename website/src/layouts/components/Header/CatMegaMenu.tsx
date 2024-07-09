import { useTranslation } from "react-i18next";
export const CatMegaMenu = () => {
  const { t } = useTranslation(["ModalStaff"]);

  return (
    <ul className="cat-mega-menu" style={{ width: "315px" }}>
      <li className="right-menu cat-mega-title">
        <a href="#">{t("ModalStaff.Chất liệu")}</a>
        <ul>
          <li>
            <a href="#"></a>
          </li>
          <li>
            <a href="#">{t("ModalStaff.Bạc")}</a>
          </li>
          <li>
            <a href="#">{t("ModalStaff.Vàng")}</a>
          </li>
          <li>
            <a href="#">{t("ModalStaff.Bạch kim")}</a>
          </li>
          <li>
            <a href="#">{t("ModalStaff.Kim cương")}</a>
          </li>
        </ul>
      </li>
    </ul>
  );
};
