import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import GFG from "../assets/logos/gfg logo.svg";

const NavbarHome = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Event", href: "/events" },
    { name: "Team", href: "/team" },
  ];

  useEffect(() => {
    const hash = location.hash || location.pathname;
    if (hash.includes("#about")) {
      setActiveItem("About");
      navigate("/#about");
    } else if (hash === "/") {
      setActiveItem("Home");
    } else {
      const activeSection = menuItems.find(item => item.href === hash);
      if (activeSection) setActiveItem(activeSection.name);
    }
  }, [location, navigate]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const nav = document.getElementById('mobile-menu');
      const button = document.getElementById('menu-button');
      if (isMenuOpen && nav && !nav.contains(e.target as Node) && 
          button && !button.contains(e.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [isMenuOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-black border border-green-500 mx-auto w-[95%] sm:w-[90%] lg:w-[85%] xl:w-[75%] 2xl:w-[60%] mt-2 sm:mt-4 rounded-lg transition-all duration-300">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="flex items-center justify-between h-14 sm:h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0">
                <img 
                  src={GFG} 
                  alt="GeeksforGeeks" 
                  className="w-16 h-16 sm:w-20 sm:h-20 object-contain" 
                />
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block flex-grow justify-center">
              <div className="flex items-center justify-center space-x-4 lg:space-x-8">
                {menuItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setActiveItem(item.name)}
                    className={`relative text-base lg:text-lg font-medium transition-colors duration-300 px-2 py-1 ${
                      activeItem === item.name ? "text-green-500" : "text-white hover:text-green-400"
                    }`}
                  >
                    {item.name}
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 bg-green-500 transition-all duration-300 ${
                        activeItem === item.name ? "w-full" : "w-0"
                      }`}
                    />
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact Button */}
            <div className="hidden md:block">
              <button
                onClick={() => window.location.href = "/#contact"}
                className="bg-green-500 text-black px-3 py-1.5 lg:px-4 lg:py-2 text-sm lg:text-base rounded-lg font-medium hover:bg-green-400 transition-colors"
              >
                Contact us
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                id="menu-button"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsMenuOpen(!isMenuOpen);
                }}
                className="text-white p-2"
                aria-label="Toggle menu"
              >
                <div className="w-6 h-5 flex flex-col justify-between">
                  <span className={`h-0.5 w-full bg-white transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                  <span className={`h-0.5 w-full bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
                  <span className={`h-0.5 w-full bg-white transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          id="mobile-menu"
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden`}
        >
          <div className="px-4 pt-2 pb-4 space-y-3 bg-black flex flex-col items-center">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => {
                  setActiveItem(item.name);
                  setIsMenuOpen(false);
                }}
                className={`block text-center text-lg w-full py-2 rounded-md transition-colors duration-200 ${
                  activeItem === item.name 
                    ? "text-green-500 bg-black/20" 
                    : "text-white hover:bg-black/10"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <button
              onClick={() => {
                window.location.href = "/#contact";
                setIsMenuOpen(false);
              }}
              className="w-full bg-green-500 text-black py-2 rounded-lg font-medium hover:bg-green-400 transition-colors"
            >
              Contact us
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarHome;