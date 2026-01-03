// app/products/[id]/page.jsx
import React from "react";

// Sample data (Normally yeh API se aayega)
const products = [
  { id: 1, name: "Blue T-Shirt", price: 20, description: "High-quality cotton t-shirt", image: "/img2.png" },
  { id: 2, name: "Red Cap", price: 15, description: "Stylish red cap", image: "/img2.png" },
]

const ProductPage = ({ params }: { params: { id: string } }) => {
  const productId = parseInt(params.id);
  const product = products.find((p) => p.id === productId);

  if (!product) return <p>Product not found!</p>;

  return (
    <div className="max-w-4xl mx-auto p-6 flex flex-col md:flex-row gap-6">
      <img src={product.image} alt={product.name} className="w-full md:w-1/2 object-cover rounded-lg" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold text-aqua">{product.name}</h1>
        <p className="text-gray-700">{product.description}</p>
        <p className="text-xl font-semibold">${product.price}</p>
        <button className="bg-aqua text-white px-6 py-2 rounded hover:bg-blue-600 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductPage;
