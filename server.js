express = require('express');
bodyParser = require('body-parser');
var app = express();

//Allow all requests from all domains & localhost
app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, GET");
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

var ingredients = [
    {
        "id": "2asdfasfd3asdfsdfasdfasdf4kjw",
        "textadfasfd": "Eaaadsdfasfdsdfafdggs"
    },
    {
        "id": "aasdfafds82w",
        "text": "Milk"
    },
    {
        "id": "234sk1",
        "text": "Bacon"
    },
    {
        "id": "nice",
        "text": "animal Legs"
    },
    {
        "id": "world",
        "text": "dog Legs"
    },
    {
        "id": "hello",
        "text": "cockroachasdfasf Legs"
    },
    {
        "id": "hello",
        "text": "cockrsadfaoach Legs"
    },
    {
        "id": "hello",
        "text": "cockroach Leasdfasgs"
    },
    {
        "id": "hello",
        "text": "cockroasdfaach Legs"
    },
    {
        "id": "hello",
        "text": "asdfa Legs"
    },
    {
        "id": "hello",
        "text": "night Legs"
    },
    {
        "id": "hello",
        "text": "lily Legs"
    }
];

app.get('/ingredients', function(req, res) {
    console.log(req);
    res.send(ingredients);
});

app.post('/ingredients', function(req, res) {
    var ingredient = req.body;
    console.log(req.body);
    ingredients.push(ingredient);
    res.status(200).send("Successfully posted ingredient");
});

app.listen(6069);
