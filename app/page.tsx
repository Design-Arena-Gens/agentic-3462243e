"use client";

import { products } from "./data/products";
import ProductCard from "./components/ProductCard";
import Hero from "./components/Hero";
import CategorySection from "./components/CategorySection";

export default function Home() {
  const featuredProducts = products.filter(p => p.featured).slice(0, 8);

  return (
    <div>
      <Hero />

      <CategorySection />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Products</h2>
          <p className="text-lg text-gray-600">Top quality tools and mechanical parts for professionals</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Why Choose MechPro?</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div>
              <div className="text-5xl mb-4">🔧</div>
              <h3 className="text-xl font-semibold mb-2">Quality Tools</h3>
              <p className="text-blue-100">Premium brands and durable equipment</p>
            </div>
            <div>
              <div className="text-5xl mb-4">🚚</div>
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-blue-100">Quick shipping on all orders</p>
            </div>
            <div>
              <div className="text-5xl mb-4">💯</div>
              <h3 className="text-xl font-semibold mb-2">Expert Support</h3>
              <p className="text-blue-100">Professional advice and assistance</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
