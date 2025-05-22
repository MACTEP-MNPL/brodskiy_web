"use client";
import { useBreakPoints } from "@/shared/hooks/useBreackPoints";
import { ReactNode, useEffect } from "react";
import { useInView } from "react-intersection-observer";

type Props = {
  background: ReactNode;
  title: string;
  subTitle: string;
  className: string;
  idDot: string;
};

export function ManageItem(props: Props) {
  const { background, title, idDot, subTitle, className } = props;
  const { isMobilePlus } = useBreakPoints();
  const { ref, entry, inView } = useInView();
  useEffect(() => {
    const dotItem = document.getElementById(
      `${idDot}-dot-manage`,
    ) as HTMLDivElement;
    if (!dotItem || !isMobilePlus) return;
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
  }, [inView, entry, idDot, isMobilePlus]);
  return (
    <li
      className={`relative py-[16px] px-[25px] lg:p-[32px] lg:py-[20px] xl:p-[32px] overflow-hidden flex flex-col gap-y-[12px] lg:gap-[14px] xl:gap-[16px] rounded-[32px] first:ml-[16px] mdPlus:first:ml-0 w-full min-w-[340px] mdPlus:min-w-[unset] snap-center mdPlus:min-h-[unset] border-[1px] border-BLACK_250 ${className}`}
    >
      <p className="text-[20px] leading-[23px] xl:text-[24px] mdPlus:text-[16px] lg:text-[20px] font-bold">
        {title}
      </p>
      <div ref={ref} className="left-1/2 top-0 w-[1px] h-full absolute" />
      <p className="text-[16px] mdPlus:text-[13px] xl:text-[18px] 2xl:text-[20px] xl:leading-[29px] text-WHITE_500 font-light">
        {subTitle}
      </p>
      {background}
    </li>
  );
}
