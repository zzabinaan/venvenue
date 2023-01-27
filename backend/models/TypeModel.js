import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Types = db.define(
  "types",
  {
    event_types: {
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

export default Types;
