var express = require("express");
var multer = require("multer");
var router = express.Router();
const models = require("../models");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, `${file.fieldname}_${+new Date()}.jpg`);
  },
});
const upload = multer({
  storage,
});
/* GET users listing. */
router.get("/", async (req, res, next) => {
  const photos = await models.Photo.findAll();
  res.json(photos);
});
router.post("/add", upload.single("photo"), async (req, res, next) => {
  try {
    const path = req.file.path;
    const { name, description } = req.body;
    const entry = await models.Photo.create({
      name,
      description,
      photoPath: path,
    });
    res.json(entry);
  } catch (ex) {
    res.status(400).send({ error: ex });
  }
});
router.put("/edit", upload.single("photo"), async (req, res, next) => {
  try {
    const path = req.file && req.file.path;
    const { id, name, description } = req.body;
    let params = {};
    if (path) {
      params = {
        name,
        description,
        photoPath: path,
      };
    } else {
      params = {
        name,
        description,
      };
    }
    const photo = await models.Photo.update(params, {
      where: {
        id,
      },
    });
    res.json(photo);
  } catch (ex) {
    res.status(400).send({ error: ex });
  }
});
router.delete("/delete/:id", async (req, res, next) => {
  const { id } = req.params;
  await models.Photo.destroy({
    where: {
      id,
    },
  });
  res.json({ deleted: id });
});
module.exports = router;
