import { DataSource } from "typeorm";

import { config } from "dotenv";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,

  username: process.env.PSQL_USER,
  password: process.env.PSQL_PW,
  database: process.env.PSQL_DB,

  synchronize: false,
  logging: true,
  //   entities: [User],
  migrations: [],
});
