const mongoose = require('mongoose')

const twetSchema = mongoose.Schema({
name: String,
text: String,
likes: [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User"

}],

comment: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Comment"
}

})
const Twet = mongoose.model("Twet", twetSchema)

module.exports = Twet