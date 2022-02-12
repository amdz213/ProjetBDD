const router = require("express").Router();
const Stat = require("../models/Stats");
const bcrypt = require("bcrypt");

//MISE A JOUR
router.put("/:id", async (req, res) => {
  if (req.body.StatId === req.params.id) {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    try {
      const updatedStat = await Stat.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedStat);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(401).json("Vous pouvez modifiez votre compte uniquement!");
  }
});

//SUPPRIMER
router.delete("/:id", async (req, res) => {
  if (req.body.StatId === req.params.id) {
    try {
      const Stat = await Stat.findById(req.params.id);
      try {
        await Post.deleteMany({ Statname: Stat.Statname });
        await Stat.findByIdAndDelete(req.params.id);
        res.status(200).json("Statistique supprimer.");
      } catch (err) {
        res.status(500).json(err);
      }
    } catch (err) {
      res.status(404).json("Statistique introuvable!");
    }
  } else {
    res.status(401).json("Vous pouvez supprimez votre compte uniquement!");
  }
});

//OBTENIR Stat
router.get("/:id", async (req, res) => {
  try {
    const Stat = await Stat.findById(req.params.id);
    const { password, ...others } = Stat._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
