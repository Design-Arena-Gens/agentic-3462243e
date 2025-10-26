"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { products, categories } from "../data/products";
import ProductCard from "../components/ProductCard";

function CategoriesContent() {
  const searchParams = useSearchParams();
  const filterParam = searchParams.get("filter");
  const [selectedCategory, setSelectedCategory] = useState<string>(filterParam || "All");

  useEffect(() => {
    if (filterParam) {
      setSelectedCategory(filterParam);
    }
  }, [filterParam]);

  const filteredProducts = selectedCategory === "All"
    ? products
    : products.filter((product) => product.category === selectedCategory);

  const categoryStats = categories.map((category) => ({
    ...category,
    count: products.filter((p) => p.category === category.name).length,
  }));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Shop by Category</h1>
      <p className="text-lg text-gray-600 mb-12">
        Browse our comprehensive selection of hardware and mechanical parts
      </p>

      <div className="grid md:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="md:col-span-1">
          <div className="card p-6 sticky top-20">
            <h2 className="text-xl font-bold mb-4">Categories</h2>
            <div className="space-y-2">
              <button
                onClick={() => setSelectedCategory("All")}
                className={`w-full text-left px-4 py-3 rounded-lg transition ${
                  selectedCategory === "All"
                    ? "bg-primary text-white"
                    : "hover:bg-gray-100"
                }`}
              >
                All Products
                <span className="float-right">{products.length}</span>
              </button>
              {categoryStats.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition ${
                    selectedCategory === category.name
                      ? "bg-primary text-white"
                      : "hover:bg-gray-100"
                  }`}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.name}
                  <span className="float-right">{category.count}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="md:col-span-3">
          <div className="mb-6">
            <h2 className="text-2xl font-bold">
              {selectedCategory === "All" ? "All Products" : selectedCategory}
            </h2>
            <p className="text-gray-600 mt-2">
              {filteredProducts.length} {filteredProducts.length === 1 ? "product" : "products"} found
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CategoriesPage() {
  return (
    <Suspense fallback={<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">Loading...</div>}>
      <CategoriesContent />
    </Suspense>
  );
}
