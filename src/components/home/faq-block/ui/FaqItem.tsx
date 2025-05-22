"use client";

import { ArrowIcon } from "@/shared/ui/icons/ArrowIcon";
import { useState } from "react";

type Props = {
  title: string;
  description: string;
};
export function FaqItem(props: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const { title, description } = props;
  return (
    <div className="rounded-[16px] w-full min-h-[52px] bg-BLACK_200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between px-[24px] w-full text-left py-[17px] items-center"
      >
        <p className="font-bold text-[16px] leading-[16px]">{title}</p>
        <ArrowIcon isOpen={isOpen} />
      </button>
      <div
        className={`grid transition-[grid,opacity] duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr] opacity-0 "}`}
      >
        <div className="min-h-0 px-[24px] overflow-hidden">
          <p className="opacity-70 pb-[10px]">{description}</p>
        </div>
      </div>
    </div>
  );
}
