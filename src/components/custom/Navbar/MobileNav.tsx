import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { NavigationTabs } from "./NavigationTabs";

export default function MobileNav() {
  return (
    <div className="fixed inset-0 w-full h-24 max-w-7xl container flex justify-between items-center py-2 px-4 z-50">
      <Link href="/" passHref legacyBehavior>
        <Image
          src="/Logo.svg"
          width={150}
          height={150}
          alt="Project Logo"
          decoding="async"
          priority
        />
      </Link>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="p-0">
            <svg
              height="44"
              width="44"
              fill="none"
              className="size-6"
              viewBox="0 0 44 44"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.04452 9.59529C6.45779 7.83345 7.83346 6.45779 9.5953 6.04452V6.04452C11.1222 5.68637 12.7112 5.68637 14.238 6.04452V6.04452C15.9999 6.45779 17.3755 7.83345 17.7888 9.5953V9.5953C18.147 11.1222 18.147 12.7112 17.7888 14.238V14.238C17.3755 15.9999 15.9999 17.3755 14.238 17.7888V17.7888C12.7112 18.147 11.1222 18.147 9.5953 17.7888V17.7888C7.83346 17.3755 6.45779 15.9999 6.04452 14.238V14.238C5.68637 12.7112 5.68637 11.1222 6.04452 9.59529V9.59529Z"
                stroke="#D9D9D9"
                strokeWidth="3"
              />
              <path
                d="M6.04452 29.7623C6.45779 28.0004 7.83346 26.6248 9.5953 26.2115V26.2115C11.1222 25.8534 12.7112 25.8534 14.238 26.2115V26.2115C15.9999 26.6248 17.3755 28.0004 17.7888 29.7623V29.7623C18.147 31.2891 18.147 32.8782 17.7888 34.405V34.405C17.3755 36.1669 15.9999 37.5425 14.238 37.9558V37.9558C12.7112 38.314 11.1222 38.314 9.5953 37.9558V37.9558C7.83346 37.5425 6.45779 36.1669 6.04452 34.405V34.405C5.68637 32.8782 5.68637 31.2891 6.04452 29.7623V29.7623Z"
                stroke="#0095FF"
                strokeWidth="3"
              />
              <path
                d="M26.2115 9.59529C26.6248 7.83345 28.0004 6.45779 29.7623 6.04452V6.04452C31.2891 5.68637 32.8782 5.68637 34.405 6.04452V6.04452C36.1669 6.45779 37.5425 7.83345 37.9558 9.5953V9.5953C38.314 11.1222 38.314 12.7112 37.9558 14.238V14.238C37.5425 15.9999 36.1669 17.3755 34.405 17.7888V17.7888C32.8782 18.147 31.2891 18.147 29.7623 17.7888V17.7888C28.0004 17.3755 26.6248 15.9999 26.2115 14.238V14.238C25.8534 12.7112 25.8534 11.1222 26.2115 9.59529V9.59529Z"
                stroke="#D9D9D9"
                strokeWidth="3"
              />
              <path
                d="M26.2115 29.7623C26.6248 28.0004 28.0004 26.6248 29.7623 26.2115V26.2115C31.2891 25.8534 32.8782 25.8534 34.405 26.2115V26.2115C36.1669 26.6248 37.5425 28.0004 37.9558 29.7623V29.7623C38.314 31.2891 38.314 32.8782 37.9558 34.405V34.405C37.5425 36.1669 36.1669 37.5425 34.405 37.9558V37.9558C32.8782 38.314 31.2891 38.314 29.7623 37.9558V37.9558C28.0004 37.5425 26.6248 36.1669 26.2115 34.405V34.405C25.8534 32.8782 25.8534 31.2891 26.2115 29.7623V29.7623Z"
                stroke="#D9D9D9"
                strokeWidth="3"
              />
            </svg>
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetTitle>Navbar</SheetTitle>
          <NavigationTabs className="grid" />
        </SheetContent>
      </Sheet>
    </div>
  );
}
