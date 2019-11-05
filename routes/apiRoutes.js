var db = require("../models");
<<<<<<< HEAD
var axios = require("axios")

=======
var axios = require("axios");
>>>>>>> 7afa17ffd328b0248a4ff5ce73a62261e56467b5
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
  app.post("/api/google", function(req, res) {
    console.log(req.body);
    var queryUrlTitle = "https://www.googleapis.com/books/v1/volumes?q=";
    if (req.body.title.length) {
      queryUrlTitle += "+intitle:" + req.body.title;
    }
    if (req.body.author.length) {
      queryUrlTitle += "+inauthor:" + req.body.author;
    }
    console.log(queryUrlTitle);
    axios
      .get(queryUrlTitle)
      .then(function(response) {
        res.json(response.data);
      })
      .catch(function(error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log("---------------Data---------------");
          console.log(error.response.data);
          console.log("---------------Status---------------");
          console.log(error.response.status);
          console.log("---------------Status---------------");
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an object that comes back with details pertaining to the error that occurred.
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
        console.log(error.config);
      });
  });

  app.get("/api/books", function(req, res) {
    db.Book.findAll({}).then(function(dbBooks) {
      console.log(dbBooks);
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
    console.log(req.params);
    db.Book.destroy({ where: { title: req.params.id } }).then(function(dbBook) {
      res.json(dbBook);
    });
  });
};
