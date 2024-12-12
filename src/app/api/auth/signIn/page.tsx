import { SignInForm } from "@/components/custom/auth/SignInForm";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SignIn",
  description: "Sign In to your account"
};

export default function page() {
  return (
    <div className="h-screen grid place-content-center">
      <SignInForm />
    </div>
  );
}
