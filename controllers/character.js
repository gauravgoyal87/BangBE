const Character = require("../models/Character")

// Controller functions, separated from routes

const getAll = (req, res) => {
    Character.find({}).then(Character=>{
     res.json(Character)
})
};

const findByName = (req,res) => {
  Character.find({Character:req.params.charName}).then(name=>{
      res.json(name)
  })
};

const findById = (req, res) => {
  Character.find({id:req.params.id}).then(id => {
    res.json(id)
  })
}

const create = (req, res) => {
    Character.create(req.body)
    .then((Character) => {
      res.json(Character);
    });
  };

const update = (req, res) => {
  Character.findByIdAndUpdate(req.params.Character, req.body).then(newCharacter => res.json(newCharacter));
}

const updateByName = (req, res) => {
  Character.findOneAndUpdate({ dish:req.params.charName }, req.body, {new: true}).then(newCharacter => res.json(newCharacter));
}

const deleteOne = (req, res) => {
  Character.findByIdAndDelete(req.params.Character).then(newCharacter => {
      res.json(newCharacter);
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