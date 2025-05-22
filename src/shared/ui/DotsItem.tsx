export function DotItem({ id }: { id: string }) {
  return (
    <div
      id={id}
      className="w-[10px] h-[10px] rounded-[50%] transition-all duration-150"
    />
  );
}
