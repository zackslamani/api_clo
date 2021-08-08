module.exports = (sequelize, Sequelize) => {
    const Hotel = sequelize.define("hotels", {
      name: {
        type: Sequelize.STRING
      },
      nb_room: {
        type: Sequelize.BIGINT
      },
      address: {
        type: Sequelize.STRING
      },
      mobile: {
        type: Sequelize.BIGINT
      },
    });
  
    return Hotel;
  };