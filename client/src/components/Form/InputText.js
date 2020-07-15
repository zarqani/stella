import React from "react";
import { useField } from "formik";

const InputText = ({ label, ...props }) => {
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
        <input className="form-control" {...field} {...props} />
      </div>
      {meta.touched && meta.error ? (
        <div className="text-danger text-right">
          <small>{meta.error}</small>
        </div>
      ) : null}
    </>
  );
};

export default InputText;
