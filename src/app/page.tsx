import { Metadata } from "next";
import { CourseModuleMobile } from "@/components/course/CourseModuleMobile";
import { ConnectionBlock } from "@/components/home/connection-block/ConnectionBlock";
import { DealBlock } from "@/components/home/deal-block/DealBlock";
import { FaqBlock } from "@/components/home/faq-block/FaqBlock";
import { GuideBlock } from "@/components/home/guide-block/GuideBlock";
import { ManagerBlock } from "@/components/home/manager-block/ManagerBlock";
import { OfficeBlock } from "@/components/home/office-block";
import { PrevieBlock } from "@/components/home/previe-block";
import { WhyUsBlock } from "@/components/home/why-us-block";

export const metadata: Metadata = {
  title: "Brodskiy Exchange",
  description:
    "Быстрая оплата инвойсов и безопасный обмен криптовалют на Brodskiy Exchange! Надежный сервис для перевода средств, конвертации USDT. Низкие комиссии, мгновенные транзакции. Работайте с профессионалами!",
  keywords: "",
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: ["./favicon.ico"],
    shortcut: ["./favicon.ico"],
    apple: ["./apple-touch-icon.png"],
  },
  openGraph: {
    title: "Brodskiy Exchange",
    description:
      "Быстрая оплата инвойсов и безопасный обмен криптовалют на Brodskiy Exchange! Надежный сервис для перевода средств, конвертации USDT. Низкие комиссии, мгновенные транзакции. Работайте с профессионалами!",
    siteName: "Brodskiy Exchange",
    locale: "ru_RU",
    type: "website",
  },

  alternates: { canonical: "https://brodskiyexchange.com" },
};

export default function Home() {
  return (
    <>
      <PrevieBlock />
      <CourseModuleMobile />
      <WhyUsBlock />
      <OfficeBlock />
      <ManagerBlock />
      {/* <GuaranteesBlock /> */}
      <GuideBlock />
      <DealBlock />
      {/* <NetBlock /> */}
      <FaqBlock />
      <ConnectionBlock />
    </>
  );
}
