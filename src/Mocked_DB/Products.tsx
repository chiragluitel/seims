type Product = {
    id: number;
    name: string;
    image: string;
  };

export const products: Product[] = Array.from({ length: 15 }).map((_, i) => ({
    id: i + 1,
    name: `Product ${i + 1}`,
    image: `https://picsum.photos/seed/${i + 1}/50`,
}));