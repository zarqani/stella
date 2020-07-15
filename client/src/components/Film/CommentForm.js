import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import InputText from "../Form/InputText";
import TextareaField from "../Form/TextareaField";
import { messageValidator } from "../../modules/static";
import { postUpload } from "../../api/Upload";

const CommentForm = (props) => {
  return (
    <Formik
      initialValues={
        props.initialValues
          ? props.initialValues
          : {
              title: "",
              description: "",
            }
      }
      validationSchema={Yup.object({
        title: Yup.string().required(messageValidator.require),
        description: Yup.string().required(messageValidator.require),
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
        <div className="form-group mb-3">
          <TextareaField
            name="description"
            placeholder="دیدگاه"
            icon="fa fa-pencil"
            rows="3"
          />
        </div>
        <div className="text-left">
          <button type="submit" className="btn btn-primary">
            ثبت نظر
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default CommentForm;
