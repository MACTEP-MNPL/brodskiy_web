import { CourseMobuleDesktop } from "@/components/course";
import { PrimaryButton } from "@/shared/ui/buttons";
import { BigTitle, SubTitle } from "@/shared/ui/titles";
import Image from "next/image";
import { BOT_LINK } from "@/shared/const/social";

export function PrevieBlock() {
  return (
    <section className="pt-[120px] self-center relative overflow-hidden max-w-[1232px] flex mx-auto text-center md:text-left md:items-start items-center flex-col justify-between md:justify-normal bg-BLACK_500 min-h-[580px] rounded-b-[40px] rounded-br-none md:rounded-[40px] ml-[-16px] md:m-0 md:w-full w-[calc(100%+32px)] md:mb-[155px]">
      <div className="flex flex-col md:px-[40px] gap-[24px] md:gap-0">
        <BigTitle text="Brodskiy Exchange" />
        <SubTitle text="Оплата инвойсов и обмен криптовалют!" />
      </div>
      <div className="hidden animate-fadeIn z-20 md:block md:ml-[40px] md:mt-[30px]">
        <CourseMobuleDesktop />
      </div>
      <Image
        className="object-contain absolute left-[1%] md:right-[15%] mdPlus:h-[346px] mdPlus:right-[10%] mdPlus:top-[40%] lg:h-[400px] lg:w-[400px] lg:top-[32%] xl:right-[25%] lg:right-[15%] mdPlus:w-[346px] md:left-[unset] md:top-[60%] sm:h-[250px] sm:w-[250px] top-[50%] animate-fadeIn z-[30]"
        width={220}
        height={220}
        quality={100}
        src="/image/coin-1.png"
        alt="coin"
      />
      <Image
        className="object-contain absolute top-[38%] md:right-[2%] md:top-[20%] mdPlus:top-[25%] mdPlus:right-[15%] mdPlus:h-[261px] mdPlus:w-[261px] lg:h-[380px] lg:top-[13%] lg:right-[6%] lg:w-[380px] md:left-[unset] sm:h-[320px] sm:w-[320px] md:h-[350px] md:w-[350px] rigth-1/2 animate-fadeIn xl:right-[14%] xl:h-[400px] xl:w-[400px] z-[29]"
        quality={100}
        width={300}
        height={300}
        src="/image/coin-2.png"
        alt="coin"
      />
      <Image
        quality={100}
        className="object-contain absolute right-[3%] sm:h-[220px] sm:w-[220px] top-1/2 animate-fadeIn z-[29] mdPlus:h-[215px] mdPlus:top-[40%] lg:right-[20px] lg:top-[55%] mdPlus:w-[215px] xl:h-[250px] xl:top-[50%] xl:w-[250px] xl:right-[6%]"
        width={180}
        height={180}
        src="/image/coin-3.png"
        alt="coin"
      />
      <div className="mb-[40px] md:px-[40px] md:mt-auto">
        <PrimaryButton text="Оплатить без комиссии" href={BOT_LINK} />
      </div>
      <div
        style={{
          background: "linear-gradient(to top,  #28D9AA, #ffffff00)",
        }}
        className="w-[calc(100%+100px)] absolute animate-pulse ease-in bottom-[-80px] left-[-20px] rotate-[4deg] blur-3xl opacity-40 h-[250px] z-10"
      />
      <div
        style={{
          background: "linear-gradient(to top, #D8891A, #ffffff00)",
        }}
        className="w-[calc(100%+130px)] absolute animate-pulse ease-in-out rounded-[50%] bottom-[-170px] opacity-50 right-[-140px] blur-xl md:right-[-380px] rotate-[-20deg] h-[350px] z-0"
      />
    </section>
  );
}
