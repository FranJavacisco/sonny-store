// ProductPage.jsx
import React from 'react';
import Navbar from '../components/Navigation/Navbar';
import ProductInfo from '../components/Product/ProductInfo';
import ProductImage from '../components/Product/ProductImage';

const ProductPage = () => (
  <div className="min-h-screen bg-white relative">
    {/* Texto Vertical */}
    <div className="absolute left-6 top-1/2 -translate-y-1/2 -rotate-180 select-none" 
         style={{ writingMode: 'vertical-rl' }}>
      <span className="text-[12rem] font-bold tracking-tight text-black/20">
        SONNY
      </span>
    </div>

    <Navbar />
    <main className="container mx-auto px-8 py-6 relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 min-h-[calc(100vh-88px)]">
        <ProductInfo />
        <ProductImage />
      </div>
    </main>
  </div>
);

export default ProductPage;