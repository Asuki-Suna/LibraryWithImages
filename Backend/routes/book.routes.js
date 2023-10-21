const { books } = require("../models");

module.exports = app => {
  const books = require("../controllers/book.controller");
  var upload = require('../multer/upload');

  var router = require("express").Router();

  // Create a new Book
  router.post("/", upload.single('file'), books.create);

  // Retrieve all Book
  router.get("/", books.findAll);

  // Retrieve a single Book with id
  router.get("/:id", books.findOne);

  // Update a Book with id
  router.put("/:id", upload.single('file'), books.update);

  // Delete a Book with id
  router.delete("/:id", books.delete);

  app.use("/api/books", router);
}