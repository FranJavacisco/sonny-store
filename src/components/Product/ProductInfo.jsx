import React from 'react';

const ProductInfo = () => (
  <div className="flex flex-col justify-between py-12">
    <div className="space-y-8">
      <div className="float-animation" style={{animationDelay: '-2s'}}>
        <h1 className="text-[8rem] font-bold tracking-tighter leading-none relative">
          <span className="text-sonny-orange">SONNY</span>
        </h1>
      </div>
      
      <div className="space-y-2 float-animation" style={{animationDelay: '-1s'}}>
        <p className="text-sm text-gray-600 uppercase">CREDITS</p>
        <p className="text-sm text-gray-600">ID: 334563</p>
        <p className="text-gray-600">Colour: Blood Orange</p>
      </div>
    </div>
    
    <div className="flex justify-between items-center mt-12 float-animation" style={{animationDelay: '-3s'}}>
      <div className="flex space-x-4">
        <button className="bg-sonny-orange text-white px-12 py-3 rounded hover:bg-sonny-orange/90 transition-all duration-300 hover:scale-105 hover:-translate-y-1">
          Style
        </button>
        <button className="border border-gray-300 px-12 py-3 rounded hover:border-sonny-orange hover:text-sonny-orange transition-all duration-300 hover:scale-105 hover:-translate-y-1">
          Place Bid
        </button>
      </div>
      <span className="text-2xl font-bold">$750</span>
    </div>
  </div>
);

export default ProductInfo;