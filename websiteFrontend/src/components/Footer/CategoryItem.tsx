import type { Category } from "../../types";


interface CategoryItemProps {
    category: Category;
}

const CategoryItem = ({ category }: CategoryItemProps) => {
    return (
        <li>
            <a 
                href={category.href} 
                className="text-gray-300 hover:text-white transition-colors duration-300"
            >
                {category.label}
            </a>
        </li>
    )
}

export default CategoryItem;
