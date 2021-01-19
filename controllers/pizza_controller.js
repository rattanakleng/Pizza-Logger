let express = require("express");

let router = express.Router();

// Import the model (pizza.js) to use its database functions.
let pizza = require("../models/pizza.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
  pizza.all(function (data) {
    let hbsObject = {
      pizzas: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/pizzas", function (req, res) {
  pizza.create([
    "name", "devoured"
  ], [
    req.body.name, req.body.devoured
  ], function (result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/pizzas/:id", function (req, res) {
  let condition = "id = " + req.params.id;

  console.log("condition", condition);

  pizza.update({
    devoured: req.body.devoured
  }, condition, function (result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/pizzas/:id", function (req, res) {
  let condition = "id = " + req.params.id;

  pizza.delete(condition, function (result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
