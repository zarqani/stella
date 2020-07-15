const express = require("express");
const rate = express.Router();
const cors = require("cors");

const Rate = require("../models/rate");
rate.use(cors());

console.log(Rate, "Rate");

rate.post("/", async (req, res) => {
  console.log(req, "req");
  const today = new Date();
  const data = {
    userID: req.body.userID,
    rate: req.body.rate,
    enumeration: req.body.enumeration,
    enumerationID: req.body.enumerationID,
    createdAt: today,
    updatedAt: today,
  };

  Rate.create(data)
    .then((item) => {
      res.send(item);
    })
    .catch((err) => {
      res.send("error: " + err);
    });
});

rate.get("/", async (req, res) => {
  const data = await Rate.findAll();
  res.send(data);
});

rate.get(`/:id`, async (req, res) => {
  const data = await Rate.findOne({
    where: {
      id: req.params.id,
    },
  });
  res.send(data);
});

rate.put(`/:id`, (req, res) => {
  const today = new Date();
  const data = {
    userID: req.body.userID,
    rate: req.body.rate,
    enumeration: req.body.enumeration,
    enumerationID: req.body.enumerationID,
    updatedAt: today,
  };
  Rate.update(data, {
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

rate.delete(`/:id`, async (req, res) => {
  const data = await Rate.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.json(data);
});

module.exports = rate;
