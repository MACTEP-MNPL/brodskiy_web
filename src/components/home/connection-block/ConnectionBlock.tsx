import { ConnectionForm } from "./ui/ConnectionForm";

export function ConnectionBlock() {
  return (
    <>
      <section className="flex flex-col items-center mb-[100px] w-full relative z-30">
        <div className="max-w-[1200px] flex-col flex items-center mdPlus:flex-row justify-center mdPlus:justify-between w-full mdPlus:gap-[20px] lg:gap-[150px]">
          <div className="flex flex-col gap-[24px] text-center mb-[40px] mdPlus:mb-0 mdPlus:text-left">
            <h5 className="text-[24px] font-bold leading-[28px] mdPlus:text-[32px] mdPlus:leading-[32px] lg:text-[36px] lg:leading-[41px]">
              Первая оплата
              <br />
              инвойса - бесплатно!
            </h5>
            <p className="text-[14px] font-white opacity-70 mdPlus:text-[18px] leading-[18px] lg:text-[20px] lg:leading-[20px]">
              Оставьте заявку на сайте, и мы проведем
              <br /> первую сделку на любую сумму без
              <br /> комиссии!
            </p>
          </div>
          <ConnectionForm />
        </div>
      </section>
      <div className="w-full relative">
        <div
          style={{
            background: "linear-gradient(to top,  #28D9AA, #ffffff00)",
          }}
          className="w-full max-w-[1000px] absolute left-0 bottom-[-100px] animate-pulse ease-in blur-2xl opacity-20 h-[300px] lg:m-auto lg:left-0 lg:right-0 z-[10]"
        />
        <div
          style={{
            background: "linear-gradient(to bottom,  #D8891A, #ffffff00)",
          }}
          className="w-full max-w-[500px] absolute left-[-150px] bottom-[-80px] animate-pulse ease-in-out rotate-[20deg] lg:m-auto lg:-translate-x-[300px] lg:left-0 lg:right-0 blur-2xl opacity-20 h-[150px] lg:rotate-[10deg] lg:bottom-[-50px] lg:h-[100px] z-[10]"
        />
      </div>
    </>
  );
}
