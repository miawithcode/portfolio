import type { Metadata } from "next";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Mia",
  description: "Frontend Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={cn(
          "relative h-full bg-gray-50 font-sans text-gray-950 antialiased",
          GeistSans.variable,
          GeistMono.variable,
        )}
      >
        <main className="relative flex min-h-screen flex-col overflow-x-hidden pt-40 sm:pt-60">
          <div className="flex-1 flex-grow ">
            <div className="absolute left-[-29rem] top-[-4rem] -z-10 h-[31.25rem] w-[31.25rem] rounded-full bg-[#FDD5E7] blur-[10rem] lg:left-[-18rem] lg:top-[-4rem]"></div>
            <div className="absolute right-[-38rem] top-[30rem] -z-10 h-[31.25rem] w-[31.25rem] rounded-full bg-[#f6d046] blur-[10rem] md:top-[24rem] lg:right-[-32rem] lg:top-[20rem]"></div>
            <Navbar />
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
