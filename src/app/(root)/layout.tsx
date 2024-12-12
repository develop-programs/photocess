import DesktopNav from "@/components/custom/Navbar/DesktopNav";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <div>
        <DesktopNav />
      </div>
      {children}
    </main>
  );
}
