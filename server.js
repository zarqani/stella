const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");
const port = process.env.PORT || 3001;

const router = express.Router();

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/", router);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
console.log(path.join(__dirname, "uploads"), "sssssssssssssssss");
// app.use(express.static(path.join(__dirname, "uploads")));

router.get("/", function (req, res) {
  console.log("jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjdd");
});

const Category = require("./routes/Category");
const Comment = require("./routes/Comment");
const Factor = require("./routes/Factor");
const Film = require("./routes/Film");
const Filmpeople = require("./routes/Filmpeople");
const Rate = require("./routes/Rate");
const Season = require("./routes/Season");
const Subscription = require("./routes/Subscription");
const Upload = require("./routes/Upload");
const Users = require("./routes/Users");

app.use("/category", Category);
app.use("/comment", Comment);
app.use("/factor", Factor);
app.use("/film", Film);
app.use("/filmpeople", Filmpeople);
app.use("/rate", Rate);
app.use("/season", Season);
app.use("/subscriptions", Subscription);
app.use("/upload", Upload);
app.use("/users", Users);

// app.use("/api", router);

app.listen(port, () => {
  console.log("server is running on port " + port);
});
