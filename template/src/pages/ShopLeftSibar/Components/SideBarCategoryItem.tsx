import { Category } from "../../../models/Category";

interface SideBarCategoryItemProps {
    category: Category | null;
}

export const SideBarCategoryItem: React.FC<SideBarCategoryItemProps> = (props) => {
    return (
        <li>
            <a href="javascript:void(0)">
                {props.category?.name}
            </a>
        </li>
    )
}