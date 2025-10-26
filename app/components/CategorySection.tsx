import Link from "next/link";
import { categories } from "../data/products";

export default function CategorySection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Shop by Category</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {categories.map((category) => (
          <Link
            key={category.name}
            href={`/categories?filter=${encodeURIComponent(category.name)}`}
            className="card p-6 text-center hover:scale-105 transition-transform duration-200 cursor-pointer"
          >
            <div className="text-5xl mb-3">{category.icon}</div>
            <h3 className="font-semibold text-gray-900">{category.name}</h3>
          </Link>
        ))}
      </div>
    </section>
  );
}
