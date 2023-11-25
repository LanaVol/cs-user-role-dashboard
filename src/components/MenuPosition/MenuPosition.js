import React, { useCallback, useState } from "react";
import NameBlock from "../NameBlock/NameBlock";
import Duties from "../Duties/Duties";
import Button from "../shared/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { getPositionData } from "../providers/positions/selectors";
import { Position } from "../ListPosition/model/position";
import { positionActions } from "../providers/positions/positions.slice";

function MenuPosition() {
  const [value, setValue] = useState("");
  const positions = useSelector(getPositionData);
  const dispatch = useDispatch();

  const handleChange = useCallback((newValue) => setValue(newValue), []);

  const handleSubmit = useCallback(() => {
    const position = new Position(value);
    dispatch(positionActions.addNewPosition(position));
    setValue("");
  }, [value, dispatch]);

  return (
    <form className="w-full max-w-[592px] p-4 bg-primary flex flex-col gap-[15px] rounded-lg">
      <NameBlock value={value} handleChange={handleChange} />

      <div className="relative">
        <h3 className="w-full absolute top-0 left-0 text-sm font-medium leading-5 text-secondary py-[11px] px-4 rounded-t-lg bg-dark shadow-titleShadow z-10">
          Обязанности
        </h3>
        <div className="pl-[5px] z-0 ">
          <Duties />
          <Button text="Сохранить" className="w-full" onClick={handleSubmit} />
        </div>
      </div>
    </form>
  );
}

export default MenuPosition;
