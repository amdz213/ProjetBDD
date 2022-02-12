const router = require("express").Router();
const Comment = require("../models/Comments");

router.post("/", async (req, res) => {
  const newCat = new Comment(req.body);

  try {
    const savedCat = await newCat.save();
    res.status(200).json(savedCat);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", async (req, res) => {
    try {
      const cats = await Comment.find();
      res.status(200).json(cats);

    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;