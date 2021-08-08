module.exports = (sequelize, Sequelize) => {
    const Booking = sequelize.define("booking", {
      checkIn: {
        type: Sequelize.DATE
      },
      checkOut: {
        type: Sequelize.DATE
      },
    });
  
    return Booking;
  };