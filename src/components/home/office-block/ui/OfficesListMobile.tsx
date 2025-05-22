"use client";
import { PrimaryButton } from "@/shared/ui/buttons";
import { useState } from "react";

export function OfficesListMobile() {
  const [isOpen, setIsOpen] = useState(false);
  /*eslint-disable*/
  // @ts-ignore
  const toggleList = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="flex md:hidden flex-wrap mt-[40px] font-bold text-[14px] justify-between leading-[28px]">
        <div className="w-[49%] flex flex-col">
          <p className="mb-[20px] animate-fadeIn">💬Офисы партнёров:</p>
          <div
            className={`grid transition-[grid,opacity] duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr] opacity-0 "}`}
          >
            <ul className="text-[14px] min-h-0 font-bold leading-[28px]">
              <li>Краснодар</li>
              <li>Екатеринбург</li>
              <li>Сочи</li>
              <li>Барнаул</li>
              <li>Воронеж</li>
              <li>Калининград</li>
              <li>Казань</li>
              <li>Тюмень</li>
              <li>Тольятти</li>
              <li>Новосибирск</li>
              <li>Нижний Новгород</li>
              <li>Новороссийск</li>
              <li>Саратов</li>
              <li>Самара</li>
            </ul>
          </div>
        </div>
        <div className="w-[49%] flex flex-col">
          <p className="mb-[20px] animate-fadeIn">💬Офисы по миру:</p>
          <div
            className={`grid transition-[grid,opacity] duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr] opacity-0 "}`}
          >
            <ul className="text-[14px] min-h-0 font-bold leading-[28px]">
              <li>ОАЭ</li>
              <li>Лондон</li>
              <li>Чикаго</li>
              <li>Бостон</li>
              <li>Майами</li>
              <li>Торонто</li>
              <li>Бали</li>
              <li>Цюрих</li>
              <li>Женева</li>
              <li>Милан</li>
              <li>Лиссабон</li>
              <li>Рим</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="self-center mt-[50px] md:hidden ">
        <PrimaryButton
          text={isOpen ? "Скрыть все" : "Показать все"}
          href="/"
          /*eslint-disable*/
          // @ts-ignore
          onClick={toggleList}
        />
      </div>
    </>
  );
}
