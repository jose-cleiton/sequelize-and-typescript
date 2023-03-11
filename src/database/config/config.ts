import dotenv from "dotenv";
import { Options } from "sequelize/types";
dotenv.config();


const environment: string = process.env.NODE_ENV || "test";


const config: Options = {
  host: process.env.DB_HOST || "localhost",
  port: Number(process.env.DB_PORT) || 3306, 
  database: `${process.env.DB_NAME || "delivery-app"}`,
  username: process.env.DB_USER || "root",
  password: process.env.DB_PASS || "123456",
  dialect: "mysql",
  dialectOptions: {
    timezone: "Z",
  },
  logging: false,
};

export default config;