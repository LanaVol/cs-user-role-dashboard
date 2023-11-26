import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { positionActions } from "../../providers/positions/positions.slice";
import { CheckboxList } from "../../shared/CheckboxList/CheckboxList";

// Constants for duty categories
const TRADE = "trade";
const PRODUCTION = "production";
const MANAGEMENT = "management";
const SHOWDOWN = "showdown";

// Structure of dutiesItems for better consistency
const dutiesItems = {
  [TRADE]: ["Продавать продукт", "Выставлять цены", "Смотреть аналитику"],
  [PRODUCTION]: ["Закупать сырье", "Назначать рабочих"],
  [MANAGEMENT]: ["Назначать должности", "Выгонять из банды"],
  [SHOWDOWN]: ["Дуель", "Выставлять претензии"],
};

/**
 * Functional component representing the duties section.
 * @component
 * @param {Object} props - The component props.
 * @param {Object} props.activeObject - The active object for which duties are displayed.
 * @returns {JSX.Element} - The rendered component.
 */
function Duties({ activeObject }) {
  const dispatch = useDispatch();

  /**
   * Callback function to handle the toggling of permits.
   * @param {string} permit - The permit to toggle.
   */
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
          dutiesItems={dutiesItems[TRADE]}
          name={"Торговля"}
          activeObject={activeObject}
          handlePermitToggle={handlePermitToggle}
        />
        <CheckboxList
          dutiesItems={dutiesItems[SHOWDOWN]}
          name={"Разборки"}
          activeObject={activeObject}
          handlePermitToggle={handlePermitToggle}
        />
      </div>

      <div>
        <CheckboxList
          dutiesItems={dutiesItems[PRODUCTION]}
          name={"Производство"}
          activeObject={activeObject}
          handlePermitToggle={handlePermitToggle}
        />
        <CheckboxList
          dutiesItems={dutiesItems[MANAGEMENT]}
          name={"Управление"}
          activeObject={activeObject}
          handlePermitToggle={handlePermitToggle}
        />
      </div>
    </div>
  );
}

export default Duties;
