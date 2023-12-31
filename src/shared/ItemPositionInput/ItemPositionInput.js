import { memo, useCallback } from "react";
import { useDispatch } from "react-redux";
import { Position } from "@/components/ListPosition/model/position";
import { positionActions } from "@/providers/positions/positions.slice";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "../Button/Button";
import { SvgCloseIcon, SvgSaveIcon } from "../Icons";

/**
 * ItemPositionInput component for creating a new position input form.
 *
 * @component
 *
 * @param {Object} props - The properties of the ItemPositionInput component.
 * @param {function} props.handleShowForm - The function to handle showing the form.
 *
 * @returns {React.Component} Returns the ItemPositionInput component.
 */
export const ItemPositionInput = memo((props) => {
  const { handleShowForm } = props;
  const dispatch = useDispatch();

  /**
   * Create a new position and dispatch the action.
   *
   * @param {Object} values - The form values containing name and salary.
   * @param {Object} formikHelpers - Formik helper functions (e.g., resetForm).
   */
  const createNewPosition = useCallback(
    ({ name, salary }, { resetForm }) => {
      dispatch(
        positionActions.addNewPosition({ ...new Position(name, salary) })
      );
      resetForm();
      handleShowForm();
    },
    [dispatch, handleShowForm]
  );

  // Validation schema for the form
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .matches(/^[A-Za-zА-Яа-я]+$/, "Only letters are allowed")
      .min(2, "Too short!")
      .max(12, "Must be 12 characters or less")
      .required("Required"),

    salary: Yup.string()
      .matches(/^\d+$/, "Only numbers")
      .min(1, "Password should be a minimum 1 symbol length")
      .max(5, "Must be 5 symbols or less")
      .required("Required"),
  });

  // Formik hook for handling form state and submission
  const formik = useFormik({
    initialValues: {
      name: "",
      salary: "",
    },
    validationSchema: validationSchema,
    onSubmit: createNewPosition,
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      autoComplete="off"
      className="absolute z-10 bottom-[110px] card hover:shadow-none cursor-auto flex-col gap-2 h-40 border-2 border-contrast1 py-12px"
    >
      <div className="relative">
        <label
          className="text-xs font-semibold leading-[16px] text-secondary"
          htmlFor="name"
        >
          Название
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className={`inputCard ${
            formik.touched.name && formik.errors.name ? "border-red" : ""
          }`}
          title="Enter only letters"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? (
          <div className="text-[10px] font-medium leading-[14px] text-red absolute top-1 right-0">
            {formik.errors.name}
          </div>
        ) : null}
      </div>

      <div className="w-full flex justify-between gap-1">
        <div className="relative">
          <label
            className="block text-xs font-semibold leading-[16px] text-secondary mb-1"
            htmlFor="salary"
          >
            Зарплата
          </label>
          <input
            type="text"
            id="salary"
            name="salary"
            className={`inputCard w-16 ${
              formik.touched.salary && formik.errors.salary ? "border-red" : ""
            }`}
            title="Enter only numbers"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.salary}
          />
          {formik.touched.salary && formik.errors.salary ? (
            <div className="text-[10px] font-medium leading-[14px] text-red absolute -bottom-3 left-0">
              {formik.errors.salary}
            </div>
          ) : null}
        </div>

        <div className="flex justify-between gap-1">
          <Button
            Component={<SvgSaveIcon />}
            type={"submit"}
            className={"py-2"}
          />
          <Button
            Component={<SvgCloseIcon />}
            onClick={handleShowForm}
            className={"py-2"}
          />
        </div>
      </div>
    </form>
  );
});
