import { Sequelize } from "sequelize";
import db from "../config/database.js";
import Venues from "./VenueModel.js";
import Amenities from "./AmenityModel.js";

const { DataTypes } = Sequelize;

const AmenitiesVenue = db.define(
  "amenities_venue",
  {
    amenityId: {
      type: DataTypes.INTEGER,
    },
    venueId: {
      type: DataTypes.INTEGER,
    },
  },
  { freezeTableName: true }
);

Venues.hasMany(AmenitiesVenue);
AmenitiesVenue.belongsTo(Venues, { foreignKey: "venueId" });

Amenities.hasMany(AmenitiesVenue);
AmenitiesVenue.belongsTo(Amenities, { foreignKey: "amenityId" });

export default AmenitiesVenue;
