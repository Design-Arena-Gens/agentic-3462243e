export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-3xl">🔧</span>
              <span className="text-2xl font-bold">MechPro</span>
            </div>
            <p className="text-gray-400">
              Your trusted source for quality hardware and mechanical parts.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Shop</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/products" className="hover:text-white transition">All Products</a></li>
              <li><a href="/categories" className="hover:text-white transition">Categories</a></li>
              <li><a href="/" className="hover:text-white transition">Featured</a></li>
              <li><a href="/" className="hover:text-white transition">New Arrivals</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/about" className="hover:text-white transition">About Us</a></li>
              <li><a href="/" className="hover:text-white transition">Contact</a></li>
              <li><a href="/" className="hover:text-white transition">Shipping Info</a></li>
              <li><a href="/" className="hover:text-white transition">Returns</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>📞 1-800-MECHPRO</li>
              <li>📧 support@mechpro.com</li>
              <li>📍 123 Industrial Ave</li>
              <li>Mon-Fri: 8AM - 6PM</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 MechPro Hardware Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
