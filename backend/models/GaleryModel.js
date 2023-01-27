import { Sequelize } from "sequelize";
import db from "../config/database.js";
import Venues from "./VenueModel.js";
const { DataTypes } = Sequelize;

const Galeries = db.define(
  "galeries",
  {
    picture: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    description: {
      type: DataTypes.TEXT,
    },
    venueId: {
      type: DataTypes.INTEGER,
    },
  },
  { freezeTableName: true }
);

Venues.hasMany(Galeries);
Galeries.belongsTo(Venues, { foreignKey: "venueId" });

export default Galeries;
