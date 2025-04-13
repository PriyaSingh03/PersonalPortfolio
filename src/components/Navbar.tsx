
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("/");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Make sure body scrolling is disabled when menu is opened
    document.body.style.overflow = isMenuOpen ? "auto" : "hidden";
  };

  // Ensure body overflow is reset when component unmounts
  useEffect(() => {
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  // Set active link based on current location
  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  const navItems = [
    { name: "About Me", href: "/about" },
    { name: "Education", href: "/education" },
    { name: "Experience", href: "/experience" },
    { name: "Projects", href: "/projects" },
    { name: "Skills", href: "/skills" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 py-6 px-4 md:px-8 bg-slate-900/80 backdrop-blur-md">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="z-50">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block bg-cyan-500 text-slate-900 px-4 py-1 text-sm font-mono uppercase tracking-wider"
            >
              Priya Singh
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
              >
                <Link
                  to={item.href}
                  className={`text-sm tracking-wider uppercase font-medium 
                    ${activeLink === item.href
                      ? "text-cyan-400" 
                      : "text-white hover:text-cyan-400"} 
                    transition-colors duration-300`}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden z-50 p-2 text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-cyan-400" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Progress bar indicator */}
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute bottom-0 right-0 h-[2px] w-1/3 bg-gradient-to-l from-cyan-400 to-transparent"
        />
      </header>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-40 bg-slate-900/95 backdrop-blur-sm flex flex-col items-center justify-center"
        >
          <div className="flex flex-col items-center space-y-8 py-8">
            {navItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.05 * index }}
              >
                <Link
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-xl uppercase text-white hover:text-cyan-400 transition-colors duration-300"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;
