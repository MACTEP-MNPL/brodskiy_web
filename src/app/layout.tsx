import { Header } from "@/components/header";
import { CompanyIcon } from "@/shared/ui/icons/CompanyIcon";
import "../shared/styles/globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="antialiased">
        <Header />
        <div className="px-[16px] realtive flex flex-col overflow-hidden xl:overflow-visible">
          {children}
        </div>
        <footer className="w-full flex items-center px-[16px] py-[23px] h-[177px] bg-BLACK_600 relative z-30 mt-auto">
          <div className="flex flex-col gap-[10px] h-full max-w-[1440px] w-full mx-auto justify-center">
            <CompanyIcon />
            <span className="font-medium text-[12px] text-WHITE_500 mt-auto opacity-50 leading-[17px]">
              Все права защищены. © 2025
            </span>
          </div>
        </footer>
      </body>
    </html>
  );
}
