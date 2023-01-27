import { Sequelize } from "sequelize";
import db from "../config/database.js";
import Vendors from "./VendorModel.js";
import Categories from "./CategoryModel.js";
import Locations from "./LocationModel.js";

const { DataTypes } = Sequelize;

const Venues = db.define(
  "venues",
  {
    uuid: {
      type: DataTypes.STRING,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        lane: [3, 250],
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
        lane: [3, 500],
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
    // rental_types: {
    //   type: DataTypes.ENUM({
    //     values: [
    //       "per hour",
    //       "per day",
    //       "min spend",
    //       "per guest",
    //       "price on asking",
    //     ],
    //   }),
    //   defaultValue: "per hour",
    //   allowNull: false,
    //   validate: {
    //     notEmpty: true,
    //   },
    // },
    // status: {
    //   type: DataTypes.ENUM({
    //     velues: ["pending", "uploaded"],
    //   }),
    //   defaultValue: "pending",
    // },

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
