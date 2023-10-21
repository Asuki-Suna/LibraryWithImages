const db = require("../models");
const Book = db.books;
const Op = db.Sequelize.Op;

// Create and Save a new Book
exports.create = (req, res) => {

  console.log("createeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee")
  // Validate request
  if (!req.body.title || !req.body.author) {
    res.status(400).send({
      message: "Content cannot be empty!"
    });
  }

  // Create a Book
  const book = {
    title: req.body.title,
    author: req.body.author,
    filename: req.file ? req.file.filename : ""
  }

  // Save Book in the database
  Book.create(book).then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Some error occurred while creating the Book"
    })
  });
};

// Retrieve all Book from the database.
exports.findAll = (req, res) => {
  Book.findAll().then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving all Books"
    })
  })
};

// Find a single Book with an id
exports.findOne = (req, res) => {

}

// Update a Book by the id in the request
exports.update = (req, res) => {

  console.log("updateeeeeeeeeeeeeeeeeeeeeeeeeee")

  if (!req.body.title || !req.body.author) {
    res.status(400).send({
      message: "Content cannot be empty!"
    });

    return;
  }

  const book = {
    title: req.body.title,
    author: req.body.author,
    filename: req.file ? req.file.filename : ""
  }


  console.log(book)

  const id = req.params.id;

  console.log(id)

  Book.update(book, {
    where: { id: id }
  }).then(data => {
    res.send({ message: "se actualizo correctamente" });
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Some error occurred while updating all Books"
    })
  })
};

// Delete a Book with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;
  Book.destroy({ where: { id: id } }).then(data => {
    res.send({ message: "se elimino correctamente" });
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Some error occurred while deleting all Books"
    })
  })
};
