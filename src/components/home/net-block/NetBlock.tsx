"use client";
import { NameSection } from "@/components/name-section";
import Image from "next/image";
import { useState } from "react";

export function NetBlock() {
  return (
    <section className="w-full mb-[64px] lg:mb-[240px]">
      <NameSection name="Мы в сети" isCenter />
      <div className="flex flex-wrap justify-center gap-[30px] w-full">
        <NetItem
          className="w-[112.75px] h-[112.75px] md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[200px]"
          alt="мы в сети"
        />
        <NetItem
          alt="мы в сети"
          className="w-[112.75px] h-[112.75px] md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[200px]"
        />

        <NetItem
          alt="мы в сети"
          className="w-[112.75px] h-[112.75px] md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[200px]"
        />
      </div>
    </section>
  );
}
function NetItem({ alt, className }: { alt: string; className: string }) {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div className="relative overflow-hidden w-fit h-fit">
      <div
        className={`${isLoading ? "bg-[#9a879728] animate-pulse" : "opacity-100"} z-10 absolute transition-opacity ${className && className}`}
      />
      <Image
        width={700}
        quality={100}
        height={700}
        onLoad={() => setIsLoading(false)}
        className={`object-cover relative z-20 ${!isLoading ? "opacity-100" : "opacity-0"} duration-500 transition-opacity ${className && className}`}
        src="/image/guarantees-1.png"
        loading="lazy"
        alt={alt}
      />
    </div>
  );
}
