"use client";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import React from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/Redux/Store";
import { logout } from "@/Redux/reducers/AuthSlice";

export default function SignOutButton({
  children,
  className
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <Button
      variant="ghost"
      className={className}
      onClick={() => {
        signOut();
        dispatch(logout());
      }}
    >
      {children}
    </Button>
  );
}
