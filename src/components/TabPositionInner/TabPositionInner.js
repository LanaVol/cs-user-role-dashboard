import React, { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { getActivePositionInfo } from "../../providers/positions/selectors";
import { ItemPositionInput } from "../../shared/ItemPositionInput/ItemPositionInput";
import MenuPosition from "../MenuPosition/MenuPosition";
import ListPosition from "../ListPosition/ListPosition";
import Button from "../../shared/Button/Button";

/**
 * TabPositionInner component representing the inner tab for position-related actions.
 * @component
 * @returns {JSX.Element} - The JSX for the TabPositionInner component.
 */
function TabPositionInner() {
  const [isClicked, setIsClicked] = useState(false);
  const activeObject = useSelector(getActivePositionInfo);

  /**
   * Toggles the display of the position creation form.
   * @function
   */
  const handleShowForm = useCallback(() => {
    setIsClicked((prev) => !prev);
  }, []);

  return (
    <div className="max-w-[984px] h-auto flex-start items-start gap-4 rounded-b-lg bg-dark border-2  border-light8 border-t-transparent p-10 pt-[27px] relative">
      <div className="max-w-[296px]">
        <ListPosition
          className={`${isClicked ? "h-[608px]" : "h-[608px] max-h-[608px]"}`}
        />

        {isClicked ? (
          <ItemPositionInput handleShowForm={handleShowForm} />
        ) : null}
        <Button
          text="Создать новую должность"
          onClick={handleShowForm}
          className={"z-20"}
        />
      </div>

      {activeObject ? (
        <MenuPosition activeObject={activeObject} />
      ) : (
        <div className="w-full text-center max-w-[592px] p-4 bg-primary rounded-lg text-grey">
          Нет информации или не выбрана карта должности
        </div>
      )}
    </div>
  );
}

export default TabPositionInner;
