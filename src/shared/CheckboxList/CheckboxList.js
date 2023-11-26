import React, { memo } from "react";
import { CheckboxItem } from "../CheckboxItem/CheckboxItem";

/**
 * CheckboxList component for displaying a list of checkboxes.
 *
 * @component
 *
 * @param {Object} props - The properties of the CheckboxList component.
 * @param {string} props.name - The name of the checkbox list.
 * @param {string[]} props.dutiesItems - An array of duty items for the checkboxes.
 * @param {Object} props.activeObject - The active object containing permits.
 * @param {function} props.handlePermitToggle - The function to be called when a checkbox is toggled.
 *
 * @returns {React.Component} Returns the CheckboxList component.
 */
export const CheckboxList = memo(
  ({ name, dutiesItems, activeObject, handlePermitToggle }) => {
    return (
      <div className=" bg-dark mb-3">
        <h4 className="text-xs leading-[18px] font-medium text-secondary mb-1">
          {name}
        </h4>
        <ul className="flex flex-col gap-2">
          {dutiesItems?.map((el) => (
            <CheckboxItem
              label={el}
              key={el}
              isChecked={activeObject.permits.includes(el)}
              handlePermitToggle={handlePermitToggle}
            />
          ))}
        </ul>
      </div>
    );
  }
);
