import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import { ArrowRightIcon, ChevronRight } from "lucide-react";
import Review from "@/components/custom/Review";
import { RainbowButton } from "@/components/ui/rainbow-button";
import Link from "next/link";
import ExploreBtn from "./(components)/ExploreBtn";

export default function page() {
  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "...";
  };
  return (
    <div>
      <div
        className="h-[calc(100vh-6rem)]"
        style={{
          background:
            "radial-gradient(155.35% 155.35% at 50% -17.73%, #000 0%, #191919 43.63%, #343434 68.62%, #666 100%)"
        }}
      >
        <div className="h-full max-w-5xl mx-auto flex justify-center">
          <div className="flex flex-col items-center mt-32 gap-12">
            <div
              className={cn(
                "group select-none rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
              )}
            >
              <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                <span>✨ Introducing Photocess</span>
                <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
              </AnimatedShinyText>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-black text-center leading-relaxed">
              Easily transform your images into magical creations that meet your
              needs.
            </h2>
            <ExploreBtn />
          </div>
        </div>
      </div>
      <div
        className="relative w-full h-44"
        style={{
          background: "linear-gradient(180deg, #565656 -48.47%, #000 87.79%)"
        }}
      >
        <div className="absolute -mt-36 md:-mt-48 lg:-mt-52 xl:-mt-60 w-full mx-auto flex items-center justify-center">
          <div className="max-w-6xl grid grid-cols-2 place-content-center gap-2">
            {Array.from({ length: 4 }).map((_, index) => (
              <Image
                key={index}
                src="/aiGenerated.png"
                alt="placeholder"
                width={500}
                height={500}
                className="size-[10rem] md:size-[15rem] lg:size-[20rem] object-cover rounded-lg"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col justify-end items-center pt-72 pb-12">
        {/* Service section */}
        <div className="container">
          <h2 className="text-4xl font-black text-center mb-12">
            Our Services
          </h2>
          <div className="grid gap-8 py-6">
            {[
              {
                title: "Background Remover",
                description:
                  "Photocess background remover is a powerful tool that simplifies image editing. With a few clicks, you can isolate your subject from the background, making edits quick and easy. Designed for speed, it allows you to remove backgrounds in seconds, whether you're a beginner or an expert.",
                buttonText: "Try It Now",
                imageSrc: "/bgremover.png",
                imageAlt: "Image upscaler",
                url: "/bgremover"
              },
              {
                title: "Image resizer",
                description:
                  "Photoshop's image resizer is incredibly user-friendly. With just a few clicks, you can quickly adjust the size of your images without losing quality. It's designed for speed, allowing you to resize multiple images in no time. Perfect for anyone needing efficient image editing!",
                buttonText: "Try It Now",
                imageSrc:
                  "/media_12d729f5e1b50b373d1ef77bd90c7d7925c60ca55.mp4",
                imageAlt: "Image resizer",
                url: "/resizer"
              },
              {
                title: "Image Upscaler",
                description:
                  "An AI image upscaler is a digital tool that uses artificial intelligence to enlarge low-resolution images while preserving quality. It analyzes the original image and adds pixels to enhance resolution, keeping the details, textures, and colors intact.",
                buttonText: "Try It Now",
                imageSrc: "/upscaler.mp4",
                imageAlt: "Image upscaler",
                url: "/upscaler"
              },
              {
                title: "Ai Image Generator",
                description:
                  "An AI image generator is an advanced tool that uses machine learning to create descriptive captions for images, analyzing visual elements to provide context and meaning.",
                buttonText: "Try It Now",
                imageSrc: "/aiGenerated.mp4",
                imageAlt: "aiGenerated image",
                url: "/aiGenerated"
              }
            ].map((service, index) => (
              <Card
                key={index}
                className={cn(
                  index % 2 ? "md:flex-row-reverse" : "md:flex-row",
                  "py-12 px-6 lg:px-24 flex flex-col-reverse gap-6 bg-black"
                )}
              >
                <div className="flex-1 space-y-3 text-center md:text-start">
                  <h3 className="text-xl font-semibold mb-4">
                    {service.title}
                  </h3>
                  <p className="md:hidden">
                    {truncateText(service.description, 100)}
                  </p>
                  <p className="hidden md:block text-gray-400 mb-4">
                    {service.description}
                  </p>
                  <Link
                    href={service.url}
                    className="group"
                    legacyBehavior
                    passHref
                  >
                    <RainbowButton className="font-mono font-semibold">
                      Try Now
                      <ChevronRight className="ml-2 size-3 group-hover:translate-x-2 duration-300 transition-all delay-150 ease-linear" />
                    </RainbowButton>
                  </Link>
                </div>
                <div
                  className={cn(
                    index % 2 ? "lg:justify-start" : "lg:justify-end",
                    "flex-1 flex items-center justify-center"
                  )}
                >
                  {
                    // @ts-expect-ignore
                    service.imageSrc.endsWith(".mp4") ? (
                      <video
                        src={service.imageSrc}
                        autoPlay
                        loop
                        muted
                        className="rounded-lg size-32 md:size-44"
                        width={200}
                        height={200}
                      />
                    ) : (
                      <Image
                        src={service.imageSrc}
                        alt={service.imageAlt}
                        width={200}
                        height={200}
                        className="size-32 md:size-44 object-cover rounded-lg"
                        loading="lazy"
                        decoding="async"
                      />
                    )
                  }
                </div>
              </Card>
            ))}
          </div>
        </div>
        {/* Testimonial Section */}
        <section className="container px-4 py-16 text-center">
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-gray-300 mb-6">
              Using Photocess is a breeze! Its user-friendly tools make it
              incredibly easy to navigate, and the powerful features deliver
              impressive results every time.
            </p>
            <Review />
          </div>
        </section>

        <div className="space-y-4 text-center">
          <h3 className="text-lg lg:text-2xl font-semibold">
            Join thousands of satisfied users
          </h3>
          <div className="flex flex-col lg:flex-row gap-2 px-2 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-zinc-900 border-zinc-800"
            />
            <Button variant="secondary">Subscribe</Button>
          </div>
        </div>

        <div className="text-sm text-gray-400 mt-8 text-center">
          <p>© 2024 User, Upgraded</p>
          <p>contact@photocess.com</p>
        </div>
      </div>
    </div>
  );
}
