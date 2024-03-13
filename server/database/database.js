import Sequelize from "sequelize";

export const sequelize = new Sequelize("retrogamer_db", "postgres", "Progresql24", {
  hos: "localhost",
  dialect: "postgres",
});
