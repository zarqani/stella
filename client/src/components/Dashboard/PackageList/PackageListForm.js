import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import InputText from "../../Form/InputText";
import TextareaField from "../../Form/TextareaField";
import SelectField from "../../Form/SelectField";
import { messageValidator } from "../../../modules/static";

const PackageListForm = (props) => {
  console.log(props.initialValues, "props.initialValues");

  return (
    <Formik
      initialValues={
        props.initialValues
          ? props.initialValues
          : {
              title: "",
              description: "",
              date: "",
              dateType: "",
              price: "",
            }
      }
      validationSchema={Yup.object({
        title: Yup.string().required(messageValidator.require),
        description: Yup.string().required(messageValidator.require),
        date: Yup.number().required(messageValidator.require),
        dateType: Yup.string().required(messageValidator.require),
        price: Yup.number().required(messageValidator.require),
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
            placeholder="عنوان"
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
            type="number"
            name="date"
            placeholder="مهلت اشتراک"
            icon="fa fa-pencil"
          />
        </div>
        <div className="form-group mb-3">
          <SelectField
            options={[
              { value: "year", label: "سال" },
              { value: "month", label: "ماه" },
              { value: "day", label: "روز" },
            ]}
            name="dateType"
            placeholder="نوع"
            icon="ni ni-lock-circle-open"
          />
        </div>
        <div className="form-group mb-3">
          <InputText
            type="number"
            name="price"
            placeholder="قیمت"
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

export default PackageListForm;
