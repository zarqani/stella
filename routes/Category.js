const express = require("express");
const category = express.Router();
const cors = require("cors");

const Category = require("../models/category");
const CategoryFilm = require("../models/category_film");
category.use(cors());

console.log(Category, "Category");

category.post("/", async (req, res) => {
  console.log(req, "req");
  const today = new Date();
  const data = {
    title: req.body.title,
    description: req.body.description,
    parentID: req.body.parentID,
    thumbnail: req.body.thumbnail,
    createdAt: today,
    updatedAt: today,
  };

  Category.create(data)
    .then((item) => {
      res.send(item);
    })
    .catch((err) => {
      res.send("error: " + err);
    });
});

category.get("/", async (req, res) => {
  const data = await Category.findAll();
  res.send(data);
});

category.get("/films/:id", async (req, res) => {
  const data = await CategoryFilm.findAll({
    where: {
      categoryID: req.params.id,
    },
  });
  console.log("*********************,", data);
  res.send(data);
});

category.get(`/:id`, async (req, res) => {
  const data = await Category.findOne({
    where: {
      id: req.params.id,
    },
  });
  res.send(data);
});

category.put(`/:id`, (req, res) => {
  const today = new Date();
  const data = {
    title: req.body.title,
    description: req.body.description,
    parentID: req.body.parentID,
    thumbnail: req.body.thumbnail,
    updatedAt: today,
  };
  Category.update(data, {
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

category.delete(`/:id`, async (req, res) => {
  const data = await Category.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.json(data);
});

module.exports = category;
