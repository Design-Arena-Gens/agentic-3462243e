"use client";

import Link from "next/link";
import { useCart } from "../context/CartContext";
import { useState } from "react";

export default function Header() {
  const { getCartCount } = useCart();
  const cartCount = getCartCount();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-3xl">🔧</span>
            <span className="text-2xl font-bold text-primary">MechPro</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary font-medium transition">
              Home
            </Link>
            <Link href="/products" className="text-gray-700 hover:text-primary font-medium transition">
              Products
            </Link>
            <Link href="/categories" className="text-gray-700 hover:text-primary font-medium transition">
              Categories
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-primary font-medium transition">
              About
            </Link>
            <Link href="/cart" className="relative">
              <button className="btn-primary flex items-center space-x-2">
                <span>🛒</span>
                <span>Cart</span>
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-secondary text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link href="/" className="block text-gray-700 hover:text-primary font-medium" onClick={() => setMobileMenuOpen(false)}>
              Home
            </Link>
            <Link href="/products" className="block text-gray-700 hover:text-primary font-medium" onClick={() => setMobileMenuOpen(false)}>
              Products
            </Link>
            <Link href="/categories" className="block text-gray-700 hover:text-primary font-medium" onClick={() => setMobileMenuOpen(false)}>
              Categories
            </Link>
            <Link href="/about" className="block text-gray-700 hover:text-primary font-medium" onClick={() => setMobileMenuOpen(false)}>
              About
            </Link>
            <Link href="/cart" onClick={() => setMobileMenuOpen(false)}>
              <button className="btn-primary w-full flex items-center justify-center space-x-2">
                <span>🛒</span>
                <span>Cart ({cartCount})</span>
              </button>
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
