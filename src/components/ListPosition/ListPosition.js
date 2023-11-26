import React, { useCallback } from "react";
import ItemPosition from "../../shared/ItemPosition/ItemPosition";
import { useDispatch, useSelector } from "react-redux";
import {
  getCurrentPositionId,
  getPositionData,
} from "../providers/positions/selectors";
import { positionActions } from "../providers/positions/positions.slice";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function ListPosition({ className }) {
  const positions = useSelector(getPositionData);
  const activeCurrentIdPosition = useSelector(getCurrentPositionId);
  const dispatch = useDispatch();

  const handleActiveCard = useCallback(
    (cardId) => {
      dispatch(positionActions.setCurrentPositionId(cardId));
    },
    [dispatch]
  );

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const grid = 8;

  const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: "none",
    margin: `0 0 ${grid}px 0`,

    // styles we need to apply on draggables
    ...draggableStyle,
  });

  const onDragEnd = (result) => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }
    const items = reorder(
      positions,
      result.source.index,
      result.destination.index
    );

    dispatch(positionActions.setDataList(items));
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(provided) => (
          <ul
            className={`w-[300px] flex-start items-start flex-col overflow-hidden scrollbar mb-2 ${className}`}
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {positions.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided, snapshot) => (
                  <li
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={getItemStyle(
                      snapshot.isDragging,
                      provided.draggableProps.style
                    )}
                  >
                    <ItemPosition
                      key={item.id}
                      position={item}
                      handleActiveCard={handleActiveCard}
                      isActive={item.id === activeCurrentIdPosition}
                    />
                  </li>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default ListPosition;
