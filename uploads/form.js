import React from "react";
import { useEffect, useState } from "react";
import { Formik } from "formik";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import * as yup from "yup";
import "./PhotoForm.css";
import { getPhotos, addPhoto, editPhoto } from "./requests";
import { observer } from "mobx-react";
const schema = yup.object({
  name: yup.string().required("Name is required"),
  description: yup.string().required("Description is required"),
});
function PhotoForm({ photosStore, edit, selectedPhoto, onSave }) {
  const fileUpload = React.createRef();
  const [photo, setPhoto] = useState(null);
  const [fileName, setFileName] = useState("");
  const getAllPhotos = async () => {
    const response = await getPhotos();
    photosStore.setPhotos(response.data);
  };
  const handleSubmit = async (evt) => {
    const isValid = await schema.validate(evt);
    if (!isValid) {
      return;
    }
    try {
      let bodyFormData = new FormData();
      if (!edit) {
        bodyFormData.set("name", evt.name);
        bodyFormData.set("description", evt.description);
        bodyFormData.append("photo", photo);
        await addPhoto(bodyFormData);
      } else {
        bodyFormData.set("id", selectedPhoto.id);
        bodyFormData.set("name", evt.name);
        bodyFormData.set("description", evt.description);
        if (photo) {
          bodyFormData.append("photo", photo);
        }
        await editPhoto(bodyFormData);
      }
    } catch (error) {
      alert("Upload must be an image");
    }
    await getAllPhotos();
    onSave();
  };
  const setFile = (evt) => {
    setPhoto(evt.target.files[0]);
    setFileName(evt.target.files[0].name);
  };
  const openUploadDialog = () => {
    fileUpload.current.click();
  };
  return (
    <div>
      <Formik
        validationSchema={schema}
        onSubmit={handleSubmit}
        initialValues={edit ? selectedPhoto : {}}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          touched,
          isInvalid,
          errors,
        }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Form.Row>
              <Form.Group as={Col} md="12" controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={values.name || ""}
                  onChange={handleChange}
                  isInvalid={touched.name && errors.name}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.name}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="12" controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type="text"
                  name="description"
                  placeholder="Description"
                  value={values.description || ""}
                  onChange={handleChange}
                  isInvalid={touched.description && errors.description}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.description}
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="12" controlId="photo">
                <input
                  type="file"
                  ref={fileUpload}
                  name="photo"
                  style={{ display: "none" }}
                  onChange={setFile}
                />
                <div className="file-box">
                  <Button type="button" onClick={openUploadDialog}>
                    Upload Photo
                  </Button>
                  <span style={{ paddingLeft: "10px", marginTop: "5px" }}>
                    {fileName}
                  </span>
                </div>
              </Form.Group>
            </Form.Row>
            <Button type="submit" style={{ marginRight: "10px" }}>
              Save
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
export default observer(PhotoForm);
