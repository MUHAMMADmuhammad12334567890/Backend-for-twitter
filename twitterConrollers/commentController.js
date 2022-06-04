
const Comment = require("../twitterModels/commentModel")

module.exports.commentController = {
postController: async (req, res) => {
    try{
const newComment = await Comment.create({
    text: req.body.text,
    user: req.body.user
});
res.json(newComment)
    
} catch(error) {
    res.json(error.message)
}

},


deleteController: async (req, res) =>{
try{
   await Comment.findByIdAndDelete(req.params.id)
res.json("Коммент удален")
} catch(error) {
res.json(error.message)
}
},

patchController: async (req, res) => {
    try{
    const commentNew = await Comment.findByIdAndUpdate(req.params.id, {
        text: req.body.text,
        user: req.body.user
    })
    res.json(commentNew)
    } catch(error) {
        res.json(error.message)
    }
},

getController: async (req, res) => {
    try{
const commentGetNew = await Comment.find().populate("user")
res.json(commentGetNew)
    } catch(error) {
        res.json(error.message)
    }
},

getIdController: async (req, res) => {
    try{
const commentGetIdNew = await Comment.findById(req.params.id).populate("user")
res.json(commentGetIdNew)
    } catch(error) {
        res.json(error.message)
    }
} 






}