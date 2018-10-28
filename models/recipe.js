var moongose = require('mongoose');
var Schema = moongose.Schema;

moongose.connect('mongodb://localhost/chefmedb');

var recipe_schema = new Schema({
    type: String,
    ingredients: Array,
    preparation: String,
    image: String
});

var Recipe = moongose.model('Recipe', recipe_schema);
module.exports.Recipe = Recipe;