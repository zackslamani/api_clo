module.exports = (sequelize, Sequelize) => {
    const Room = sequelize.define("rooms", {
      type: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.DOUBLE
      },
      capacity: {
        type: Sequelize.BIGINT
      },
      available: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return Room;
  };