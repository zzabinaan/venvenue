import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Locations = db.define(
  "locations",
  {
    city: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        lane: [3, 100],
      },
    },
    district: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        lane: [3, 100],
      },
    },
  },
  { freezeTableName: true }
);

export default Locations;
