import Link from "next/link";

interface NavItemProps {
  href: string;
  label: string;
}

const NavItem = ({ href, label }: NavItemProps) => {
  return (
    <div className="flex">
      <div className="relative flex items-center">
        <Link href={href} className="cursor-pointer capitalize tracking-wide">
          {label}
        </Link>
      </div>
    </div>
  );
};
export default NavItem;
