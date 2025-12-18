import React from "react";
import { AuroraBackground } from "@/components/ui/AuroraBackground";

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <AuroraBackground className="min-h-screen block h-auto justify-start items-stretch bg-transparent">
      <main className="relative z-10">{children}</main>
    </AuroraBackground>
  );
};
