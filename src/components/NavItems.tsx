import NavItem from "./NavItem";

const navItems = [
  { href: "/", label: "Home" },
  { href: "#skills", label: "Tech Stack" },
  { href: "#works", label: "Selected Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

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
