const router = require("express").Router();
import Article from "../models/Article";

router.post("/", (req, res, next) => {
  const thing = new Article({
    title: req.body.title,
    content: req.body.content,
    publication_date: req.body.publication_date,
    publication_state: req.body.publication_state,
    userId: req.body.userId,
    number_of_views: req.body.number_of_views,
  });
  thing
    .save()
    .then(() => {
      res.status(201).json({
        message: "Post saved successfully!",
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
});

router.get("/:id", (req, res, next) => {
  Article.findOne({
    _id: req.params.id,
  })
    .then((thing) => {
      res.status(200).json(thing);
    })
    .catch((error) => {
      res.status(404).json({
        error: error,
      });
    });
});

router.put("/:id", (req, res, next) => {
  const thing = new Article({
    title: req.body.title,
    content: req.body.content,
    publication_date: req.body.publication_date,
    publication_state: req.body.publication_state,
    userId: req.body.userId,
    number_of_views: req.body.number_of_views,
  });
  Article.updateOne({ _id: req.params.id }, thing)
    .then(() => {
      res.status(201).json({
        message: "Article updated successfully!",
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
});

router.delete("/:id", (req, res, next) => {
  Article.deleteOne({ _id: req.params.id })
    .then(() => {
      res.status(200).json({
        message: "Deleted!",
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
});

router.get("/" + "", (req, res, next) => {
  Article.find()
    .then((things) => {
      res.status(200).json(things);
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
});

//module.exports = router; //ne reconnait pas le module comme un Router alors que configuration et import des modules correcte
//à la base exports default router
