import  { useEffect, useState } from "react";
import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import Gfg from "../assets/logos/gfg logo.svg";
export default function NavbarHome() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<string>(); // Default active item is "Home"

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "#About" },
    { name: "Event", href: "#Events" },
    { name: "Team", href: "#Team" },
  ];

  const handleActive = (item: string) => {
    setActiveItem(item); // Update the active item state
  };

  useEffect(() => {
    // Update the active item based on the current URL
    if(window.location.pathname === "/"){
      setActiveItem("Home");
    } else {
    setActiveItem(window.location.pathname.split("/")[1]);
    }
  }
  , []);
  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="bg-black border-secondary text-secondary font-semibold flex justify-evenly p-2  h-[10vh] align-center rounded-lg max-w-[90%] w-[80%] mx-auto lg:mx-auto"
    >
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="sm:hidden"
      />
      <NavbarBrand>
        <img src={Gfg} alt="GFG" className="h-[9vh] w-30" />
      </NavbarBrand>
      <NavbarContent className=" hidden sm:flex gap-4 justify-center items-center font-semibold" justify="center">
        {menuItems.map((item) => (
          <NavbarItem
            key={item.name}
            onClick={() => handleActive(item.name)} // Update active item on click
            className={`relative pb-2 cursor-pointer ${
              activeItem === item.name ? "text-green-500" : "text-white"
            }`}
          >
            <Link href={item.href} className="text-inherit">
              {item.name}
            </Link>
            {/* Animated green border */}
            <span
              className={`absolute bottom-0 left-0 h-[2px] bg-green-500  duration-500 ease-in-out ${
                activeItem === item.name ? "w-full" : "w-0"
              }`}
            />
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button  className="bg-green-500 p-1 hid den sm:flex text-black font-bold text-base" href="#" variant="flat">
            Contact us
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="bg-black mt-10 font-bold text-center text-8xl underline-offset-4 uppercase text-secondary">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={index}>
            <Link href="#">{item.name}</Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>

  );
}
