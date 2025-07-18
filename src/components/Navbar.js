import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Close menu when route changes
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
     { name: "Services", path: "/services" },
    { name: "Products", path: "/products" },
    { name: "Contact", path: "/contact" },
    
  ];

  return (
    <header className="sticky top-0 z-50 shadow-lg">
      <div
        className="bg-gradient-to-r from-orange-600 to-yellow-500 text-white px-6 md:px-10 py-4 
        animate-slide-down"
      >
        <div className="max-w-10xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src="/images/logo.png" alt="IOCL Logo" className="h-10" />
            <span className="text-xl font-bold tracking-wide">IndianOil</span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-7 text-sm font-semibold">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative group transition-all duration-300 ${
                  location.pathname === item.path ? "text-white" : "text-white/90"
                }`}
              >
                {item.name}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button onClick={() => setOpen(!open)}>
              {open ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="bg-gradient-to-r from-orange-600 to-yellow-500 md:hidden px-6 py-4 space-y-3 animate-fade-in">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`block text-white font-medium text-base ${
                location.pathname === item.path ? "underline" : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
