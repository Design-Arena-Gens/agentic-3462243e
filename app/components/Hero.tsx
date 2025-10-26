import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-primary to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Professional Tools & Mechanical Parts
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Everything you need for your workshop and projects
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products">
              <button className="bg-white text-primary hover:bg-gray-100 font-bold py-3 px-8 rounded-lg text-lg transition-colors duration-200">
                Shop Now
              </button>
            </Link>
            <Link href="/categories">
              <button className="bg-transparent border-2 border-white hover:bg-white hover:text-primary font-bold py-3 px-8 rounded-lg text-lg transition-colors duration-200">
                Browse Categories
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
