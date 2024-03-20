import { skills } from "@/lib/data";
import Container from "../Container";
import SectionHeading from "../SectionHeading";
import SkillItem from "../SkillItem";

const Skills = () => {
  return (
    <Container>
      <section className="mx-auto max-w-3xl scroll-mt-28 text-center py-16">
        <SectionHeading>Tech Stack</SectionHeading>
        <ul className="flex flex-wrap justify-center gap-3">
          {skills.map((skill, index) => (
            <SkillItem key={skill.label} index={index} {...skill} />
          ))}
        </ul>
      </section>
    </Container>
  );
};
export default Skills;
