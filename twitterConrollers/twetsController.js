const Twet = require("../twitterModels/twetsModel");


module.exports.twetController = {
  postTwetController: (req, res) => {
    Twet.create({
      name: req.body.name,
      text: req.body.text,
  
    })
      .then(() => {
        res.json("Твит добавлен");
      })
      .catch(() => {
        res.json("Ошибка при добавление твита");
      });
  },

  deleteTwetController: (req, res) => {
    Twet.findByIdAndRemove(req.params.id)
      .then(() => {
        res.json("Твит удален");
      })
      .catch(() => {
        res.json("Ошибка при удалени твита");
      });
  },

  patchTwetController: (req, res) => {
    Twet.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      text: req.body.text,
      $push: {likes: req.body.likes},
      comment: req.body.comment
    }, {new: true})
      .then((data) => {
        res.json(data);
      })
      .catch(() => {
        res.json("Ошибка при изменение твита");
      });
  },

  getTwitController: (req, res) => {
    Twet.find().populate("comment")
      .then((data) => {
        res.json(data);
      })
      .catch(() => {
        res.json("Ошибка при выводе твита");
      });
  },

  getTwitIdController: (req, res) => {
    Twet.findById(req.params.id).populate("comment")
      .then((data) => {
        res.json(data)
      })
      .catch(() => {
        res.json("Ошибка при выводе твита");
      });
  },
};


 