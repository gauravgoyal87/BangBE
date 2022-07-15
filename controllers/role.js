const Role = require("../models/Role")

// Controller functions, separated from routes

const getAll = (req, res) => {
    Role.find({}).then(Role=>{
     res.json(Role)
})
};

const findByName = (req,res) => {
  Role.find({Role:req.params.roleName}).then(name=>{
      res.json(name)
  })
};

const findById = (req, res) => {
  Role.find({id:req.params.id}).then(id => {
    res.json(id)
  })
}

const create = (req, res) => {
    Role.create(req.body)
    .then((Role) => {
      res.json(Role);
    });
  };

const update = (req, res) => {
  Role.findByIdAndUpdate(req.params.Role, req.body).then(newRole => res.json(newRole));
}

const updateByName = (req, res) => {
  Role.findOneAndUpdate({ dish:req.params.roleName }, req.body, {new: true}).then(newRole => res.json(newRole));
}

const deleteOne = (req, res) => {
  Role.findByIdAndDelete(req.params.Role).then(newRole => {
      res.json(newRole);
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