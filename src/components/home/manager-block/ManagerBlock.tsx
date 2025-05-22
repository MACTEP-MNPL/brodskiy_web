"use client";
import { ManageItem } from "./ui/ManageItem";
import { NameSection } from "@/components/name-section";
import { useBreakPoints } from "@/shared/hooks/useBreackPoints";
import { PrimaryButton } from "@/shared/ui/buttons";
import { DotItem } from "@/shared/ui/DotsItem";
import { TG_LINK } from "@/shared/const/social";

export function ManagerBlock() {
  const { isMobilePlus } = useBreakPoints();
  return (
    <section className="pb-[108px] max-width lg:pb-[80px]">
      <NameSection
        name="Персональный менеджер"
        isCenter
        subTitle="Ваш партнер в решении финансовых задач"
      />
      <ul className="overflow-x-scroll mdPlus:max-h-[600px] xl:max-h-[700px] mdPlus:w-full mdPlus:overflow-x-hidden w-[calc(100%+32px)] pr-[16px] pl-[16px] snap-x snap-mandatory gap-x-[8px] mdPlus:gap-[18px] ml-[-16px] mdPlus:flex-wrap mdPlus:flex-col mdPlus:ml-0 flex scrollbar-hide">
        <ManageItem
          idDot="1"
          className="mdPlus:w-[28%] mdPlus:h-[370px] mdPlus:mb-[100px] lg:mb-0 lg:h-[500px]"
          title="Персональный менеджер"
          subTitle="Это ваш личный эксперт, который предоставляет индивидуальную поддержку. Если возникнут вопросы, вы сможете быстро обратиться к своему менеджеру для получения оперативной помощи. Мы всегда рядом, чтобы поддержать вас."
          background={
            <>
              <div
                style={{
                  background: "linear-gradient(to top,  #28D9AA, #ffffff00)",
                }}
                className="w-full absolute left-[0px] animate-pulse ease-in-out bottom-[-50px] mdPlus:bottom-0 mdPlus:blur-2xl blur-xl opacity-40 h-[50px] z-10"
              />
              <div
                style={{
                  background: "linear-gradient(to bottom,  #D8891A, #ffffff00)",
                }}
                className="w-full absolute right-[-150px] animate-pulse ease-out top-0 mdPlus:top-[unset] mdPlus:rotate-[20deg] mdPlus:right-[unset] mdPlus:blur-xl mdPlus:left-[-50px] mdPlus:bottom-[-50px] rotate-45 blur-lg opacity-40 h-[50px] z-10"
              />
            </>
          }
        />

        <ManageItem
          idDot="2"
          className="mdPlus:w-[44%] mdPlus:h-[170px] lg:h-[200px] xl:h-[219px]"
          title="Оперативное решение"
          subTitle="Мы предлагаем вам оперативные решения для обмена и оплаты инвойсов, которые позволяют быстро и эффективно совершать сделки, не теряя времени на ненужные шаги."
          background={
            <>
              <div
                style={{
                  background: "linear-gradient(to top,  #28D9AA, #ffffff00)",
                }}
                className="w-full absolute left-[-60%] animate-pulse mdPlus:rotate-[140deg] mdPlus:blur-2xl rotate-[60deg] blur-2xl top-0 opacity-30 h-[100px] z-10"
              />
            </>
          }
        />
        <ManageItem
          className="mdPlus:w-[44%] mdPlus:h-[252px] lg:h-[250px] xl:h-[286px]"
          title="Тщательно отобранный персонал"
          idDot="3"
          subTitle="Наши сотрудники - это команда квалифицированных специалистов, которая вовлечена в улучшение процессов. Это позволяет нам предоставлять актуальные и надежные решения, учитывающие все особенности рынка."
          background={
            <>
              <div
                style={{
                  background: "linear-gradient(to top,  #28D9AA, #ffffff00)",
                }}
                className="w-full absolute left-[-50%] animate-pulse ease-in-out mdPlus:blur-2xl mdPlus:rotate-0 mdPlus:left-0 mdPlus:bottom-[-80px] rotate-90 blur-2xl opacity-20 h-[150px] z-10"
              />
              <div
                style={{
                  background: "linear-gradient(to bottom,  #D8891A, #ffffff00)",
                }}
                className="w-full absolute ease-in animate-pulse right-[-150px] mdPlus:right-0 mdPlus:rotate-[10deg] bottom-[-50px] rotate-[130deg] blur-xl opacity-20 h-[50px] z-10"
              />
            </>
          }
        />
        <ManageItem
          idDot="4"
          className="mdPlus:h-[290px] mdPlus:w-[25%] lg:h-[280px] xl:h-[340px]"
          title="Индивидуальный подход к клиенту"
          subTitle="Мы ценим каждого клиента и готовы предложить индивидуальные решения, соответствующие вашим уникальным потребностям и целям. "
          background={
            <>
              <div
                style={{
                  background: "linear-gradient(to top,  #28D9AA, #ffffff00)",
                }}
                className="w-full ease-out absolute left-[-40%] animate-pulse rotate-[60deg] blur-2xl top-0 opacity-30 h-[100px] z-10"
              />
              <div
                style={{
                  background: "linear-gradient(to bottom,  #D8891A, #ffffff00)",
                }}
                className="w-full ease-linear absolute right-[-150px] animate-pulse bottom-0 rotate-[130deg] blur-xl opacity-20 h-[50px] z-10"
              />
            </>
          }
        />
        <ManageItem
          idDot="5"
          className="mdPlus:h-[280px] mdPlus:w-[25%] xl:h-[310px]"
          title="Круглосуточная поддержка"
          subTitle="Наша команда доступна круглосуточно для оказания поддержки и консультаций, чтобы вы могли получить оперативное решение любых вопросов."
          background={
            <>
              <div
                style={{
                  background: "linear-gradient(to top,  #28D9AA, #ffffff00)",
                }}
                className="w-full ease-in-out duration-1000 absolute left-[-50%] animate-pulse rotate-[60deg] blur-2xl top-0 opacity-30 h-[100px] z-10"
              />
              <div
                style={{
                  background: "linear-gradient(to bottom,  #D8891A, #ffffff00)",
                }}
                className="w-full ease-in absolute left-0 bottom-[-30px] animate-pulse rotate-[20deg] blur-xl opacity-20 h-[50px] z-20"
              />
            </>
          }
        />
      </ul>
      {isMobilePlus && (
        <div className="flex items-center mt-[26px] justify-center mdPlus:hidden gap-[5px]">
          <DotItem id="1-dot-manage" />
          <DotItem id="2-dot-manage" />
          <DotItem id="3-dot-manage" />
          <DotItem id="4-dot-manage" />
          <DotItem id="5-dot-manage" />
        </div>
      )}
      <div className="flex items-center justify-center mt-[26px]">
        <PrimaryButton text="Связаться с менеджером" href={TG_LINK} />
      </div>
    </section>
  );
}
