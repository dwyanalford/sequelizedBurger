// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // POST route for saving a new burger to database
  app.post("/api/posts", function(req, res) {
    db.Tasks.create(req.body).then(function(dbTasks) {
      res.json(dbTasks);
    });
  });

  
};
