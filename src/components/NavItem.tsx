import { motion } from "framer-motion";
import Link from "next/link";
import { useActiveSectionContext } from "@/context/ActiveSectionContext";
import type { SectionHref, SectionName } from "@/lib/types";

interface NavItemProps {
  href: SectionHref;
  label: SectionName;
}

const NavItem = ({ href, label }: NavItemProps) => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <motion.div className="flex">
      <div className="relative flex items-center">
        <Link
          href={href}
          onClick={() => {
            setActiveSection(label);
            setTimeOfLastClick(Date.now());
          }}
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
              className="absolute inset-0 -z-10 rounded-full border border-gray-800"
            ></motion.span>
          )}
        </Link>
      </div>
    </motion.div>
  );
};
export default NavItem;
