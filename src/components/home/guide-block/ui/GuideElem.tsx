import { PrimaryButton } from "@/shared/ui/buttons";
import Image from "next/image";
import { TG_LINK } from "@/shared/const/social";

export function GuideElem() {
  return (
    <div className="w-full mb-[120px] lg:mb-[140px] overflow-hidden flex flex-col sm:items-center sm:justify-normal sm:gap-[60px] lg:gap-[80px] sm:max-h-[360px] sm:flex-row max-w-[1200px] justify-between px-[33px] py-[24px] h-[430px] relative rounded-[32px] border-[1px] border-BLACK_250">
      <Image
        width={321}
        quality={100}
        height={331}
        className="w-[200px] sm:w-[250px] sm:h-[250px] lg:w-[321px] lg:h-[331px] self-center relative z-30 lg:ml-[30px] h-[200px] animate-customRotateV2"
        alt="book"
        src="/image/book.png"
      />
      <div
        style={{
          background: "linear-gradient(to top,  #28D9AA, #ffffff00)",
        }}
        className="w-full absolute right-[-150px] bottom-[-150px] sm:bottom-[-250px] animate-pulse ease-in-out rotate-[-20deg] blur-2xl opacity-20 h-[350px] z-10"
      />
      <div
        style={{
          background: "linear-gradient(to bottom,  #D8891A, #ffffff00)",
        }}
        className="w-full absolute left-[-50px] bottom-[-120px] md:bottom-[-220px] animate-pulse ease-in-out rotate-[20deg] blur-2xl opacity-20 h-[150px] z-[2]"
      />

      <div className="flex flex-col">
        <p className="font-semibold mb-[16px] text-[24px] sm:text-[30px] sm:leading-[30px] lg:leading-[41px] lg:text-[36px]  leading-[28px] text-white">
          Гайд
        </p>
        <p className="text-[14px] leading-[29px] mb-[24px] font-light text-pretty text-WHITE_500 opacity-70 sm:text-[18px] sm:leading-[22px] lg:text-[20px] lg:leading-[25px]">
          Полностью покажем и расскажем, как провести
          <br /> свою первую сделку.
        </p>
        <div className="w-fit sm:mb-0 sm:mt-[24px]">
          <PrimaryButton text="Подробнее" href={TG_LINK} />
        </div>
      </div>
    </div>
  );
}
