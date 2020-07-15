import React, { useState, useEffect } from "react";
import { useField, useFormikContext } from "formik";
import { postUpload } from "../../api/Upload";

const InputFile = ({ label, form, ...props }) => {
  const [field, meta] = useField(props);
  // const [file, setFile] = useState(null);
  // const [url, setUrl] = useState(null);
  // const [filename, setFilename] = useState("Choose File");

  // useEffect(() => {
  //   //   if (file) {
  //   //     const data = new FormData();
  //   //     data.append("file", file);
  //   //     console.log(data, "data111111111111");
  //   //     data.set("name", file.name);
  //   //     postUpload(data).then((res) => {
  //   //       console.log(res, "res");
  //   //       // setFilename(`${API_URL}${res.url}`);
  //   //       //   return res.url;
  //   //       setUrl(res.url);
  //   //       // setFile(e.target.files[0]);
  //   //     });
  //   //   }
  //   setFieldValue("thumbnail", "jjjj");
  // });

  // const {
  //   values: { textA, textB },
  //   touched,
  //   setFieldValue,
  // } = useFormikContext();

  // const onChangeHandler = (e) => {
  //   setFile(e.target.files[0]);
  //   const data = new FormData();
  //   data.append("file", e.target.files[0]);
  //   console.log(data, "data111111111111");
  //   data.set("name", e.target.files[0].name);
  //   postUpload(data).then((res) => {
  //     console.log(res, "res");
  //     // setFilename(`${API_URL}${res.url}`);
  //     //   return res.url;
  //     setUrl(res.url);
  //     // onChange();
  //     // props.name =
  //     // field.value = res.url;
  //     // props.onChange("thumbnail", res.url);
  //     // setFieldValue("file", event.currentTarget.files[0]);
  //     // setFieldValue("thumbnail", "jjjj");
  //   });

  //   // return res.url;
  // };

  // const onChange = (e) => {
  //   console.log(e.target.value, ".target.value");
  //   e.target.value = "u9ouo9";
  // };

  // console.log(form, "form");
  // console.log(props, "props");

  return (
    <>
      {label && <label htmlFor={props.id || props.name}>{label}</label>}
      <div className="input-group input-group-alternative">
        {props.icon && (
          <div className="input-group-prepend">
            <span className="input-group-text">
              <i className={props.icon}></i>
            </span>
          </div>
        )}
        <input
          {...field}
          {...props}
          // onChange={onChangeHandler}
          // value={url}
          accept="image/* audio/* video/*"
          type="file"
          class="form-control-file"
          // name=""
        />
        {/* <input
          className="form-control"
          {...field}
          {...props}
          onChange={onChange}
        /> */}
      </div>
      {meta.touched && meta.error ? (
        <div className="text-danger text-right">
          <small>{meta.error}</small>
        </div>
      ) : null}
    </>
  );
};

export default InputFile;
