// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface CompareProps {
    firstImage?: string;
    secondImage?: string;
    className?: string;
    firstImageClassName?: string;
    secondImageClassname?: string;
    initialSliderPercentage?: number;
    slideMode?: "hover" | "drag";
    showHandlebar?: boolean;
    autoplay?: boolean;
    autoplayDuration?: number;
}
export const Compare = ({
    firstImage = "",
    secondImage = "",
    className,
    firstImageClassName,
    secondImageClassname,
    initialSliderPercentage = 50,
    slideMode = "hover",
    showHandlebar = true,
    autoplay = false,
    autoplayDuration = 5000,
}: CompareProps) => {
    const [sliderXPercent, setSliderXPercent] = useState(initialSliderPercentage);
    const [isDragging, setIsDragging] = useState(false);

    const sliderRef = useRef<HTMLDivElement>(null);

    const [isMouseOver, setIsMouseOver] = useState(false);

    const autoplayRef = useRef<NodeJS.Timeout | null>(null);

    const startAutoplay = useCallback(() => {
        if (!autoplay) return;

        const startTime = Date.now();
        const animate = () => {
            const elapsedTime = Date.now() - startTime;
            const progress =
                (elapsedTime % (autoplayDuration * 2)) / autoplayDuration;
            const percentage = progress <= 1 ? progress * 100 : (2 - progress) * 100;

            setSliderXPercent(percentage);
            autoplayRef.current = setTimeout(animate, 16); // ~60fps
        };

        animate();
    }, [autoplay, autoplayDuration]);

    const stopAutoplay = useCallback(() => {
        if (autoplayRef.current) {
            clearTimeout(autoplayRef.current);
            autoplayRef.current = null;
        }
    }, []);

    useEffect(() => {
        startAutoplay();
        return () => stopAutoplay();
    }, [startAutoplay, stopAutoplay]);

    function mouseEnterHandler() {
        setIsMouseOver(true);
        stopAutoplay();
    }

    function mouseLeaveHandler() {
        setIsMouseOver(false);
        if (slideMode === "hover") {
            setSliderXPercent(initialSliderPercentage);
        }
        if (slideMode === "drag") {
            setIsDragging(false);
        }
        startAutoplay();
    }

    const handleStart = useCallback(
        (clientX: number) => {
            if (slideMode === "drag") {
                setIsDragging(true);
            }
        },
        [slideMode]
    );

    const handleEnd = useCallback(() => {
        if (slideMode === "drag") {
            setIsDragging(false);
        }
    }, [slideMode]);

    const handleMove = useCallback(
        (clientX: number) => {
            if (!sliderRef.current) return;
            if (slideMode === "hover" || (slideMode === "drag" && isDragging)) {
                const rect = sliderRef.current.getBoundingClientRect();
                const x = clientX - rect.left;
                const percent = (x / rect.width) * 100;
                requestAnimationFrame(() => {
                    setSliderXPercent(Math.max(0, Math.min(100, percent)));
                });
            }
        },
        [slideMode, isDragging]
    );

    const handleMouseDown = useCallback(
        (e: React.MouseEvent) => handleStart(e.clientX),
        [handleStart]
    );
    const handleMouseUp = useCallback(() => handleEnd(), [handleEnd]);
    const handleMouseMove = useCallback(
        (e: React.MouseEvent) => handleMove(e.clientX),
        [handleMove]
    );

    const handleTouchStart = useCallback(
        (e: React.TouchEvent) => {
            if (!autoplay) {
                handleStart(e.touches[0].clientX);
            }
        },
        [handleStart, autoplay]
    );

    const handleTouchEnd = useCallback(() => {
        if (!autoplay) {
            handleEnd();
        }
    }, [handleEnd, autoplay]);

    const handleTouchMove = useCallback(
        (e: React.TouchEvent) => {
            if (!autoplay) {
                handleMove(e.touches[0].clientX);
            }
        },
        [handleMove, autoplay]
    );

    return (
        <div
            ref={sliderRef}
            className={cn("size-[300px] sm:size-[200px] md:size-[300px] lg:size-[200px] xl:size-[250px] overflow-hidden select-none", className)}
            style={{
                position: "relative",
                cursor: slideMode === "drag" ? "grab" : "col-resize",
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={mouseLeaveHandler}
            onMouseEnter={mouseEnterHandler}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onTouchMove={handleTouchMove}
        >
            <AnimatePresence initial={false}>
                <motion.div
                    className="h-full w-px absolute top-0 m-auto z-30 bg-gradient-to-b from-transparent from-[5%] to-[95%] via-indigo-500 to-transparent"
                    style={{
                        left: `${sliderXPercent}%`,
                        top: "0",
                        zIndex: 40,
                    }}
                    transition={{ duration: 0 }}
                >
                    {showHandlebar && (
                        <div className="h-5 w-4 rounded-md top-1/2 -translate-y-1/2 bg-white z-30 -right-1.5 absolute flex items-center justify-center shadow-[0px_-1px_0px_0px_#FFFFFF40]">
                            <svg width="24" height="24" viewBox="0 0 24 24" className="size-4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 18C14 18.55 13.8042 19.0208 13.4125 19.4125C13.0208 19.8042 12.55 20 12 20C11.45 20 10.9792 19.8042 10.5875 19.4125C10.1958 19.0208 10 18.55 10 18C10 17.45 10.1958 16.9792 10.5875 16.5875C10.9792 16.1958 11.45 16 12 16C12.55 16 13.0208 16.1958 13.4125 16.5875C13.8042 16.9792 14 17.45 14 18ZM14 12C14 12.55 13.8042 13.0208 13.4125 13.4125C13.0208 13.8042 12.55 14 12 14C11.45 14 10.9792 13.8042 10.5875 13.4125C10.1958 13.0208 10 12.55 10 12C10 11.45 10.1958 10.9792 10.5875 10.5875C10.9792 10.1958 11.45 10 12 10C12.55 10 13.0208 10.1958 13.4125 10.5875C13.8042 10.9792 14 11.45 14 12ZM14 6C14 6.55 13.8042 7.02083 13.4125 7.4125C13.0208 7.80417 12.55 8 12 8C11.45 8 10.9792 7.80417 10.5875 7.4125C10.1958 7.02083 10 6.55 10 6C10 5.45 10.1958 4.97917 10.5875 4.5875C10.9792 4.19583 11.45 4 12 4C12.55 4 13.0208 4.19583 13.4125 4.5875C13.8042 4.97917 14 5.45 14 6Z" fill="#1D1B20" />
                            </svg>

                        </div>
                    )}
                </motion.div>
            </AnimatePresence>
            <div className="overflow-hidden w-full h-full relative z-20 pointer-events-none">
                <AnimatePresence initial={false}>
                    {firstImage ? (
                        <motion.div
                            className={cn(
                                "absolute inset-0 z-20 rounded-xl flex-shrink-0 w-full h-full select-none overflow-hidden",
                                firstImageClassName
                            )}
                            style={{
                                clipPath: `inset(0 ${100 - sliderXPercent}% 0 0)`,
                            }}
                            transition={{ duration: 0 }}
                        >
                            <Image
                                alt="first image"
                                src={firstImage}
                                width={360}
                                height={360}
                                className={cn(
                                    "absolute inset-0 z-20 rounded-xl flex-shrink-0 w-full h-full select-none",
                                    firstImageClassName
                                )}
                                draggable={false}
                                loading="lazy"
                            />
                        </motion.div>
                    ) : null}
                </AnimatePresence>
            </div>
            <Image src="/empty image.png" alt="empty image" className="absolute rounded-xl top-0 left-0 z-10 opacity-65" layout="fill" objectFit="cover" />
            <AnimatePresence initial={false}>
                {secondImage ? (
                    <motion.img
                        className={cn(
                            "absolute top-0 left-0 z-[19] rounded-xl w-full h-full select-none",
                            secondImageClassname
                        )}
                        alt="second image"
                        src={secondImage}
                        draggable={false}
                        loading="lazy"
                    />
                ) : null}
            </AnimatePresence>
        </div>
    );
};
