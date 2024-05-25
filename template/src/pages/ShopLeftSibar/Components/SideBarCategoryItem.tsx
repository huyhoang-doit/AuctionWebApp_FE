import { Link } from "react-router-dom";
import { Category } from "../../../models/Category";

interface SideBarCategoryItemProps {
    category: Category | null;
}

export const SideBarCategoryItem: React.FC<SideBarCategoryItemProps> = (props) => {
    return (
        <li>
            <Link to={"/shop-left-sibar/category/" + props.category?.id}>
                {props.category?.name}
            </Link>
        </li>
    )
}