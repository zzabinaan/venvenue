import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Categories = db.define(
  "categories",
  {
    category_name: {
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

export default Categories;
