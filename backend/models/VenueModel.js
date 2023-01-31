import { Sequelize } from "sequelize";
import db from "../config/database.js";
import Vendors from "./VendorModel.js";
import Categories from "./CategoryModel.js";
import Locations from "./LocationModel.js";

const { DataTypes } = Sequelize;

const Venues = db.define(
  "venues",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    capacity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    price: {
      type: DataTypes.INTEGER,
    },

    rental_types: {
      type: DataTypes.ENUM({
        values: [
          "per day",
          "per hour",
          "per gues",
          "min spend",
          "price on asking",
        ],
      }),
      defaultValue: "per hour",
    },
    cover: {
      type: DataTypes.STRING,
    },
    cover_url: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.ENUM({
        values: ["pending", "uploaded"],
      }),
      defaultValue: "pending",
    },
    categoryId: {
      type: DataTypes.INTEGER,
    },
    locationId: {
      type: DataTypes.INTEGER,
    },
    vendorId: {
      type: DataTypes.INTEGER,
    },
  },
  {
    freezeTableName: true,
  }
);

Vendors.hasMany(Venues);
Venues.belongsTo(Vendors, { foreignKey: "vendorId" });

Categories.hasMany(Venues);
Venues.belongsTo(Categories, { foreignKey: "categoryId" });

Locations.hasMany(Venues);
Venues.belongsTo(Locations, { foreignKey: "locationId" });

export default Venues;
