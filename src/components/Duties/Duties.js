import React, { useCallback } from "react";
import CheckboxList from "../../shared/CheckboxList/CheckboxList";
import { useDispatch } from "react-redux";
import { positionActions } from "../../providers/positions/positions.slice";

const dutiesItems = [
  { trade: ["Продавать продукт", "Выставлять цены", "Смотреть аналитику"] },
  { production: ["Закупать сырье", "Назначать рабочих"] },
  { management: ["Назначать должности", "Выгонять из банды"] },
  { showdown: ["Дуель", "Выставлять претензии"] },
];

function Duties({ activeObject }) {
  const dispatch = useDispatch();

  const handlePermitToggle = useCallback(
    (permit) => {
      dispatch(positionActions.updatePermits({ id: activeObject.id, permit }));
    },
    [dispatch, activeObject.id]
  );

  return (
    <div className="w-full h-[467px] flex justify-start gap-[117px] bg-dark rounded-b-lg px-[11px] py-3 pt-[52px] mb-2">
      <div>
        <CheckboxList
          dutiesItems={dutiesItems[0].trade}
          name={"Торговля"}
          activeObject={activeObject}
          handlePermitToggle={handlePermitToggle}
        />
        <CheckboxList
          dutiesItems={dutiesItems[3].showdown}
          name={"Разборки"}
          activeObject={activeObject}
          handlePermitToggle={handlePermitToggle}
        />
      </div>

      <div>
        <CheckboxList
          dutiesItems={dutiesItems[1].production}
          name={"Производство"}
          activeObject={activeObject}
          handlePermitToggle={handlePermitToggle}
        />
        <CheckboxList
          dutiesItems={dutiesItems[2].management}
          name={"Управление"}
          activeObject={activeObject}
          handlePermitToggle={handlePermitToggle}
        />
      </div>
    </div>
  );
}

export default Duties;
