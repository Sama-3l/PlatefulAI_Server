const mongoose = require('mongoose')
const Schema = mongoose.Schema

const RecipeModel = new Schema({
    name: {type: String, require: true},
    user: {type: Schema.Types.ObjectId, ref: 'user', require: true,},
    category: {type: Schema.Types.ObjectId, ref: 'category', require: true,},
    description: {type: String, require: true,},
    likes: {type: Number, require: true},
    likedBy: [
        {type: Schema.Types.ObjectId, ref: 'user'},
    ],
    savedBy: [
        {type: Schema.Types.ObjectId, ref: 'user'},
    ],
    saves: {type: Number, require: true,},
    serving: {type: Number, require: true,},
    time: {type: Number, require: true,},
    calories: {type: Number, require: true,},
    image: String,
    ingredients: [
        {
            name: {type: String, require: true},
            quantity: {type: String, require: true},
        }
    ],
    tools: [
        {
            name: {type: String, require: true},
            use: {type: String, require: true},
        }
    ],
    tags: [
        {type: String}
    ],
    instructions: [
        {type: Schema.Types.ObjectId, ref: 'instruction'},
    ],
});

const Recipe = mongoose.model('recipe', RecipeModel)

module.exports = Recipe