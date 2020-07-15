const express = require("express");
const filmpeople = express.Router();
const cors = require("cors");

const Filmpeople = require("../models/filmpeople");
filmpeople.use(cors());

console.log(Filmpeople, "Filmpeople");

filmpeople.post("/", async (req, res) => {
  console.log(req, "req");
  const today = new Date();
  const data = {
    name: req.body.name,
    description: req.body.description,
    thumbnail: req.body.thumbnail,
    role: req.body.role,
    createdAt: today,
    updatedAt: today,
  };

  Filmpeople.create(data)
    .then((item) => {
      res.send(item);
    })
    .catch((err) => {
      res.send("error: " + err);
    });
});

filmpeople.get("/", async (req, res) => {
  const data = await Filmpeople.findAll();
  res.send(data);
});

filmpeople.get(`/:id`, async (req, res) => {
  const data = await Filmpeople.findOne({
    where: {
      id: req.params.id,
    },
  });
  res.send(data);
});

filmpeople.put(`/:id`, (req, res) => {
  const today = new Date();
  const data = {
    name: req.body.name,
    description: req.body.description,
    thumbnail: req.body.thumbnail,
    role: req.body.role,
    updatedAt: today,
  };
  Filmpeople.update(data, {
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

filmpeople.delete(`/:id`, async (req, res) => {
  const data = await Filmpeople.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.json(data);
});

module.exports = filmpeople;
