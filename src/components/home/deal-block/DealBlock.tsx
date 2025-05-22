import { NameSection } from "@/components/name-section";
import { ReactNode } from "react";

export function DealBlock() {
  return (
    <section className="self-center mb-[132px] lg:mb-[240px]">
      <NameSection name="Сделка в 2 этапа" isCenter />
      <div className="flex flex-col gap-[31px] lg:flex-row lg:gap-[0px]">
        <DealElem
          step="01"
          description="Оставьте заявку на сайте"
          background={
            <>
              <div
                style={{
                  background: "linear-gradient(to top,  #28D9AA, #ffffff00)",
                }}
                className="w-full absolute left-[0px] animate-pulse ease-in-out bottom-[0px] blur-2xl opacity-40 h-[50px] z-10"
              />
              <div
                style={{
                  background: "linear-gradient(to bottom,  #D8891A, #ffffff00)",
                }}
                className="w-full absolute right-[-150px] animate-pulse ease-out top-0 rotate-45 blur-2xl opacity-40 h-[50px] z-10"
              />
            </>
          }
        />
        <div className="h-[1px] bg-BLACK_250 self-center w-[64px] rotate-90 lg:rotate-0" />
        <DealElem
          step="02"
          description="Получите первую оплату инвойса без комиссии"
          background={
            <>
              <div
                style={{
                  background: "linear-gradient(to top,  #28D9AA, #ffffff00)",
                }}
                className="w-full absolute right-[-120px] rounded-[50%] animate-pulse ease-in-out bottom-[0px] rotate-[-45deg] blur-2xl opacity-40 h-[60px] z-10"
              />
              <div
                style={{
                  background: "linear-gradient(to bottom,  #D8891A, #ffffff00)",
                }}
                className="w-full absolute left-[-150px] animate-pulse ease-out top-[-50px] rotate-[-20deg] blur-2xl opacity-40 h-[100px] z-10"
              />
            </>
          }
        />
      </div>
    </section>
  );
}
function DealElem({
  step,
  description,
  background,
}: {
  step: string;
  description: string;
  background: ReactNode;
}) {
  return (
    <div className="rounded-[32px] justify-between flex flex-col p-[40px] border-[1px] overflow-hidden border-BLACK_250 w-[340px] sm:w-[380px] h-[340px] relative">
      <div className="rounded-[50%] border-[1px] border-opacity-10 border-white w-[139px] h-[140px] flex items-center justify-center text-[64px] leading-[64px]">
        {step}
      </div>
      <p className="font-bold text-[24px] leading-[28px] text-white">
        {description}
      </p>
      {background}
    </div>
  );
}
