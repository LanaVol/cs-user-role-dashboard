import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { positionActions } from "../../providers/positions/positions.slice";
import { NameBlock } from "../../shared/NameBlock/NameBlock";
import Duties from "../Duties/Duties";
import Button from "@/shared/Button/Button";
import { SvgDeleteIcon } from "@/shared/Icons";

/**
 * MenuPosition component representing the menu for a specific position.
 * @component
 * @param {Object} props - The component props.
 * @param {Object} props.activeObject - The active position object.
 * @returns {JSX.Element} - The JSX for the MenuPosition component.
 */
function MenuPosition({ activeObject }) {
  const [value, setValue] = useState(activeObject.positionName);
  const dispatch = useDispatch();

  useEffect(() => {
    setValue(activeObject.positionName);
  }, [activeObject]);

  /**
   * Handles the change in the position name input.
   * @function
   * @param {string} newValue - The new value of the position name.
   */
  const handleChange = useCallback((newValue) => setValue(newValue), []);

  const handleDelete = () => {
    dispatch(positionActions.deleteCurrentPosition(activeObject.id));
  };

  /**
   * Handles the form submission to update the position name.
   * @function
   */
  const handleSubmit = useCallback(() => {
    const updatedCard = { ...activeObject, positionName: value };
    dispatch(positionActions.updatePosition(updatedCard));
    setValue("");
  }, [value, dispatch, activeObject]);

  return (
    <form className="w-full max-w-[592px] p-4 bg-primary flex flex-col gap-[15px] rounded-lg">
      <NameBlock value={value} handleChange={handleChange} />

      <div className="relative">
        <h3 className="w-full absolute top-0 left-0 text-sm font-medium leading-5 text-secondary py-[11px] px-4 rounded-t-lg bg-dark shadow-titleShadow z-10">
          Обязанности
        </h3>
        <div className="pl-[5px] z-0 ">
          <Duties activeObject={activeObject} />
          <div className="flex gap-2">
            <Button
              text="Сохранить"
              className="w-full"
              onClick={handleSubmit}
            />
            <Button
              Component={<SvgDeleteIcon />}
              className="w-14 max-w-[56px]"
              onClick={handleDelete}
            />
          </div>
        </div>
      </div>
    </form>
  );
}

export default MenuPosition;
