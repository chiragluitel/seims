import type { Category } from '../../types';
import CategoryItem from './CategoryItem';

interface CategoriesProps {
    categories: Category[];
    title?: string;
}

const Categories = ({ categories, title = "Categories" }: CategoriesProps) => {
    return (
        <div className="space-y-4">
            <h4 className="text-lg font-semibold text-green-400">{title}</h4>
            <ul className="space-y-2">
                {categories.map((category) => (
                    <CategoryItem key={category.href} category={category} />
                ))}
            </ul>
        </div>
    )
}

export default Categories;
