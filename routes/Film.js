const express = require("express");
const film = express.Router();
const cors = require("cors");

const Film = require("../models/film");
const FilmpeopleFilm = require("../models/filmpeople_film");
const CategoryFilm = require("../models/category_film");
film.use(cors());

console.log(Film, "Film");

film.post("/", async (req, res) => {
  console.log(req, "req");
  const today = new Date();
  const data = {
    title: req.body.title,
    subtitle: req.body.subtitle,
    ages: req.body.ages,
    video: req.body.video,
    thumbnail: req.body.thumbnail,
    trailer: req.body.trailer,
    description: req.body.description,
    rate: req.body.rate,
    type: req.body.type,
    manufacturingCountry: req.body.manufacturingCountry,
    metas: req.body.metas,
    time: req.body.time,
    createdAt: today,
    updatedAt: today,
  };

  Film.create(data)
    .then((item) => {
      if (req.body.filmpeople && req.body.filmpeople.length > 0) {
        req.body.filmpeople.map((itemId) => {
          FilmpeopleFilm.create({
            filmID: item.id,
            filmPeopleID: Number(itemId),
            createdAt: today,
            updatedAt: today,
          });
        });
      }
      if (req.body.category && req.body.category.length > 0) {
        req.body.category.map((itemId) => {
          CategoryFilm.create({
            filmID: item.id,
            categoryID: Number(itemId),
            createdAt: today,
            updatedAt: today,
          });
        });
      }
      res.send(item);
    })
    .catch((err) => {
      res.send("error: " + err);
    });
});

film.get("/", async (req, res) => {
  const data = await Film.findAll();
  res.send(data);
});

film.get("/filmpeople/:id", async (req, res) => {
  const data = await FilmpeopleFilm.findAll({
    where: {
      filmID: req.params.id,
    },
  });
  res.send(data);
});

film.get("/season/:id", async (req, res) => {
  const data = await FilmpeopleFilm.findAll({
    where: {
      seasonID: req.params.id,
    },
  });
  res.send(data);
});

film.get(`/:id`, async (req, res) => {
  const data = await Film.findOne({
    where: {
      id: req.params.id,
    },
  });
  res.send(data);
});

film.put(`/:id`, (req, res) => {
  const today = new Date();
  const data = {
    title: req.body.title,
    subtitle: req.body.subtitle,
    ages: req.body.ages,
    video: req.body.video,
    thumbnail: req.body.thumbnail,
    trailer: req.body.trailer,
    description: req.body.description,
    rate: req.body.rate,
    type: req.body.type,
    manufacturingCountry: req.body.manufacturingCountry,
    metas: req.body.metas,
    time: req.body.time,
    updatedAt: today,
  };
  Film.update(data, {
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

film.delete(`/:id`, async (req, res) => {
  const data = await Film.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.json(data);
});

module.exports = film;
