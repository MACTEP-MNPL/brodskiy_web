"use client";
import { NameSection } from "@/components/name-section";
import { DotItem } from "@/shared/ui/DotsItem";
import { GuaranteesItem } from "./ui/GuaranteesItem";
import { useBreakPoints } from "@/shared/hooks/useBreackPoints";

export function GuaranteesBlock() {
  const { isMobilePlus } = useBreakPoints();
  return (
    <section
      id="guarantees-section"
      className="pb-[100px] max-width lg:pb-[137px]"
    >
      <NameSection
        name="Мы гарантируем вам..."
        isCenter
        subTitle="Наши сотрудники всегда готовы решить любой из ваших запросов
мы за индивидуальный подход ко всем...
"
      />

      <ul className="overflow-x-scroll mdPlus:overflow-x-visible mdPlus:justify-between mdPlus:w-full mdPlus:p-0 w-[calc(100%+32px)] pr-[16px] snap-x snap-mandatory gap-x-[8px] mdPlus:gap-[18px] ml-[-16px] flex scrollbar-hide">
        <li className="snap-center min-w-[300px] w-full mdPlus:min-w-[180px] mdPlus:max-w-[374px]">
          <GuaranteesItem
            idDot="1"
            alt="img"
            className="w-full min-h-[355px] mdPlus:min-h-[200px] mdPlus:h-full mdPlus:max-h-[297px]"
          />
        </li>

        <li className="snap-center min-w-[300px] w-full mdPlus:min-w-[180px] mdPlus:max-w-[374px]">
          <GuaranteesItem
            idDot="2"
            alt="img"
            className="w-full min-h-[355px] mdPlus:min-h-[200px] mdPlus:h-full mdPlus:max-h-[297px]"
          />
        </li>

        <li className="snap-center min-w-[300px] w-full mdPlus:min-w-[180px] mdPlus:max-w-[374px]">
          <GuaranteesItem
            idDot="3"
            alt="img"
            className="w-full min-h-[355px] mdPlus:min-h-[200px] mdPlus:h-full mdPlus:max-h-[297px]"
          />
        </li>

        <li className="snap-center min-w-[300px] w-full mdPlus:min-w-[180px] mdPlus:max-w-[374px]">
          <GuaranteesItem
            idDot="4"
            alt="img"
            className="w-full min-h-[355px] mdPlus:min-h-[200px] mdPlus:h-full mdPlus:max-h-[297px]"
          />
        </li>
      </ul>
      {isMobilePlus && (
        <div className="flex mdPlus:hidden items-center mt-[26px] justify-center gap-[5px]">
          <DotItem id="1-dot-guarantees" />
          <DotItem id="2-dot-guarantees" />
          <DotItem id="3-dot-guarantees" />
          <DotItem id="4-dot-guarantees" />
        </div>
      )}
    </section>
  );
}
