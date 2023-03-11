import { Sequelize, Options, DataTypes } from 'sequelize';
import * as fs from 'fs';
import * as path from 'path';

const basename = path.basename(__filename);
const env = (process.env.NODE_ENV || 'development') as string;
const config: CustomOptions = require(__dirname + '/../config/config.js')[env];
const db: any = {};

interface CustomOptions extends Options {
  use_env_variable?: string;
}

let sequelize: Sequelize;

if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable] as string, config);
} else {
  sequelize = new Sequelize(config.database!, config.username!, config.password!, config);
}

fs.readdirSync(__dirname)
  .filter((file: string) => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach((file: string) => {
    const model = require(path.join(__dirname, file))(sequelize, DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName: string) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
