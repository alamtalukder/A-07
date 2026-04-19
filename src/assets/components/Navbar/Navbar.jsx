import React from "react";
import { Home, Clock, TrendingUp, HomeIcon } from "lucide-react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-2xl font-semibold text-emerald-700">
            KeenKeeper
          </span>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-8">
          <NavLink to="/" className={({isActive}) => isActive ? "flex gap-1 items-center text-green-500 border border-green-500 px-3 py-1 rounded" : "flex gap-1 items-center hover:text-green-500"}>
            <HomeIcon size={20} />Home
          </NavLink>
          <NavLink to="/timeline" className={({isActive}) => isActive ? "flex gap-1 items-center text-green-500 border border-green-500 px-3 py-1 rounded" : "flex gap-1 items-center hover:text-green-500"}>
            <Clock size={20} />Timeline
          </NavLink>
          <NavLink to="/stats" className={({isActive}) => isActive ? "flex gap-1 items-center text-green-500 border border-green-500 px-3 py-1 rounded" : "flex gap-1 items-center hover:text-green-500"}>
            <TrendingUp size={20} />Stats
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
