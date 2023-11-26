import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCurrentPositionId,
  getPositionData,
} from "../../providers/positions/selectors";
import { positionActions } from "../../providers/positions/positions.slice";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { ItemPosition } from "../../shared/ItemPosition/ItemPosition";

/**
 * ListPosition component representing the list of positions with drag-and-drop functionality.
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.className - Additional class name for styling.
 * @returns {JSX.Element} - The JSX for the ListPosition component.
 */
function ListPosition({ className }) {
  const positions = useSelector(getPositionData);
  const activeCurrentIdPosition = useSelector(getCurrentPositionId);
  const dispatch = useDispatch();

  /**
   * Handles the activation of a position card.
   * @function
   * @param {string} cardId - The ID of the clicked position card.
   */
  const handleActiveCard = useCallback(
    (cardId) => {
      dispatch(positionActions.setCurrentPositionId(cardId));
    },
    [dispatch]
  );

  /**
   * Reorders the list of positions after a drag-and-drop operation.
   * @function
   * @param {Array} list - The list of positions.
   * @param {number} startIndex - The index of the dragged item before the drop.
   * @param {number} endIndex - The index of the dragged item after the drop.
   * @returns {Array} - The reordered list of positions.
   */
  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const grid = 8;

  /**
   * Gets the style for the draggable item during drag-and-drop.
   * @function
   * @param {boolean} isDragging - Indicates whether the item is currently being dragged.
   * @param {Object} draggableStyle - The style object for the draggable item.
   * @returns {Object} - The combined style object.
   */
  const getItemStyle = (isDragging, draggableStyle) => ({
    userSelect: "none",
    margin: `0 0 ${grid}px 0`,
    ...draggableStyle,
  });

  /**
   * Handles the end of a drag-and-drop operation.
   * @function
   * @param {Object} result - The result object containing information about the drop.
   */
  const onDragEnd = (result) => {
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
            {!positions.length ? (
              <div className="w-full text-center max-w-[592px] p-4 bg-primary rounded-lg text-grey">
                Создайте новую должность
              </div>
            ) : (
              ""
            )}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default ListPosition;
