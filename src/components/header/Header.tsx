"use client";
import { useBreakPoints } from "@/shared/hooks/useBreackPoints";
import { MediaLinks } from "./ui/media-links/MediaLinks";
import { Burger } from "./ui/burger/Burger";
import { NavMenu } from "./ui/nav-menu/NavMenu";
import { PrimaryButton } from "@/shared/ui/buttons";
import { CompanyIcon } from "@/shared/ui/icons/CompanyIcon";
import { useState } from "react";
import { NavMenuMobile } from "./ui/nav-menu/NavMenuMobile";
import "./styles/border-color.css";
import { TG_LINK } from "@/shared/const/social";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { isMobile } = useBreakPoints();
  return (
    <header className="bg-[#1A191D] flex flex-col bg-opacity-90 z-50 w-full left-0 custom-border backdrop-blur-[5px] fixed top-0 rounded-b-[24px] md:rounded-none px-[24px] min-h-[80px] md:min-h-[73px]">
      <div className="max-w-[1440px] relative z-40 mdPlus:self-center mdPlus:w-full justify-between mdPlus:my-auto mt-[20px] text-[13px] flex items-center h-full">
        <CompanyIcon />
        {isMobile ? (
          <div className="md:hidden flex items-center gap-[29px]">
            <MediaLinks />
            <button onClick={() => setIsOpen(!isOpen)}>
              <Burger />
            </button>
          </div>
        ) : (
          <div className="hidden animate-fadeIn md:items-center md:flex gap-[40px]">
            <NavMenu />
            <MediaLinks />
            <PrimaryButton
              padding="px-[29px] py-[11px]"
              href={TG_LINK}
              text="Оставить заявку"
            />
          </div>
        )}
      </div>
      {isMobile && (
        <NavMenuMobile isOpen={isOpen} closeMenu={() => setIsOpen(false)} />
      )}
    </header>
  );
}
