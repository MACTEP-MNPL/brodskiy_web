import Link from "next/link";
type Props = {
  text: string;
  href: string;
  onClick?: () => void;
  padding?: string;
};
export function PrimaryButton(props: Props) {
  const { text, href, onClick, padding } = props;

  return (
    <Link
      className={`${padding ? padding : "px-[33px] py-[14px]"} text-[14px] whitespace-nowrap lg:hover:shadow-lg transition-shadow duration-200 active:shadow-lg leading-[20px] font-semibold relative z-30  rounded-[20px] bg-GRIN_500 text-black`}
      onClick={onClick && onClick}
      href={href}
    >
      {text}
    </Link>
  );
}
