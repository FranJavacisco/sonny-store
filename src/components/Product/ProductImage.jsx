import React from 'react';

const ProductImage = () => (
  <div className="relative h-full">
    <div className="absolute top-0 right-0 w-1/2 h-full diagonal-lines"></div>
    <div className="relative z-10 float-animation">
      <div className="float-shadow"></div>
      <img
        src="Model.png"
        alt="Model in orange outfit"
        className="w-full h-full object-cover rounded-lg shadow-2xl"
      />
      <div className="absolute bottom-6 left-6 flex space-x-2">
        <div className="w-16 h-16 bg-white/20 backdrop-blur rounded cursor-pointer hover:scale-110 transition-transform duration-300">
          <img src="public/images/Model.png" alt="Thumbnail" className="w-full h-full object-cover rounded" />
        </div>
        <div className="w-16 h-16 bg-white/20 backdrop-blur rounded cursor-pointer hover:scale-110 transition-transform duration-300">
          <img src="public/images/Model.png" alt="Thumbnail" className="w-full h-full object-cover rounded" />
        </div>
      </div>
    </div>
  </div>
);

export default ProductImage;
