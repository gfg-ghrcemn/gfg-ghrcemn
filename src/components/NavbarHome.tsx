/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import Gfg from "../assets/logos/gfg logo.svg";
import { useNavigate } from "react-router-dom";

export default function NavbarHome() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<string>("Home"); // Default active item
  const navigate = useNavigate();
  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Event", href: "/events" },
    { name: "Team", href: "/team" },
  ];

  const onContactClick = () => {
    window.location.href = "#contact";
  };

  const handleActive = (item: string) => {
    setActiveItem(item); // Update the active item state
  };

  useEffect(() => {
    const handleScroll = () => {
      // Check the URL hash or pathname to set the active item
      const hash = window.location.hash || window.location.pathname;
      if (hash.includes("#about")) {
        if (hash.includes("#about")) {
          setActiveItem("About");
          navigate("/#about");
        }
      } else
      if (hash === "/") {
        setActiveItem("Home");
      } else {
        const activeSection = menuItems.find((item) => item.href === hash);
        if (activeSection) {
          setActiveItem(activeSection.name);
        }
      }
    };

    // Listen for hash changes or scroll to update the active item
    window.addEventListener("hashchange", handleScroll);
    window.addEventListener("popstate", handleScroll); // For back/forward navigation

    handleScroll(); // Set the initial state

    return () => {
      window.removeEventListener("hashchange", handleScroll);
      window.removeEventListener("popstate", handleScroll);
    };
  }, [menuItems]);

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="bg-black border-secondary text-secondary font-semibold flex justify-evenly p-2 h-[10vh] align-center rounded-lg max-w-[90%] w-[80%] mx-auto lg:mx-auto"
    >
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="sm:hidden"
      />
      <NavbarBrand>
        <img src={Gfg} alt="GFG" className="h-[9vh] w-30" />
      </NavbarBrand>
      <NavbarContent
        className="hidden sm:flex gap-4 justify-center items-center font-semibold"
        justify="center"
      >
        {menuItems.map((item) => (
          <NavbarItem
            key={item.name}
            onClick={() => handleActive(item.name)}
            className={`relative pb-2 cursor-pointer ${
              activeItem === item.name ? "text-green-500" : "text-white"
            }`}
          >
            <Link href={item.href} className="text-inherit">
              {item.name}
            </Link>
            {/* Animated green border */}
            <span
              className={`absolute bottom-0 left-0 h-[2px] bg-green-500 duration-500 ease-in-out ${
                activeItem === item.name ? "w-full" : "w-0"
              }`}
            />
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            onClick={onContactClick}
            className="bg-green-500 p-1 hidden sm:flex text-black font-bold text-base"
            variant="flat"
          >
            Contact us
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="bg-black mt-10 font-bold text-center text-8xl underline-offset-4 uppercase text-secondary">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={index}>
            <Link onClick={e=>setIsMenuOpen(false)} href={item.href} className="text-green-400 text-3xl font-Silkscreen">{item.name}</Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
