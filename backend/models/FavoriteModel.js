import { Sequelize } from "sequelize";
import db from "../config/database.js";
import Users from "./UserModel.js";
import Vendors from "./VendorModel.js";
import Venues from "./VenueModel.js";

const { DataTypes } = Sequelize;

const Favorites = db.define(
  "favorites",
  {
    venueId: {
      type: DataTypes.INTEGER,
    },
    userId: {
      type: DataTypes.INTEGER,
    },
  },
  { freezeTableName: true }
);

Users.hasMany(Favorites);
Favorites.belongsTo(Users, { foreignKey: "userId" });

Venues.hasMany(Favorites);
Favorites.belongsTo(Venues, { foreignKey: "venueId" });

export default Favorites;
