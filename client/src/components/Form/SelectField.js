import React from "react";
import { useField } from "formik";

const SelectField = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and also replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
    <>
      {label && <label htmlFor={props.id || props.name}>{label}</label>}

      {/* <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null} */}

      <div className="input-group input-group-alternative">
        {props.icon && (
          <div className="input-group-prepend">
            <span className="input-group-text">
              <i className={props.icon}></i>
            </span>
          </div>
        )}
        <select className="form-control" {...field} {...props}>
          {props.options &&
            props.options.length > 0 &&
            props.options.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
        </select>
      </div>
      {meta.touched && meta.error ? (
        <div className="text-danger text-right">
          <small>{meta.error}</small>
        </div>
      ) : null}
    </>
  );
};

export default SelectField;
