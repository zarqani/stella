const express = require("express");
const season = express.Router();
const cors = require("cors");

const Season = require("../models/season");
const SeasonFilm = require("../models/season_film");
season.use(cors());

console.log(Season, "Season");

season.post("/", async (req, res) => {
  console.log(req, "req");
  const today = new Date();
  const data = {
    title: req.body.title,
    createdAt: today,
    updatedAt: today,
  };

  Season.create(data)
    .then((item) => {
      res.send(item);
    })
    .catch((err) => {
      res.send("error: " + err);
    });
});

season.get("/", async (req, res) => {
  const data = await Season.findAll();
  res.send(data);
});

season.get(`/films/:id`, async (req, res) => {
  const data = await SeasonFilm.findOne({
    where: {
      seasonID: req.params.id,
    },
  });
  res.send(data);
});

season.get(`/:id`, async (req, res) => {
  const data = await Season.findOne({
    where: {
      id: req.params.id,
    },
  });
  res.send(data);
});

season.put(`/:id`, (req, res) => {
  const today = new Date();
  const data = {
    title: req.body.title,
    updatedAt: today,
  };
  Season.update(data, {
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

season.delete(`/:id`, async (req, res) => {
  const data = await Season.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.json(data);
});

module.exports = season;
