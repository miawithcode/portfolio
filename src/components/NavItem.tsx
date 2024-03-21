import { motion } from "framer-motion";
import Link from "next/link";
import { navItems } from "@/lib/data";
import { useActiveSectionContext } from "@/context/ActiveSectionContext";

interface NavItemProps {
  href: (typeof navItems)[number]["href"];
  label: (typeof navItems)[number]["label"];
}

const NavItem = ({ href, label }: NavItemProps) => {
  const { activeSection, setActiveSection } = useActiveSectionContext();

  return (
    <motion.div className="flex">
      <div className="relative flex items-center">
        <Link
          href={href}
          onClick={() => setActiveSection(label)}
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
