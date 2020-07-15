const express = require("express");
const path = require("path");
const upload = express.Router();
const multer = require("multer");
const cors = require("cors");
// app.use('/static', express.static(path.join(__dirname, 'public')))
// console.log(`${process.cwd()}\\client\\upload`, "__dirname");
const createName = (name) => {
  const date = `${Date.now()}`;
  return date.slice(0, 8) + "-" + name;
};
console.log(path.join(process.cwd(), "uploads"));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(process.cwd(), "uploads"));
  },
  filename: function (req, file, cb) {
    cb(null, createName(file.originalname));
  },
});

//var uploadFile = multer({ storage: storage }).single("file");
const uploadFile = multer({
  storage,
});

const Upload = require("../models/upload");
upload.use(cors());

console.log(Upload, "Upload");

// upload.post("/", uploadFile.single("file"), async (req, res, next) => {
//   try {
//     const path = req.file.path;
//     const { name } = req.body; //, description
//     const entry = await Upload.create({
//       name: createName(name),
//       // description,
//       url: `uploads/${createName(name)}`,
//     });
//     res.json(entry);
//   } catch (ex) {
//     res.status(400).send({ error: ex });
//   }
// });

upload.post("/", uploadFile.single("file"), async (req, res, next) => {
  const today = new Date();
  const data = {
    name: createName(req.body.name),
    type: req.file.type,
    data: req.body.data,
    url: `/uploads/${createName(req.body.name)}`,
    createdAt: today,
    updatedAt: today,
  };
  console.log(data, "data");
  Upload.create(data)
    .then((item) => {
      console.log(item, "item");
      res.send(item);
    })
    .catch((err) => {
      res.send("error: " + err);
    });
});

upload.get("/", async (req, res) => {
  const data = await Upload.findAll();
  res.send(data);
});

upload.get(`/:id`, async (req, res) => {
  const data = await Upload.findOne({
    where: {
      id: req.params.id,
    },
  });
  res.send(data);
});

// upload.get(`/:name`, async (req, res) => {
//   const data = await Upload.findOne({
//     where: {
//       name: req.params.name,
//     },
//   });
//   res.send(data);
// });

upload.put(`/:id`, (req, res) => {
  const today = new Date();
  const data = {
    name: req.body.name,
    type: req.body.type,
    data: req.body.data,
    url: req.body.url,
    updatedAt: today,
  };
  Upload.update(data, {
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

upload.delete(`/:id`, async (req, res) => {
  const data = await Upload.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.json(data);
});

module.exports = upload;
