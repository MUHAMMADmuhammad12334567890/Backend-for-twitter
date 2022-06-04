const {Router} = require('express')

const {twetController} = require('../twitterConrollers/twetsController')

const router = Router() 

router.post("/twits", twetController.postTwetController)

router.delete("/twits/:id", twetController.deleteTwetController)

router.patch("/twits/:id", twetController.patchTwetController)

router.get("/twits", twetController.getTwitController)

router.get("/twits/:id", twetController.getTwitIdController)

module.exports = router

