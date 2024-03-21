"use client";

import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import Container from "../Container";
import Image from "next/image";
import { CircleSVG, StarSVGOne, StarSVGTwo } from "../Svg";
import { motion } from "framer-motion";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 },
};

const scaleVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1 },
};

const Hero = () => {
  return (
    <Container>
      <section className="relative pb-16">
        {/* Decoration */}
        <motion.div
          variants={scaleVariants}
          initial="hidden"
          animate="visible"
          className=" absolute -top-[10%] left-1 animate-blink md:left-[15%] lg:-top-[10%] lg:left-[20%]"
        >
          <StarSVGOne className="h-10 w-10" />
        </motion.div>
        <motion.div
          variants={scaleVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
          className="absolute right-1 top-[58%] animate-blink md:top-[55%] lg:right-[10%] lg:top-[45%]"
        >
          <StarSVGTwo className="h-10 w-10" />
        </motion.div>
        <motion.div
          variants={scaleVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
          className="absolute bottom-0 left-4 animate-bounce md:bottom-[15%] md:left-[10%] lg:bottom-[15%] lg:left-[20%]"
        >
          <CircleSVG className="h-4 w-4 md:h-6 md:w-6" />
        </motion.div>

        {/* Hero Content */}
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6 }}
          className="relative z-20 flex flex-col items-center justify-center space-y-6"
        >
          <div className="relative">
            {/* Name */}
            <h2 className="font-outline text-4xl font-bold tracking-wide text-transparent md:text-5xl">
              hello, i&apos;m mia.
            </h2>
            {/* Status */}
            <motion.div
              initial={{opacity: 0, scale: 0, x: -12, y: 8}}
              animate={{opacity: 1, scale: 1, x: -12, y: 8}}
              transition={{ type: "spring", stiffness: 125, delay: 0.7 }}
              className="absolute -right-16 -top-8 flex items-center gap-1.5 rounded-full border-2 border-green-600 bg-green-50 px-3 py-1 md:-right-48 md:-top-8"
            >
              <div className="flex h-3 w-3 animate-blink items-center justify-center rounded-full border border-green-500 bg-transparent md:h-5 md:w-5">
                <span className="block h-2 w-2 rounded-full bg-green-600 md:h-3 md:w-3"></span>
              </div>

              <p className="font-mono text-xs font-medium tracking-tight text-green-600 md:text-sm">
                Available for work
              </p>
            </motion.div>
          </div>
          {/* Title */}
          <div>
            <h1 className="text-4xl text-center font-bold leading-snug sm:text-5xl md:text-6xl">
              a{" "}
              <span className="text-primary">
                &lt;Frontend Developer &#47;&gt;
              </span>
              <br />
              with an eye of design
            </h1>
          </div>
          {/* Description */}
          <div>
            <p className="text-balance text-center	">
              With <span className="font-semibold">React/Next.js</span>, I
              translate design into clickable web wonders.
            </p>
          </div>
          {/* Button */}
          <div className="flex space-x-6 pt-6 md:space-x-10">
            <div>
              <Link
                className="button-shimmer group h-10 px-6 text-sm font-medium text-gray-50 shadow-[0_8px_30px_rgb(0,0,0,0.12)] md:h-12 md:text-base"
                href="#contact"
              >
                Get In Touch
                <ArrowRightIcon className="ml-2 h-4 w-4 transition-all duration-300 group-hover:ml-4" />
              </Link>
            </div>
            <div>
              <Link
                className="group inline-flex h-10 items-center justify-center rounded-md border border-gray-800 bg-gray-100 px-6 text-sm font-medium shadow-[0_8px_30px_rgb(0,0,0,0.12)] md:h-12 md:text-base "
                href="#works"
              >
                See My Works
                <ArrowRightIcon className="ml-2 h-4 w-4 transition-all duration-300 group-hover:ml-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </Container>
  );
};
export default Hero;
