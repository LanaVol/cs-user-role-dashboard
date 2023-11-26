import React, { useCallback, useEffect, useState } from "react";
import NameBlock from "../../shared/NameBlock/NameBlock";
import Duties from "../Duties/Duties";
import { useDispatch } from "react-redux";
import { positionActions } from "../../providers/positions/positions.slice";
import Button from "@/shared/Button/Button";

function MenuPosition({ activeObject }) {
  const [value, setValue] = useState(activeObject.positionName);
  const dispatch = useDispatch();

  useEffect(() => {
    setValue(activeObject.positionName);
  }, [activeObject]);

  const handleChange = useCallback((newValue) => setValue(newValue), []);

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
          <Button text="Сохранить" className="w-full" onClick={handleSubmit} />
        </div>
      </div>
    </form>
  );
}

export default MenuPosition;
