type Props = {
  name: string;
  subTitle?: string;
  isCenter?: boolean;
};
export function NameSection(props: Props) {
  const { name, subTitle, isCenter } = props;
  return (
    <div
      className={`flex relative z-40 flex-col ${isCenter ? "items-center text-center" : ""} gap-[24px] md:gap-0 mb-[40px]`}
    >
      <h2 className="font-bold whitespace-pre-wrap text-[24px] leading-[28px] md:text-[36px] md:leading-[41px]">
        {name}
      </h2>
      {subTitle && (
        <p
          className={`text-[14px] leading-[17px] font-light md:font-normal md:text-[20px] md:leading-[39px]`}
        >
          {subTitle}
        </p>
      )}
    </div>
  );
}
