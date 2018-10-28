const express = require('express');
const app = express();

const bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.post('/getfood', function (req, res) {
    let body = req.body;
    console.log(body.ingredient);
    try {
        body.ingredient.forEach(function(element) {
            let arrIng = element.split('%');
            switch(arrIng.length){
                case 1: console.log(arrIng[0]); break;
                case 2: console.log(arrIng[0] + ' - ' + arrIng[1]); break;
            }
        });
        res.json({
            body
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