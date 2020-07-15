import React, { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import InputText from "../../Form/InputText";
import InputFile from "../../Form/InputFile";
import TextareaField from "../../Form/TextareaField";
import SelectField from "../../Form/SelectField";
import { messageValidator } from "../../../modules/static";
import { API_URL } from "../../../env";
import { postUpload } from "../../../api/Upload";
import { getFilmpeoples } from "../../../api/Filmpeople";
import { getCategories } from "../../../api/Category";

const FilmForm = (props) => {
  // console.log(props.initialValues, "props.initialValues");
  const [files, setFiles] = React.useState({});
  const [filmpeople, setFilmpeople] = React.useState([]);
  const [categories, setCategories] = React.useState([]);

  const getFilmpeoplesOption = async () => {
    await getFilmpeoples().then((res) => {
      console.log(res, "res");
      const data = res.map((item) => ({ value: item.id, label: item.name }));
      setFilmpeople(data);
    });
  };

  const getCategoriesOption = async () => {
    await getCategories().then((res) => {
      console.log(res, "res");
      const data = res.map((item) => ({ value: item.id, label: item.title }));
      setCategories(data);
    });
  };

  useEffect(() => {
    if (filmpeople.length === 0) {
      getFilmpeoplesOption();
    }
    if (categories.length === 0) {
      getCategoriesOption();
    }
  });
  console.log(filmpeople, "filmpeople");
  // [
  //   { value: "Cinematic", label: "سینمایی" },
  //   { value: "Serial", label: "سریال" },
  // ];

  const handleChange = (e) => {
    const name = e.target.name;
    postUpload(e.target.files[0]).then((res) => {
      setFiles((prevFiles) => ({
        ...prevFiles,
        [name]: res.url,
      }));
    });
  };

  // console.log(files, "filesfiles");

  return (
    <Formik
      initialValues={
        props.initialValues
          ? props.initialValues
          : {
              title: "",
              subtitle: "",
              ages: "",
              video: "",
              thumbnail: "",
              trailer: "",
              description: "",
              type: "",
              manufacturingCountry: "",
              metas: "",
              time: "",
              filmpeople: [],
              category: [],
            }
      }
      validationSchema={Yup.object({
        title: Yup.string().required(messageValidator.require),
        // video: Yup.string().required(messageValidator.require),
        // thumbnail: Yup.string().required(messageValidator.require),
        description: Yup.string().required(messageValidator.require),
        type: Yup.string().required(messageValidator.require),
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
            name="title"
            placeholder="عنوان"
            icon="fa fa-pencil"
          />
        </div>
        <div className="form-group mb-3">
          <InputText
            type="text"
            name="subtitle"
            placeholder="عنوان فرعی"
            icon="fa fa-pencil"
          />
        </div>
        <div className="form-group mb-3">
          <InputText
            type="text"
            name="ages"
            placeholder="رده سنی"
            icon="fa fa-pencil"
          />
        </div>
        <div className="form-group mb-3">
          <InputText
            type="text"
            name="manufacturingCountry"
            placeholder="کشور سازنده"
            icon="fa fa-pencil"
          />
        </div>
        <div className="form-group mb-3">
          <InputText
            type="text"
            name="metas"
            placeholder="متاها"
            icon="fa fa-pencil"
          />
        </div>
        <div className="form-group mb-3">
          <InputText
            type="text"
            name="time"
            placeholder="مدت زمان فیلم"
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
        <div className="form-group mb-3">
          <InputFile name="video" label="ویدیو" onChange={handleChange} />
        </div>
        <div className="form-group mb-3">
          <InputFile name="trailer" label="تریلر" onChange={handleChange} />
        </div>
        <div className="form-group mb-3">
          <SelectField
            options={[
              { value: "Cinematic", label: "سینمایی" },
              { value: "Serial", label: "سریال" },
            ]}
            name="type"
            placeholder="نوع"
            icon="ni ni-lock-circle-open"
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
          <SelectField
            options={filmpeople}
            multiple
            name="filmpeople"
            placeholder="عوامل فیلم"
            icon="ni ni-lock-circle-open"
          />
        </div>
        <div className="form-group mb-3">
          <SelectField
            options={categories}
            multiple
            name="category"
            placeholder="دسته بندی"
            icon="ni ni-lock-circle-open"
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

export default FilmForm;
