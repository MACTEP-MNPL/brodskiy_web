import { OfficeIcon } from "@/shared/ui/icons/OfficeIcon";
import { PercentIcon } from "@/shared/ui/icons/PercentIcon";
import { WranIcon } from "@/shared/ui/icons/WarnIcon";
import { ReactNode } from "react";

type Props = {
  title: string;
  subTitle: string;
  img: ReactNode;
};
export function UsList() {
  return (
    <ul className="w-[calc(100%+32px)] pr-[16px] mdPlus:pr-0 md:justify-center scrollbar-hide snap-x snap-mandatory ml-[-16px] gap-[8px] flex mb-[138px] overflow-x-scroll">
      <UsItem
        img={<PercentIcon />}
        title="Низкие комиссии"
        subTitle={`Мы ориентированы на клиентов, и именно поэтому наши комиссии одни из самых выгодных и низких на рынке. `}
      />
      <UsItem
        img={<WranIcon />}
        title="Риски на нас"
        subTitle={`Мы берем на себя ответственность, связанную с обработкой инвойсов. Если платеж не пройдет, мы вернем вам средства.`}
      />
      <UsItem
        img={<OfficeIcon />}
        title="Работаем в офисе"
        subTitle={`Мы открыты и честны в своей работе. Вы всегда можете узнать больше о нас, приехать и лично познакомиться с нашей командой.`}
      />
    </ul>
  );
}

function UsItem(props: Props) {
  const { title, subTitle, img } = props;
  return (
    <li className="px-[30px] md:mx-[10px] text-center flex max-w-[374px] md:py-[25px] flex-col items-center gap-y-[10px] md:gap-y-[15px] w-full snap-center first:ml-[16px] min-w-[250px] min-h-[222px] rounded-[24px] py-[25px] border-[1px] border-BLACK_300">
      <div
        style={{
          background:
            "linear-gradient(135deg, rgba(216, 137, 26, 0) 57.72%, #d78819a1 100%), linear-gradient(315deg, rgba(40, 217, 170, 0) 0%, rgba(40, 217, 170, 0.2) 91.44%)",
        }}
        className="h-[120px] flex items-center justify-center w-[120px] md:h-[130px] md:w-[130px] rounded-[26px] lg:rounded-[32px] lg:h-[144px] lg:w-[144px]"
      >
        {img}
      </div>
      <p className="font-bold text-[20px] leading-[23px] lg:text-[24px] lg:leading-[28px]">
        {title}
      </p>
      <p className="font-light text-[15px] whitespace-pre-wrap leading-[25px] lg:text-[20px] lg:leading-[30px]">
        {subTitle}
      </p>
    </li>
  );
}
