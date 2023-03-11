"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const environment = process.env.NODE_ENV || "test";
const config = {
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
exports.default = config;
