type Props = {
  text: string;
};
export function BigTitle(props: Props) {
  const { text } = props;
  return <h1 className="text-[36px] font-bold">{text}</h1>;
}
