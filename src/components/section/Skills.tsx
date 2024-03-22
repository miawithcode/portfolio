"use client";

import { skills } from "@/lib/data";
import Container from "../Container";
import SectionHeading from "../SectionHeading";
import SkillItem from "../SkillItem";
import { HandDrawCircleSVG } from "../Svg";
import { motion } from "framer-motion";
import useSectionInView from "@/hooks/useSectionInView";

const Skills = () => {
  const { ref } = useSectionInView("Tech Stack");

  return (
    <section ref={ref} id="skills" className="mx-auto max-w-4xl scroll-mt-20">
      <Container className="py-16 text-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, x: 540, y: 150 }}
            whileInView={{ opacity: 1, x: 540, y: 20 }}
            viewport={{
              once: true,
            }}
            className="absolute hidden lg:block"
          >
            <HandDrawCircleSVG className="h-36 w-36" />
          </motion.div>

          <SectionHeading>Tech Stack</SectionHeading>
          <ul className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <SkillItem key={skill.label} index={index} {...skill} />
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
};
export default Skills;
