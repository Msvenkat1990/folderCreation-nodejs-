const express = require("express");
const app = express();
const multer = require("multer");
const store = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./fileSave");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "" + file.originalname);
  },
});
const fileSave = multer({
  storage: store,
});
app.post("/upload", fileSave.single("image"), (req, res) => {
  try {
    res.json("file upload successfully");
  } catch (error) {
    res.json(error);
  }
});

app.listen(3000, () => {
  console.log("Server running port at:3000");
});
