const express = require("express");
const comment = express.Router();
const cors = require("cors");

const Comment = require("../models/comment");
comment.use(cors());

console.log(Comment, "Comment");

comment.post("/", async (req, res) => {
  console.log(req, "req");
  const today = new Date();
  const data = {
    status: req.body.status,
    description: req.body.description,
    parentID: req.body.parentID,
    name: req.body.name,
    email: req.body.email,
    userID: req.body.userID,
    filmID: req.body.filmID,
    createdAt: today,
    updatedAt: today,
  };

  Comment.create(data)
    .then((item) => {
      res.send(item);
    })
    .catch((err) => {
      res.send("error: " + err);
    });
});

comment.get("/", async (req, res) => {
  const data = await Comment.findAll();
  res.send(data);
});

comment.get(`/:id`, async (req, res) => {
  const data = await Comment.findOne({
    where: {
      id: req.params.id,
    },
  });
  res.send(data);
});

comment.put(`/:id`, (req, res) => {
  const today = new Date();
  const data = {
    status: req.body.status,
    description: req.body.description,
    parentID: req.body.parentID,
    name: req.body.name,
    email: req.body.email,
    userID: req.body.userID,
    filmID: req.body.filmID,
    updatedAt: today,
  };
  Comment.update(data, {
    where: {
      id: req.params.id,
    },
  })
    .then((Response) => {
      if (Response) {
        res.send({ id: Number(req.params.id), ...data });
      } else {
        res.send("error");
      }
    })
    .catch((err) => {
      res.send("error: " + err);
    });
});

comment.delete(`/:id`, async (req, res) => {
  const data = await Comment.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.json(data);
});

module.exports = comment;
