const express = require('express');
const app = express();
const Recipe = require('../models/recipe').Recipe;

const bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.post('/getfood', function (req, res) {
    let body = req.body;
    try {
        let arrIngredient = [];
        body.ingredient.forEach(function(element) {
            let arrIngEl = element.split('%');
            switch(arrIngEl.length){
                case 1:
                arrIngredient.push({
                    name: arrIngEl[0]
                });
                //console.log(arrIng[0]);
                break;
                case 2:
                arrIngredient.push({
                    name: arrIngEl[0],
                    quantity: arrIngEl[1]
                });
                //console.log(arrIng[0] + ' - ' + arrIng[1]);
                break;
            }
        });
        let recipe = new Recipe({
            type: body.type,
            ingredients: arrIngredient,
            preparation: body.preparation,
            image: body.image
        });
        recipe.save(function() {
            res.json({
                body
            });
        });
    }
    catch(err) {
        res.json({
            error: err.message
        });
    }
});

app.listen(3000, function () {
    console.log('Escuchando puerto: ', 3000);
});