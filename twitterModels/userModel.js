const mongoose = require('mongoose')

const userSchema = mongoose.Schema({

    name: String,
    age: Number,
    saved: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Twet"

    }
})

const User = mongoose.model("User", userSchema)

module.exports = User