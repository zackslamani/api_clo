const db = require("../models");
const Booking = db.booking;
const Op = db.Sequelize.Op;

// Create and Save a new Room
exports.create = (req, res) => {
  // Validate request
  if (!req.body.checkIn || !req.body.checkOut) {
    res.status(400).send({
      message: "CheckIn and CheckOut can not be empty!"
    });
    return;
  }

  // Create a Booking
  const booking = {
    checkIn: req.body.checkIn,
    checkOut: req.body.checkOut,
  };
  // Save Booking in the database
  Booking.create(booking)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Hotel."
      });
    });
};


exports.findAll = (req, res) => {
    const type = req.query.name;
    var condition = type ? { type: { [Op.like]: `%${type}%` } } : null;
  
    Hotel.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving hotels."
        });
      });
  };

  exports.findByIdRoom = (req, res) => {
    const type = req.query.name;
    var condition = type ? { type: { [Op.like]: `%${type}%` } } : null;
  
    Hotel.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving hotels."
        });
      });
  };
  
  // Find a single Booking with an id
  exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Hotel.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Hotel with id=" + id
        });
      });
  };
  
  // Update a Booking by the id in the request
  exports.update = (req, res) => {
    const id = req.params.id;
  
    Hotel.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Hotel was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Hotel with id=${id}. Maybe Hotel was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Hotel with id=" + id
        });
      });
  };
  
  // Delete a Hotel with the specified id in the request
  exports.delete = (req, res) => {
    const id = req.params.id;
  
    Hotel.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Hotel was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Hotel with id=${id}. Maybe Hotel was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Tutorial with id=" + id
        });
      });
  };
  
  // Delete all Tutorials from the database.
  exports.deleteAll = (req, res) => {
    Hotel.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} Hotels were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all hotels."
        });
      });
  };
  
  
