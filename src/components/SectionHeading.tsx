import React from "react";

interface SectionHeadingProps {
  children: React.ReactNode;
}

const SectionHeading = ({ children }: SectionHeadingProps) => {
  return (
    <h2 className="mb-8 text-center text-3xl md:text-4xl font-semibold capitalize">
      {children}
    </h2>
  );
};
export default SectionHeading;
