import { moveTo } from "../../helpers/scrollAnimation";
type Props = {
  closeMenu?: () => void;
};
export function NavMenu(props: Props) {
  const { closeMenu } = props;
  const onClick = (sectionId: string) => {
    const position = sectionId === "course-section";
    moveTo(sectionId, position ? "end" : "center");
    if (closeMenu) closeMenu();
  };
  return (
    <nav className="flex font-bold h-[100px] md:h-fit items-center lg:gap-[32px] md:font-medium md:text-[14px] md:leading-[19px]">
      <button
        onClick={() => onClick("course-section")}
        className="px-[15px] lg:px-[30px]"
      >
        Курс
      </button>
      <button
        onClick={() => onClick("offices-section")}
        className="px-[15px] lg:px-[30px]"
      >
        Офисы
      </button>
      {/* <button */}
      {/*   className="px-[15px] lg:px-[30px]" */}
      {/*   onClick={() => onClick("guarantees-section")} */}
      {/* > */}
      {/*   Гарантии */}
      {/* </button> */}
    </nav>
  );
}
