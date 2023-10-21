module.exports = (sequelize, Sequelize) => {
    const Book = sequelize.define("book", {
      title: {
        type: Sequelize.STRING
      },
      author: {
        type: Sequelize.STRING
      },
      // DECOMMENT:
      filename: {
        type: Sequelize.STRING
      }
    });
  
    return Book;
  }