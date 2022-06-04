const mongoose = require('mongoose')

const coomentSchema = mongoose.Schema({

    text: String,
    user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User"
    }


})

const Comment = mongoose.model("Comment", coomentSchema)

module.exports = Comment 