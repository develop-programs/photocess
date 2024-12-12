//@ts-ignore
"use client";
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";

export default function page() {
  const data = useSelector((state: any) => state.data.value);
  return (
    <div>
      <Image
        src={data || null}
        alt="image preview"
        width={1000}
        height={1000}
      />
    </div>
  );
}
