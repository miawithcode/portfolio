import { motion } from "framer-motion";
import Link from "next/link";

interface NavItemProps {
  href: string;
  label: string;
  handleClick: (label: string) => void;
  activeSection: string;
}

const NavItem = ({ href, label, handleClick, activeSection }: NavItemProps) => {
  return (
    <motion.div className="flex">
      <div className="relative flex items-center">
        <Link
          href={href}
          onClick={() => handleClick(label)}
          className="!cursor-pointer justify-center px-4 py-2 capitalize tracking-wide transition"
        >
          {label}

          {label === activeSection && (
            <motion.span
              layoutId="activeSection"
              transition={{
                type: "spring",
                stiffness: 280,
                damping: 30,
              }}
              className="absolute inset-0 -z-10 rounded-lg border border-gray-800 bg-white"
            ></motion.span>
          )}
        </Link>
      </div>
    </motion.div>
  );
};
export default NavItem;
