const Player = require("../models/Player")

// Controller functions, separated from routes

const getAll = (req, res) => {
    Player.find({}).then(Player=>{
     res.json(Player)
})
};

const findByName = (req,res) => {
  Player.find({Player:req.params.playerName}).then(name=>{
      res.json(name)
  })
};

const findById = (req, res) => {
  Player.find({id:req.params.id}).then(id => {
    res.json(id)
  })
}

const create = (req, res) => {
    Player.create(req.body)
    .then((Player) => {
      res.json(Player);
    });
  };

const update = (req, res) => {
  Player.findByIdAndUpdate(req.params.Player, req.body).then(newPlayer => res.json(newPlayer));
}

const updateByName = (req, res) => {
  Player.findOneAndUpdate({ dish:req.params.playerName }, req.body, {new: true}).then(newPlayer => res.json(newPlayer));
}

const deleteOne = (req, res) => {
  Player.findByIdAndDelete(req.params.Player).then(newPlayer => {
      res.json(newPlayer);
  });
}
  
module.exports = {
  getAll,
  findById,
  create,
  update,
  deleteOne,
  findByName,
  updateByName
}