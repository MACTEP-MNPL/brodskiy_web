import { NameSection } from "@/components/name-section";
import { UsList } from "./ui/UsList";

export function WhyUsBlock() {
  return (
    <section className="mt-[60px] md:mt-0">
      <NameSection name="Почему мы?" isCenter subTitle="Нам доверяют" />
      <UsList />
    </section>
  );
}
