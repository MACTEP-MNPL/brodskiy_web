import { ExchangeIcon } from "@/shared/ui/icons/ExchangeIcon";
import { RUBIcon } from "@/shared/ui/icons/RUB-ICON";
import { USDTIcon } from "@/shared/ui/icons/USDTIcon";

type Props = {
  isReverse: boolean;
  coursFrom: string | null;
  coursTo: string | null;
};
export function CourseDesktop(props: Props) {
  const { isReverse, coursFrom, coursTo } = props;
  return (
    <div
      className={`border-[1px] items-center justify-between px-[15px] py-[9px] pr-[50px] w-full min-w-[340px] lg:min-w-[414px] max-w-[450px] border-[#3A363E] flex min-h-[78px] ${isReverse ? "flex-row-reverse" : "flex-row"} rounded-[24px]`}
    >
      <div className="flex items-center gap-[10px]">
        <RUBIcon />
        <div className="felx font-medium text-[14px] leading-[15px] gap-[5px] flex flex-col">
          <p>RUB</p>
          <p
            className={`min-w-[50px] min-h-[15px] ${!coursFrom ? "backdrop-blur-2xl bg-[#9a879728] text-transparent animate-pulse" : "bg-transparent text-white"} rounded-[4px] transition-colors duration-300`}
          >
            {coursFrom}
          </p>
        </div>
      </div>

      <ExchangeIcon />
      <div className="flex items-center gap-[10px]">
        <USDTIcon />
        <div className="font-medium text-[14px] leading-[15px] gap-[5px] flex flex-col">
          <p>USDT</p>
          <p
            className={`min-w-[50px] min-h-[15px] ${!coursFrom ? "backdrop-blur-2xl bg-[#9a879728] text-transparent animate-pulse" : "bg-transparent text-white"} rounded-[4px] transition-colors duration-300`}
          >
            {coursTo}
          </p>
        </div>
      </div>
    </div>
  );
}
