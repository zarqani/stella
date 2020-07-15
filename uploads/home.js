import React, { useState, useEffect } from "react";
import * as yup from "yup";
import "./HomePage.css";
import Modal from "react-bootstrap/Modal";
import PhotoForm from "./PhotoForm";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { observer } from "mobx-react";
import { getPhotos, deletePhoto, APIURL } from "./requests";
function HomePage({ photosStore }) {
  const [show, setShow] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [initialized, setInitialized] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState({});
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleEditClose = () => setShowEdit(false);
  const handleEditShow = (photo) => {
    setSelectedPhoto(photo);
    setShowEdit(true);
  };
  const getAllPhotos = async () => {
    const response = await getPhotos();
    photosStore.setPhotos(response.data);
  };
  const deletePhotoById = async (id) => {
    await deletePhoto(id);
    await getAllPhotos();
  };
  const onSave = () => {
    setShow(false);
    setShowEdit(false);
  };
  useEffect(() => {
    if (!initialized) {
      getAllPhotos();
      setInitialized(true);
    }
  });
  return (
    <div className="home-page">
      <h1>Photos</h1>
      <Button variant="primary" onClick={handleShow}>
        Add Photo
      </Button>
      <Table striped bordered hover style={{ marginTop: 10 }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Photo</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {photosStore.photos.map((p, i) => {
            const splitPath = p.photoPath.split("\\");
            const path = splitPath[splitPath.length - 1];
            return (
              <tr key={i}>
                <td>{p.name}</td>
                <td>{p.description}</td>
                <td>
                  <img src={`${APIURL}/${path}`} style={{ width: 200 }} />
                </td>
                <td>
                  <Button onClick={handleEditShow.bind(this, p)}>Edit</Button>
                </td>
                <td>
                  <Button onClick={deletePhotoById.bind(this, p.id)}>
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Photo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <PhotoForm
            edit={false}
            photosStore={photosStore}
            onSave={onSave.bind(this)}
          />
        </Modal.Body>
      </Modal>
      <Modal show={showEdit} onHide={handleEditClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Photo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <PhotoForm
            edit={true}
            photosStore={photosStore}
            selectedPhoto={selectedPhoto}
            onSave={onSave.bind(this)}
          />
        </Modal.Body>
      </Modal>
    </div>
  );
}
export default observer(HomePage);
