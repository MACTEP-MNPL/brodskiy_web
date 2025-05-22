import { ExchangeIcon } from "@/shared/ui/icons/ExchangeIcon";
import { RUBIcon } from "@/shared/ui/icons/RUB-ICON";
import { USDTIcon } from "@/shared/ui/icons/USDTIcon";
type Props = {
  isReverse: boolean;
  coursFrom: string | null;
  coursTo: string | null;
};
export function CourseMobile(props: Props) {
  const { isReverse, coursFrom, coursTo } = props;
  return (
    <div className="border-[1px] px-[15px] py-[9px] pr-[50px] min-w-[358px] w-full max-w-[420px] border-[#3A363E] flex gap-[16px] items-center min-h-[74px] rounded-[24px]">
      <ExchangeIcon />
      <div
        className={`w-full flex ${isReverse ? "flex-col-reverse" : "flex-col"} gap-[8px]`}
      >
        <div className="flex items-center justify-between w-full">
          <div className="flex gap-[10px] items-center">
            <RUBIcon /> <span className="text-[12px] font-light">RUB</span>
          </div>
          <span
            className={`text-[14px] font-medium leading-[20px] min-w-[50px] text-right min-h-[20px] ${!coursFrom ? "backdrop-blur-2xl bg-[#9a879728] text-transparent animate-pulse" : "blur-0 bg-transparent text-white"} rounded-[8px] transition-colors duration-300`}
          >
            {coursFrom}
          </span>
        </div>
        <div className="flex items-center justify-between w-full">
          <div className="flex gap-[10px] items-center">
            <USDTIcon /> <span className="text-[12px] font-light">USDT</span>
          </div>
          <span
            className={`text-[14px] font-medium leading-[20px] min-w-[50px] text-right min-h-[20px] ${!coursFrom ? "backdrop-blur-2xl bg-[#9a879728] text-transparent animate-pulse" : "text-white bg-transparent blur-0"} rounded-[8px] transition-colors duration-300`}
          >
            {coursTo}
          </span>
        </div>
      </div>
    </div>
  );
}
