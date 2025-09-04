import type { Category, Feature, LegalLink, QuickLink } from "../types";

export const quickLinks: QuickLink[] = [
    { href: "/products", label: "Browse Products" },
    { href: "/fresh", label: "Fresh Items" },
    { href: "/store", label: "Visit Store" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" }
];

export const categories: Category[] = [
    { href: "#", label: "Fresh Vegetables" },
    { href: "#", label: "Spices & Herbs" },
    { href: "#", label: "Rice & Grains" },
    { href: "#", label: "Dairy Products" },
    { href: "#", label: "Traditional Items" }
];

export const features: Feature[] = [
    {
        icon: "FaLeaf",
        title: "Fresh Daily",
        description: "Fresh products delivered daily"
    },
    {
        icon: "FaTruck",
        title: "Free Delivery",
        description: "On orders over $50"
    },
    {
        icon: "FaHeart",
        title: "Quality Assured",
        description: "100% authentic products"
    }
];

export const legalLinks: LegalLink[] = [
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms of Service" },
    { href: "#", label: "Refund Policy" }
];
