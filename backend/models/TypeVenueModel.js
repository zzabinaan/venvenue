import { Sequelize } from "sequelize";
import db from "../config/database.js";
import Types from "./TypeModel.js";
import Venues from "./VenueModel.js";

const { DataTypes } = Sequelize;

const TypesVenue = db.define(
  "types_venue",
  {
    typeId: {
      type: DataTypes.INTEGER,
    },
    venueId: {
      type: DataTypes.INTEGER,
    },
  },

  { freezeTableName: true }
);

Types.hasMany(TypesVenue);
TypesVenue.belongsTo(Types, { foreignKey: "typeId" });

Venues.hasMany(TypesVenue);
TypesVenue.belongsTo(Venues, { foreignKey: "venueId" });

export default TypesVenue;
