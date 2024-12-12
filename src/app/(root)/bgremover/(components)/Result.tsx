"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export default function Result() {
  const data = useSelector((state: any) => state.data);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = data.SecondImg;
    link.download = "downloaded_image.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  if (data.image == "") return null;
  if (data.loading == true)
    return <div className="w-full h-44">
      <div className="flex justify-center items-center h-full">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    </div>;
  return (
    <div className="grid gap-2">
      <div
        style={{
          backgroundImage: `url("./mwFzF.png")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center"
        }}
      >
        <Image
          src={data.image as string}
          alt="First Image"
          width={400}
          height={200}
          className="w-full h-full object-cover"
          decoding="async"
          loading="lazy"
        />
      </div>
      <Button variant="ringHover" onClick={handleDownload}>
        Download
      </Button>
    </div>
  );
}
