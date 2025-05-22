import { NavMenu } from "./NavMenu";
type Props = {
  isOpen: boolean;
  closeMenu: () => void;
};
export function NavMenuMobile(props: Props) {
  const { isOpen, closeMenu } = props;
  return (
    <div
      className={`grid md:hidden transition-[grid,opacity] duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr] opacity-0 "}`}
    >
      <div className="min-h-0 overflow-hidden">
        <NavMenu closeMenu={closeMenu} />
      </div>
    </div>
  );
}
