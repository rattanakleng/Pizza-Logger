var express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();

// Server static content for the app from the ""public" directory in the application directory.
app.use(express.static("Public"));

//Pars application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
let exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defualtLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
let routes = require("./controllers/pizza_controllers.js");

app.use(routes);

// Start server so that it can begin listening to client requests.
app.listen(PORT, function() {
    //Log (server-side) when server has started
    console.log("Server listening on: http://localhost:" + PORT);
});