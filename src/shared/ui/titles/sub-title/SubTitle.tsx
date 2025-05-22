type Props = {
  text: string;
};
export function SubTitle(props: Props) {
  const { text } = props;
  return (
    <p className="font-light text-WHITE_500 text-[20px] leading-[24.6px]">
      {text}
    </p>
  );
}
