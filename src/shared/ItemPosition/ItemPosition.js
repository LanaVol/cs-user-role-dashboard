import React, { memo } from "react";
import { SvgCardElement } from "../Icons";

/**
 * ItemPosition component for displaying information about a position.
 *
 * @component
 *
 * @param {Object} props - The properties of the ItemPosition component.
 * @param {Object} props.position - The position data containing id, positionName, countTasks, and salary.
 * @param {function} props.handleActiveCard - The function to be called when the card is clicked.
 * @param {boolean} props.isActive - A boolean indicating whether the card is active.
 *
 * @returns {React.Component} Returns the ItemPosition component.
 */
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
          <div className="inputName__short">
            <p className="text-sm font-semibold leading-5 text-light">
              {positionName}
            </p>
          </div>

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
