export function OfficesListDesktop() {
  return (
    <>
      <p className="mb-[20px] text-GRAY_400 font-bold text-[14px] animate-fadeIn">
        💬Офисы партнёров:
      </p>
      <OfficeListItem text="Краснодар" />
      <OfficeListItem text="Екатеринбург" />
      <OfficeListItem text="Сочи" />
      <OfficeListItem text="Барнаул" />
      <OfficeListItem text="Воронеж" />
      <OfficeListItem text="Калининград" />
      <OfficeListItem text="Казань" />
      <OfficeListItem text="Тюмень" />
      <OfficeListItem text="Тольятти" />
      <OfficeListItem text="Новосибирск" />
      <OfficeListItem text="Нижний Новгород" />
      <OfficeListItem text="Новороссийск" />
      <OfficeListItem text="Саратов" />
      <OfficeListItem text="Самара" />
      <OfficeListItem text="Ростов на Дону" />
      <OfficeListItem text="Уфа" />
      <OfficeListItem text="Хабаровск" />
      <OfficeListItem text="Ярославль" />
      <OfficeListItem text="Волгоград" />
      <OfficeListItem text="Иркутск" />
      <OfficeListItem text="Ижевск" />
      <OfficeListItem text="Ставрополь" />
      <OfficeListItem text="Севастополь" />
      <OfficeListItem text="Омск" />
      <OfficeListItem text="Пермь" />
      <OfficeListItem text="Ульяновск" />
      <OfficeListItem text="Томск" />
      <OfficeListItem text="Челябинск" />
      <OfficeListItem text="Махачкала" />

      <p className="mb-[20px] mt-[56px] text-GRAY_400 font-bold text-[14px] animate-fadeIn">
        💬Офисы по миру:
      </p>
      <OfficeListItem text="ОАЭ" />
      <OfficeListItem text="Лондон" />
      <OfficeListItem text="Лос-Анджелес" />
      <OfficeListItem text="Нью-Йорк" />
      <OfficeListItem text="Чикаго" />
      <OfficeListItem text="Бостон" />
      <OfficeListItem text="Майами" />
      <OfficeListItem text="Торонто" />
      <OfficeListItem text="Бали" />
      <OfficeListItem text="Цюрих" />
      <OfficeListItem text="Женева" />
      <OfficeListItem text="Милан" />
      <OfficeListItem text="Лиссабон" />
      <OfficeListItem text="Рим" />
      <OfficeListItem text="Лимасол" />
      <OfficeListItem text="Париж" />
      <OfficeListItem text="Аликанте" />
      <OfficeListItem text="Валенсия" />
      <OfficeListItem text="Барселона" />
      <OfficeListItem text="Малага" />
      <OfficeListItem text="Марбелья" />
      <OfficeListItem text="Мадрид" />
      <OfficeListItem text="Тенерифе" />
      <OfficeListItem text="Дублин" />
      <OfficeListItem text="Батуми" />
      <OfficeListItem text="Тбилиси" />
      <OfficeListItem text="Стамбул" />
      <OfficeListItem text="Анталия" />
      <OfficeListItem text="Алания" />
      <OfficeListItem text="Сеул" />
      <OfficeListItem text="Гонконг" />
      <OfficeListItem text="Вена" />
      <OfficeListItem text="Прага" />
      <OfficeListItem text="Будва" />
      <OfficeListItem text="Подгорица" />
      <OfficeListItem text="Мумбаи" />
      <OfficeListItem text="Дели" />
      <OfficeListItem text="Таиланд" />
      <OfficeListItem text="Сингапур" />
      <OfficeListItem text="Гонконг" />
      <OfficeListItem text="Шри-Ланка" />
      <OfficeListItem text="Гуанчжоу" />
      <OfficeListItem text="Джакарта" />
      <OfficeListItem text="Марокко" />
      <OfficeListItem text="Албания" />
      <OfficeListItem text="Алжир" />
      <OfficeListItem text="Доминиканская республика" />
      <OfficeListItem text="Перу" />
      <OfficeListItem text="Эквадор" />
      <OfficeListItem text="Чили" />
      <OfficeListItem text="Боливия" />
    </>
  );
}
function OfficeListItem({ text }: { text: string }) {
  return (
    <p className="font-bold animate-fadeIn text-GRAY_400 text-[14px] leading-[28px]">
      {text}
    </p>
  );
}
