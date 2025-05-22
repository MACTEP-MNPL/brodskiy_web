"use client";
import { useEffect, useState } from "react";

const DESKTOP = 1590;
const TABLET = 1280;
const MOBILE = 768;
const MOBILE_PLUS = 840;
const LAPTOP = 1536;

export function useBreakPoints() {
  const width = useWindowSize();
  const isDesktop = width >= LAPTOP;
  const isLaptop = width < DESKTOP && width >= TABLET;
  const isTablet = width < TABLET && width >= MOBILE;
  const isMobile = width < MOBILE;
  const isMobilePlus = width < MOBILE_PLUS;
  return { isDesktop, isLaptop, isTablet, isMobile, isMobilePlus };
}

function useWindowSize() {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    function updateSize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", updateSize, { passive: true });
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return width;
}
