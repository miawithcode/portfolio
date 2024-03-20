import React from "react";
import { FaHtml5, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb } from "react-icons/si";
import { TbBrandNextjs, TbBrandFramerMotion } from "react-icons/tb";
import { RiJavascriptFill } from "react-icons/ri";
import { GrGraphQl } from "react-icons/gr";
import { BiLogoTypescript, BiLogoPostgresql } from "react-icons/bi";
import { DiCss3 } from "react-icons/di";

export const navItems = [
  { href: "/", label: "Home" },
  { href: "#skills", label: "Tech Stack" },
  { href: "#works", label: "Selected Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
] as const;

export const skills = [
  { label: "HTML", bgColor: "#e34c26", icon: React.createElement(FaHtml5) },
  { label: "CSS", bgColor: "#264de4", icon: React.createElement(DiCss3) },
  {
    label: "JavaScript",
    bgColor: "#f0db4f",
    icon: React.createElement(RiJavascriptFill),
  },
  {
    label: "TypeScript",
    bgColor: "#007acc",
    icon: React.createElement(BiLogoTypescript),
  },
  { label: "React", bgColor: "#007acc", icon: React.createElement(FaReact) },
  {
    label: "Next.js",
    bgColor: "#171717",
    icon: React.createElement(TbBrandNextjs),
  },
  {
    label: "Tailwind CSS",
    bgColor: "#38BDF8",
    icon: React.createElement(SiTailwindcss),
  },
  {
    label: "Framer Motion",
    bgColor: "#1f2328",
    icon: React.createElement(TbBrandFramerMotion),
  },
  { label: "Node.js", bgColor: "#3c873a", icon: React.createElement(FaNodeJs) },
  {
    label: "Express",
    bgColor: "#444444",
    icon: React.createElement(SiExpress),
  },
  {
    label: "MongoDB",
    bgColor: "#3c873a",
    icon: React.createElement(SiMongodb),
  },
  {
    label: "GraphQL",
    bgColor: "#e535ab",
    icon: React.createElement(GrGraphQl),
  },
  {
    label: "Postgres",
    bgColor: "#0064a5",
    icon: React.createElement(BiLogoPostgresql),
  },
] as const;
