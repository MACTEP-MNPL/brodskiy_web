import { useBreakPoints } from "@/shared/hooks/useBreackPoints";
import { OfficesListMobile } from "./OfficesListMobile";
import { OfficesListDesktop } from "./OfficesListDesktop";

export function Offices() {
  const { isMobile } = useBreakPoints();
  return (
    <div className="flex relative max-w-[993px] md:h-[690px] md:flex-wrap mx-auto md:w-full lg:gap-x-[69px] md:gap-x-[40px] z-30 flex-col">
      <ul className="text-WHITE_600 w-fit md:mb-[68px] animate-fadeIn font-bold text-[30px] leading-[28px] flex flex-col gap-[24px]">
        <li>Москва</li>
        <li>Питер</li>
        <li>Новосибирск</li>
        <li>Владивосток</li>
      </ul>
      {isMobile && <OfficesListMobile />}
      {!isMobile && <OfficesListDesktop />}
    </div>
  );
}
