// data-source.js
require("reflect-metadata");
const { DataSource } = require("typeorm");
const { User } = require("./models/user");

const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "Amir.09397979861",
  database: "ozhan",
  synchronize: true,
  logging: false,
  entities: [User],
});

module.exports = { AppDataSource };
