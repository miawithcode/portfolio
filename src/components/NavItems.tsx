import { navItems } from "@/lib/data";
import NavItem from "./NavItem";

const NavItems = () => {
  return (
    <div className="flex h-full space-x-6">
      {navItems.map((item) => (
        <NavItem key={item.label} {...item} />
      ))}
    </div>
  );
};
export default NavItems;
