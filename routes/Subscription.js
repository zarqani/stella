const express = require("express");
const subscription = express.Router();
const cors = require("cors");

const Subscription = require("../models/Subscription");
subscription.use(cors());

console.log(Subscription, "Subscription");

subscription.post("/", async (req, res) => {
  console.log(req, "req");
  const today = new Date();
  const data = {
    title: req.body.title,
    description: req.body.description,
    date: req.body.date,
    dateType: req.body.dateType,
    price: req.body.price,
    createdAt: today,
  };

  Subscription.create(data)
    .then((item) => {
      res.send(item);
    })
    .catch((err) => {
      res.send("error: " + err);
    });
});

subscription.get("/", async (req, res) => {
  const data = await Subscription.findAll();
  res.send(data);
});

subscription.get(`/:id`, async (req, res) => {
  const data = await Subscription.findOne({
    where: {
      id: req.params.id,
    },
  });
  res.send(data);
});

subscription.put(`/:id`, (req, res) => {
  const today = new Date();
  const data = {
    title: req.body.title,
    description: req.body.description,
    date: req.body.date,
    dateType: req.body.dateType,
    price: req.body.price,
    updateAt: today,
  };
  Subscription.update(data, {
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

subscription.delete(`/:id`, async (req, res) => {
  const data = await Subscription.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.json(data);
});

module.exports = subscription;
