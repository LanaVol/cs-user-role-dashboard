import React from "react";
import { SvgCardElement } from "../Icons";
import { useSelector } from "react-redux";
import { getPositionData } from "@/components/providers/positions/selectors";

function ItemPosition({ position }) {
  const { positionName } = position;

  return (
    <li className="card">
      <div className="flex-start gap-4">
        <SvgCardElement />
        <div>
          <p className="text-sm font-semibold leading-5 text-light">
            {positionName}
          </p>

          <p className="text-xs font-semibold leading-[18px] text-secondary">
            15 заданий
          </p>
        </div>
      </div>

      <div>
        <p className="text-xs font-semibold leading-4 text-secondary">
          <span className="font-bold text-contrast2">$80</span> / час
        </p>
      </div>
    </li>
  );
}

export default ItemPosition;
