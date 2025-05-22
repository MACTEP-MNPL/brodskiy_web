"use client";
import { NameSection } from "@/components/name-section";
import { Map } from "./ui/Map";
import { Offices } from "./ui/Offices";

export function OfficeBlock() {
  return (
    <section id="offices-section" className="pb-[144px] max-width">
      <NameSection
        name="Офисы"
        isCenter
        subTitle="Наши офисы находятся в разных частях света. Ознакомьтесь с полным списком ниже."
      />
      <Map />
      <Offices />
    </section>
  );
}
