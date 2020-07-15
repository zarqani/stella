import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import InputText from "../Form/InputText";
import { messageValidator } from "../../modules/static";

const LoginForm = (props) => {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email(messageValidator.email)
          .required(messageValidator.require),
        password: Yup.string().required(messageValidator.require),
      })}
      onSubmit={(values, { setSubmitting }) => {
        if ("function" === typeof props.onSubmitForm) {
          props.onSubmitForm(values);
        }
      }}
    >
      <Form>
        <div className="form-group mb-3">
          <InputText
            type="email"
            name="email"
            placeholder="ایمیل"
            icon="ni ni-email-83"
          />
        </div>
        <div className="form-group focused">
          <InputText
            type="password"
            name="password"
            placeholder="رمز عبور"
            icon="ni ni-lock-circle-open"
          />
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary my-4">
            ورود
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default LoginForm;
