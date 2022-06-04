const  {Router} = require("express")

const router = Router()


router.use(require('./twetRout'))

router.use(require('./usersRout'))

router.use(require('./commentRout'))

module.exports = router