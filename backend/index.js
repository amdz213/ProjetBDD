const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const statRoute = require("./routes/stats");
const commentRoute = require("./routes/comments");
const multer = require("multer");
const path = require("path");

dotenv.config();
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "/images")));

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify:true
  })
  .then(console.log("Connexion a MongoDB"))
  .catch((err) => console.log(err));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("fichier"), (req, res) => {
  res.status(200).json("ficher modifier");
});

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/stats", statRoute);
app.use("/api/posts", postRoute);
app.use("/api/comments", commentRoute);

app.listen("5000", () => {
  console.log("Backend en cours de process.");
});
