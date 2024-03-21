import SectionDivider from "@/components/SectionDivider";
import Hero from "@/components/section/Hero";
import Skills from "@/components/section/Skills";

export default function Home() {
  return (
    <>
      <Hero />
      <SectionDivider />
      <Skills />
      <div className="h-[300vh]"></div>
    </>
  );
}
