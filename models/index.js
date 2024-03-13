const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(
  'Jobsown',
  'root',
  'Jaini123+',
   {
     host: '127.0.0.1',
     dialect: 'mysql'
   }
 );

sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.');
}).catch((error) => {
  console.error('Unable to connect to the database: ', error);
});

const checkConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};


checkConnection();

// Now requiring all models and passing the sequelize object

const UserAuthModel = require("./UserAuth.js")(sequelize, DataTypes);


sequelize.sync({ force: false }).then(() => {
  console.log("Data added");
});


module.exports = {
  sequelize,
  models: {
    userauth: UserAuthModel,
  },
};


