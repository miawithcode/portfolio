import Container from "./Container";
import NavItems from "./NavItems";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="sticky inset-x-0 top-0 z-50 h-16">
      <header className="relative">
        <Container>
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="ml-4 flex md:ml-0">
              <a
                className="font-mono text-xl font-semibold md:text-3xl"
                href="/"
              >
                Mia.
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
                  <FaGithub className="h-6 w-6 text-gray-900" />
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="-mr-4 flex h-16 cursor-pointer items-center px-4"
                >
                  <EnvelopeIcon className="h-6 w-6 text-gray-900" />
                </a>
              </div>
            </div>
          </div>
        </Container>
      </header>
    </nav>
  );
};
export default Navbar;
