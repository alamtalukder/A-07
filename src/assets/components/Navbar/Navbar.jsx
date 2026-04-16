import React from "react";
import { Home, Clock, TrendingUp } from "lucide-react";

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
          <a
            href="#"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-700 text-white font-medium hover:bg-emerald-800 transition-colors"
          >
            <Home size={20} />
            Home
          </a>

          <a
            href="#"
            className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 font-medium transition-colors"
          >
            <Clock size={20} />
            Timeline
          </a>

          <a
            href="#"
            className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 font-medium transition-colors"
          >
            <TrendingUp size={20} />
            Stats
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
