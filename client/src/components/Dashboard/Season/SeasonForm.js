import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import InputText from "../../Form/InputText";
import TextareaField from "../../Form/TextareaField";
import InputFile from "../../Form/InputFile";
import { messageValidator } from "../../../modules/static";
import { postUpload } from "../../../api/Upload";

const SeasonForm = (props) => {
  console.log(props.initialValues, "props.initialValues");
  const [files, setFiles] = React.useState({});

  const handleChange = (e) => {
    const name = e.target.name;
    postUpload(e.target.files[0]).then((res) => {
      setFiles((prevFiles) => ({
        ...prevFiles,
        [name]: res.url,
      }));
    });
  };

  return (
    <Formik
      initialValues={
        props.initialValues
          ? props.initialValues
          : {
              title: "",
            }
      }
      validationSchema={Yup.object({
        title: Yup.string().required(messageValidator.require),
      })}
      onSubmit={(values) => {
        if ("function" === typeof props.onSubmitForm) {
          props.onSubmitForm(values);
        }
      }}
    >
      <Form>
        <div className="form-group mb-3">
          <InputText
            type="text"
            name="title"
            placeholder="نام"
            icon="fa fa-pencil"
          />
        </div>
        <div className="text-left">
          <button type="submit" className="btn btn-primary">
            ثبت اطلاعات
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default SeasonForm;
