import { Sequelize } from "sequelize";
import db from "../config/database.js";
import Users from "./UserModel.js";

const { DataTypes } = Sequelize;

const Finders = db.define(
  "finders",
  {
    full_name: {
      type: DataTypes.STRING,
    },
    date_of_birth: {
      type: DataTypes.DATEONLY,
    },
    phone_number: {
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

Users.hasOne(Finders);
Finders.belongsTo(Users, { foreignKey: "userId" });

export default Finders;
