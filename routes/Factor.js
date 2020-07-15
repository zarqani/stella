const express = require("express");
const factor = express.Router();
const cors = require("cors");

const Factor = require("../models/Factor");
factor.use(cors());

console.log(Factor, "Factor");

factor.post("/", async (req, res) => {
  console.log(req, "req");
  const today = new Date();
  const data = {
    status: req.body.status,
    price: req.body.price,
    subscriptionId: req.body.subscriptionId,
    subscriptionExpired: req.body.subscriptionExpired,
    userId: req.body.userId,
    created: today,
  };

  Factor.create(data)
    .then((item) => {
      res.send(item);
    })
    .catch((err) => {
      res.send("error: " + err);
    });
});

factor.get("/", async (req, res) => {
  const data = await Factor.findAll();
  res.send(data);
});

factor.get(`/:id`, async (req, res) => {
  const data = await Factor.findOne({
    where: {
      id: req.params.id,
    },
  });
  res.send(data);
});

factor.put(`/:id`, (req, res) => {
  const today = new Date();
  const data = {
    title: req.body.title,
    description: req.body.description,
    date: req.body.date,
    dateType: req.body.dateType,
    price: req.body.price,
    updateAt: today,
  };
  Factor.update(data, {
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

factor.delete(`/:id`, async (req, res) => {
  const data = await Factor.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.json(data);
});

module.exports = factor;
