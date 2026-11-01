import pic1 from "../assets/pic1.webp";
import pic2 from "../assets/pic2.jpg";
import pic3 from "../assets/pic3.jpg";

export const products = [
  {
    slug: "algae-powder",
    name: "Algae Powder",
    price: 499,
    images: [pic1, pic2, pic3],
    description:
      "Fine, dark-green algae powder that mixes easily into smoothies, juices and batters.",
    benefits: ["Rich in plant protein", "Source of iron", "Easy to add to meals"],
    details: [
      { label: "Weight", value: "100 g" },
      { label: "Form", value: "Dried powder" },
      { label: "Shelf life", value: "12 months" },
      { label: "Storage", value: "Cool, dry place" },
    ],
  },
  
];

export const getProduct = (slug) => products.find((p) => p.slug === slug);