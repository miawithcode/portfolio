import { navItems } from "@/lib/data";
import NavItem from "./NavItem";
import { useState } from "react";

const NavItems = () => {
  const [activeSection, setActiveSection] = useState("Home");

  const handleClick = (label: string) => {
    setActiveSection(label);
  };

  return (
    <div className="flex h-full gap-1">
      {navItems.map((item) => (
        <NavItem
          key={item.label}
          handleClick={handleClick}
          activeSection={activeSection}
          {...item}
        />
      ))}
    </div>
  );
};
export default NavItems;
