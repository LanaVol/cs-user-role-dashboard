import React, { memo } from "react";
import { SvgCardElement } from "../Icons";

export const ItemPosition = memo(({ position, handleActiveCard, isActive }) => {
  const { id, positionName, countTasks, salary } = position;

  return (
    <div
      className={`card ${isActive ? "card-active" : ""} cursor-pointer`}
      onClick={() => handleActiveCard(id)}
    >
      <div className={`flex-start gap-4`}>
        <SvgCardElement className="cursor-grab" />
        <div>
          <p className="text-sm font-semibold leading-5 text-light">
            {positionName}
          </p>

          <p className="text-xs font-semibold leading-[18px] text-secondary">
            {countTasks} заданий
          </p>
        </div>
      </div>

      <div>
        <p className="text-xs font-semibold leading-4 text-secondary">
          <span className="font-bold text-contrast2">$ {salary}</span> / час
        </p>
      </div>
    </div>
  );
});

// export default ItemPosition;
