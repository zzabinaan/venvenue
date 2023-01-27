import { Sequelize } from "sequelize";
import db from "../config/database.js";
import Users from "./UserModel.js";

const { DataTypes } = Sequelize;

const Vendors = db.define(
  "vendors",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        lane: [3, 250],
      },
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        lane: [3, 500],
      },
    },
    phone_number: {
      type: DataTypes.STRING,
    },
    website: {
      type: DataTypes.STRING,
    },
    profile_picture: {
      type: DataTypes.STRING,
    },
    userId: {
      type: DataTypes.INTEGER,
    },
  },
  { freezeTableName: true }
);

Users.hasOne(Vendors);
Vendors.belongsTo(Users, { foreignKey: "userId" });

export default Vendors;
