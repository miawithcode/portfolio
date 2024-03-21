import { navItems } from "./data";

export type SectionName = (typeof navItems)[number]["label"];

export type SectionHref =  typeof navItems[number]["href"];