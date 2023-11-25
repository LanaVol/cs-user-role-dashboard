import React from "react";
import CheckboxList from "../shared/CheckboxList/CheckboxList";

function Duties() {
  const dutiesItems = [
    { trade: ["Продавать продукт", "Выставлять цены", "Смотреть аналитику"] },
    {
      production: ["Закупать сырье", "Назначать рабочих"],
    },
    {
      management: ["Назначать должности", "Выгонять из банды"],
    },
    {
      showdown: ["Дуель", "Выставлять претензии"],
    },
  ];

  return (
    <div className="w-full h-[467px] bg-dark rounded-b-lg px-[11px] py-3 pt-[52px] mb-2">
      <CheckboxList dutiesItems={dutiesItems[0].trade} name={"Торговля"} />
      <CheckboxList
        dutiesItems={dutiesItems[1].production}
        name={"Производство"}
      />
      <CheckboxList
        dutiesItems={dutiesItems[2].management}
        name={"Управление"}
      />
      <CheckboxList dutiesItems={dutiesItems[3].showdown} name={"Разборки"} />
    </div>
  );
}

export default Duties;
