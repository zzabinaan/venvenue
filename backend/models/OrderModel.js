import { NOW, Sequelize } from "sequelize";
import db from "../config/database.js";
import Users from "./UserModel.js";
import Venues from "./VenueModel.js";

const { DataTypes } = Sequelize;

const Orders = db.define(
  "orders",
  {
    description: {
      type: DataTypes.STRING,
    },
    order_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    venueId: {
      type: DataTypes.INTEGER,
    },
    userId: {
      type: DataTypes.INTEGER,
    },
  },

  {
    freezeTableName: true,
  }
);

Users.hasMany(Orders);
Orders.belongsTo(Users, { foreignKey: "userId" });

Venues.hasMany(Orders);
Orders.belongsTo(Venues, { foreignKey: "venueId" });

export default Orders;
