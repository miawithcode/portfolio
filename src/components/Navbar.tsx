"use client";

import { cn } from "@/lib/utils";
import Container from "./Container";
import NavItems from "./NavItems";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { FaGithub } from "react-icons/fa";
import useScroll from "@/hooks/useScroll";
import { motion } from "framer-motion";

const Navbar = () => {
  const { isScrolling } = useScroll(64);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.7 }}
      className="fixed inset-x-0 top-0 z-50 py-4"
    >
      <header className="relative">
        <Container>
          <div
            className={cn("transition-all duration-300 ease-in-out", {
              "border-1 rounded-full border-white border-opacity-40 bg-gray-100 bg-opacity-80 px-10 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem]":
                isScrolling,
            })}
          >
            <div className="flex h-16 items-center justify-between">
              {/* Logo */}
              <div className="ml-4 flex md:ml-0">
                <a
                  className="text-2xl font-semibold lowercase md:text-3xl"
                  href="/"
                >
                  mia.
                </a>
              </div>

              {/* Menu */}
              <div className="hidden lg:block">
                <NavItems />
              </div>

              {/* Social Icon */}
              <div className="flex items-center">
                <div>
                  <a
                    href="https://github.com/miawithcode"
                    target="_blank"
                    className="flex h-16 items-center px-4"
                  >
                    <FaGithub className="h-6 w-6" />
                  </a>
                </div>
                <div>
                  <a
                    href="#"
                    className="-mr-4 flex h-16 cursor-pointer items-center px-4"
                  >
                    <EnvelopeIcon className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </header>
    </motion.nav>
  );
};
export default Navbar;
