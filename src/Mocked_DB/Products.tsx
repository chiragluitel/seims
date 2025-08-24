type Product = {
    id: number;
    name: string;
    image: string;
  };

export const products: Product[] = Array.from({ length: 20 }).map((_, i) => ({
    id: i + 1,
    name: `Product ${i + 1}`,
    image: `https://img.spoonacular.com/recipes/720573-312x231.jpg`,
}));