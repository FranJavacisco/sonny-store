import React from 'react';
import NavLink from './NavLink';
import { ShoppingBag, Search } from 'lucide-react';

const Navbar = () => (
  <nav className="flex justify-between items-center px-8 py-6">
    <div className="flex space-x-8">
      <NavLink href="#">Men</NavLink>
      <NavLink href="#">Women</NavLink>
      <NavLink href="#">Customize</NavLink>
    </div>
    <div className="flex items-center space-x-6">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        <input
          type="search"
          placeholder="Search"
          className="pl-10 pr-4 py-2 rounded-full bg-gray-50 text-sm focus:outline-none"
        />
      </div>
      <NavLink href="#">My Account</NavLink>
      <ShoppingBag className="h-5 w-5 text-gray-800 cursor-pointer" />
    </div>
  </nav>
);

export default Navbar;