import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import InputText from "../../Form/InputText";
import TextareaField from "../../Form/TextareaField";
import InputFile from "../../Form/InputFile";
import { messageValidator } from "../../../modules/static";
import { postUpload } from "../../../api/Upload";

const FilmpeopleForm = (props) => {
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
              name: "",
              description: "",
              role: "",
              thumbnail: "",
            }
      }
      validationSchema={Yup.object({
        name: Yup.string().required(messageValidator.require),
        role: Yup.string().required(messageValidator.require),
      })}
      onSubmit={(values) => {
        if ("function" === typeof props.onSubmitForm) {
          props.onSubmitForm({ ...values, ...files });
        }
      }}
    >
      <Form>
        <div className="form-group mb-3">
          <InputText
            type="text"
            name="name"
            placeholder="نام و نام خانوادگی"
            icon="fa fa-pencil"
          />
        </div>
        <div className="form-group mb-3">
          <TextareaField
            name="description"
            placeholder="توضیحات"
            icon="fa fa-pencil"
            rows="3"
          />
        </div>
        <div className="form-group mb-3">
          <InputText
            type="text"
            name="role"
            placeholder="نقش"
            icon="fa fa-pencil"
          />
        </div>
        <div className="form-group mb-3">
          <InputFile
            name="thumbnail"
            label="عکس شاخص"
            onChange={handleChange}
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

export default FilmpeopleForm;
