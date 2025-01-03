import { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import GFG from "../assets/logos/gfg logo.svg";

const NavbarHome = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");
  const navigate = useNavigate();
  const location = useLocation();
  const contactRef = useRef<HTMLDivElement>(null);
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

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-black border border-green-500 mx-auto lg:w-[60%] w-[90%] mt-4 rounded-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0">
                <img src={GFG} alt="GeeksforGeeks" className="w-20 h-20" />
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                {menuItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setActiveItem(item.name)}
                    className={`relative text-lg font-medium transition-colors duration-300 ${
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
                className="bg-green-500 text-black px-4 py-2 rounded-lg font-medium hover:bg-green-400 transition-colors"
              >
                Contact us
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white p-2"
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
        <div className={`md:hidden transition-all duration-300 ${isMenuOpen ? 'max-h-96' : 'max-h-0'} overflow-hidden`}>
          <div className="px-4 pt-2 pb-4 space-y-4 bg-black flex flex-col items-center">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => {
                  setActiveItem(item.name);
                  setIsMenuOpen(false);
                }}
                className={`block text-center text-xl py-2 ${
                  activeItem === item.name ? "text-green-500" : "text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <button
              onClick={() => {
                // Smooth scroll to the Contact section
                window.location.href = "/#contact";
                setIsMenuOpen(false);
              }}
              className="bg-green-500 text-black px-4 py-2 rounded-lg font-medium hover:bg-green-400 transition-colors"
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