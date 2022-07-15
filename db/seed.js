const mongoose = require('mongoose')
const Role = require('./models/Role')
const Character = require('./models/Character')

Role.create({
    roleName:"Sherriff",
    roleNum:"1",
    roleImg:"1"
}),
Role.create({
    roleName:"Outlaw",
    roleNum:"2",
    roleImg:"2"
}),
Role.create({
    roleName:"Outlaw",
    roleNum:"2",
    roleImg:"2"
}),
Role.create({
    roleName:"Renegade",
    roleNum:"3",
    roleImg:"3"
}),
Role.create({
    roleName:"Deputy",
    roleNum:"4",
    roleImg:"4"
}),
Role.create({
    roleName:"Outlaw",
    roleNum:"2",
    roleImg:"2"
}),
Role.create({
    roleName:"Deputy",
    roleNum:"4",
    roleImg:"4"
}),
Role.create({
    roleName:"Renegade",
    roleNum:"3",
    roleImg:"3"
}),

Character.create({
    charName: "one",
    charNum: "1",
    charImg: "1"
}),

Character.create({
    charName: "one2",
    charNum: "2",
    charImg: "2"
}),

Character.create({
    charName: "one3",
    charNum: "3",
    charImg: "3"
}),

Character.create({
    charName: "one4",
    charNum: "4",
    charImg: "4"
}),

Character.create({
    charName: "one5",
    charNum: "5",
    charImg: "5"
})
