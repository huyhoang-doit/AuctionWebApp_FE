import { Link } from "react-router-dom";
import { Category } from "../../../models/Category";
import { useTranslation } from "react-i18next";

interface SideBarCategoryItemProps {
  category: Category | null;
}

export const SideBarCategoryItem: React.FC<SideBarCategoryItemProps> = (
  props
) => {
  const { t } = useTranslation(["Components"]);

  return (
    <li>
      <Link to={"/danh-sach-dau-gia/category/" + props.category?.id}>
        {t(`Components.${props.category?.name}`)}
      </Link>
    </li>
  );
};
