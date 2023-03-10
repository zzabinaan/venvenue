import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Amenities = db.define(
  "amenities",
  {
    amenity: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    icon: {
      type: DataTypes.STRING,
    },
  },
  { freezeTableName: true }
);

export default Amenities;
