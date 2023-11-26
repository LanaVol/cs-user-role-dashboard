import React, { memo } from "react";
import { CheckboxItem } from "../CheckboxItem/CheckboxItem";

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
