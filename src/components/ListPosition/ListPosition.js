import React, { useEffect } from "react";
import ItemPosition from "../shared/ItemPosition/ItemPosition";
import { useDispatch, useSelector } from "react-redux";
import { getPositionData } from "../providers/positions/selectors";
import { Position } from "./model/position";
import { positionActions } from "../providers/positions/positions.slice";

function ListPosition() {
  const positions = useSelector(getPositionData);
  const dispatch = useDispatch();

  // const position = new Position("Rab");
  // position.setProduction("sell2");
  // position.setProduction("productionDuties");
  // position.setTrade("productionDuties");

  // useEffect(() => {
  //   dispatch(positionActions.addNewPosition(position));
  // }, []);

  return (
    <ul className="h-[608px] flex-start flex-col gap-2 w-[296px] mb-2">
      {positions?.map((el) => (
        <ItemPosition key={el.id} position={el} />
      ))}
    </ul>
  );
}

export default ListPosition;
