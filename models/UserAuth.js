module.exports = (sequelize, DataTypes) => {
  const UserAuth = sequelize.define(
    "userauth",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowedNull : false,
      },
      name: {
        type: DataTypes.STRING,
        allowedNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowedNull: true,
        unique: true,
      },
      phno: {
        type: DataTypes.STRING,
        allowedNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowedNull: false,
      },
      refreshToken: {
        type: DataTypes.STRING,
        allowedNull: true,
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );
};
