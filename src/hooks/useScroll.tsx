import { useEffect, useState } from "react";

const useScroll = (scrollPixel: number) => {
  const [isScrolling, setIsScrolling] = useState<boolean>(false);

  const handleScroll = () => {
    if (window.scrollY >= scrollPixel) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { isScrolling };
};
export default useScroll;
