const {Router} =  require('express')

const {UserController} = require('../twitterConrollers/usersController')

const router =  Router()

router.post("/users", UserController.postidtwetController)

router.delete("/users/:id", UserController.deleteController)

router.patch("/users/:id", UserController.pathController)

router.get("/users/:id", UserController.getIdController)

router.get("/users", UserController.getConntroler)


module.exports = router