import React from 'react';

const NavLink = ({ href, children }) => (
  <a 
    href={href} 
    className="text-gray-800 hover:text-sonny-orange transition-colors duration-300 text-sm"
  >
    {children}
  </a>
);

export default NavLink;