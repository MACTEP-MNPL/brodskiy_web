"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

type Props = {
  idDot: string;
  className?: string;

  alt: string;
};

export function GuaranteesItem(props: Props) {
  const { idDot, className, alt } = props;
  const { ref, inView } = useInView();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const dotItem = document.getElementById(
      `${idDot}-dot-guarantees`,
    ) as HTMLDivElement;
    if (!dotItem) return;
    let timeout = null;
    if (inView) {
      dotItem.style.backgroundColor = "#F3F2FA";
      dotItem.style.width = "18px";
      dotItem.style.height = "8px";
      dotItem.style.margin = "0px 2px";
      dotItem.style.borderRadius = "6px";

      timeout = setTimeout(() => {
        dotItem.style.backgroundColor = "#E0E0E0";
        dotItem.style.margin = "0px 0px";
        dotItem.style.width = "10px";
        dotItem.style.height = "10px";
        dotItem.style.borderRadius = "50%";
      }, 150);
    } else {
      timeout = null;
      dotItem.style.width = "10px";
      dotItem.style.backgroundColor = "#E0E0E01A";
      dotItem.style.height = "10px";
      dotItem.style.margin = "0px 0px";
    }
    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [inView, idDot]);

  return (
    <div className="relative rounded-[24px] overflow-hidden w-full h-fit first:ml-[16px]">
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
      <div ref={ref} className="left-1/2 top-0 w-[1px] h-full absolute" />
    </div>
  );
}
