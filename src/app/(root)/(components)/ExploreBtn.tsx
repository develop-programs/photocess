"use client";
import { RainbowButton } from "@/components/ui/rainbow-button";
import React from "react";

export default function ExploreBtn() {
  return (
    <RainbowButton
      className="font-mono"
      onClick={() => {
        window.scrollTo({
          top: window.innerHeight + 280,
          behavior: "smooth"
        });
      }}
    >
      Explore Photocess
    </RainbowButton>
  );
}
