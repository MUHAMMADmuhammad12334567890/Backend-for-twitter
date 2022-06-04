
const { reset } = require("nodemon")
const User = require("../twitterModels/userModel") 
// const Twet =  require("../twitterModels/twetsModel")

module.exports.UserController = {
 
    postidtwetController: (req, res) => {
    User.create({
        name: req.body.name,
        age: req.body.age,
        
    })
    .then(() => {
        res.json("user Добавлен")
    })
       .catch((err) => {
           res.json(err)
       })

    },

    deleteController: (req, res) => {
 User.findByIdAndRemove(req.params.id).then(() => {
     res.json("user удален")
 })
 .catch((err) => {
     res.json(err)
 })


    },

    pathController: (req, res) => {
        User.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            age: req.body.age,
            saved: req.body.saved
        }, {new: true})
        .then(() => {
            res.json("user изменен")
        })
        .catch((err) => {
            res.json(err)
        })
    }, 

    getConntroler: (req, res) => {
        User.find().populate("saved")
        .then((data) => {
            res.json(data)
        })
        .catch((err) =>{
            res.json(err)
        })
    },  

    getIdController: (req, res) => {
        User.findById(req.params.id).populate("saved")
        .then((data) => {
            res.json(data)
        })
        .catch(() =>{
            res.json(err)
        })
    }










}