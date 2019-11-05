var db = require("../models");
var axios = require("axios")

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(Readit_db) {
      res.json(Readit_db);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    //install axios (node js folder) GET call for api
    //POST to database
    //sequlize activity
    //UPDATE "res.send"
    db.Example.create(req.body).then(function(Readit_db) {
      res.json(Readit_db);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(
      Readit_db
    ) {
      res.json(Readit_db);
  // Get all books
  app.get("/api/books", function(req, res) {
    db.Book.findAll({}).then(function(dbBooks) {
      res.json(dbBooks);
    });
  });

  // Create a new book
  app.post("/api/books", function(req, res) {
    db.Book.create(req.body).then(function(dbBook) {
      res.json(dbBook);
    });
  });

  // Delete a book by id
  app.delete("/api/books/:id", function(req, res) {
    db.Book.destroy({ where: { id: req.params.id } }).then(function(dbBook) {
      res.json(dbBook);
    });
  });
};
