const {Router} = require('express') 

const {commentController} = require('../twitterConrollers/commentController')

const router = Router() 

router.post("/comments", commentController.postController)

router.delete("/comments/:id", commentController.deleteController)

router.patch("/comments/:id", commentController.patchController)

router.get("/comments", commentController.getController)

router.get("/comments/:id", commentController.getIdController) 
 

module.exports =  router