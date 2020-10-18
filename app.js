// ExpressJS `Hello ${username}!` app
// Build an ExpressJS server that does these things:

// when the "/greeter" route of the server is visited, return "Hello world!" to the client

// when a "/greeter/someNameHere" route is visited, return "Hello someNameHere!" to the client

// You may want to look into these topics for hints & how-to:

// JS string interpolation

// ExpressJS route parameters 

// NOTE: Do this challenge locally on your own computer!

// You may want to read the docs on route parameters for this one, too: https://expressjs.com/en/guide/routing.html#route-parameters

const express = require('express');
const app = express()

// const bodyParser = require('body-parser')
// const exphbs  = require('express-handlebars');
// app.engine('handlebars', exphbs());
// app.set('view engine', 'handlebars');

// body parser middlewares
// parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
// app.use(bodyParser.json())


// const hostname = '127.0.0.1';
const port = 3000;

app.get("/", (req, res) => {
	res.send("Hello World! Checkout the other routes")
})

app.get("/greeter", (req,res)=> {
  res.send("hello world! welcome to the greeter route. you're awesome")
})

app.get('/greeter/:name', function (req, res) {
  res.send(`hello ${req.params.name}!`)
  console.log(req.params.name)
})
// returns an obj when you use name - URL needs to be dynamic
// use bodyparser to convert to JSON?
// need to send it to HTML properly

app.listen(port, () => console.log(`hello challenge app listening on port ${port}!`))

