// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

// finds all existing burgers in the database
   app.get("/", function(req, res) {
   	db.Burger.findAll({
    }).then(function(data) {
      res.render("index", {burgers: data});
    });
    
  });

// POST route for saving a new burger
  app.post("/", function(req, res) {

    db.Burger.create({
      burgers: req.body.newBurger
    }).then(function(dbBurger) {
      // We have access to the new burger as an argument inside of the callback function
      res.redirect("/");
    });
  });

  // updating the database when "devour it" button submitted
  // since we use the colon "/:id" then we use params
   app.post("/:id", function(req, res) {
   	db.Burger.update({
   		devoured: req.body.devoured
   	}, {
      where: {
        id: req.params.id
      }
    }).then(function(data) {
      // data.devoured = true;
      // console.log(data);
      res.json(data);
      
    });
    
  });

}


