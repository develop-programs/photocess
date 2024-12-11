"use client"
import React from 'react'
import BoxReveal from "@/components/ui/box-reveal";

type HeaderProps = {
    title: string
    description: string
    about: string
}

export default function Header(
    { title, description, about }: { title: string, description: string, about: string }
) {
    return (
        <div>
            <BoxReveal boxColor={"#2D2D2D"} duration={0.5}>
                <h1 className="min-[320px]:text-4xl sm:text-5xl md:text-6xl xl:text-[5.3125rem] font-black leading-tight">
                    {title}
                </h1>
            </BoxReveal>
            <BoxReveal boxColor={"#2D2D2D"} duration={0.6}>
                <p className="text-lg xl:text-xl font-semibold py-3 pb-6">
                    {description}
                </p>
            </BoxReveal>
            <BoxReveal boxColor={"#2D2D2D"} duration={0.7}>
                <span className="text-base xl:text-xl">
                    {about}
                </span>
            </BoxReveal>
        </div>
    )
}
