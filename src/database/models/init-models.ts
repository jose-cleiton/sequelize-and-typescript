import type { Sequelize } from "sequelize";
import { SequelizeMeta as _SequelizeMeta } from "./SequelizeMeta";
import type { SequelizeMetaAttributes, SequelizeMetaCreationAttributes } from "./SequelizeMeta";

export {
  _SequelizeMeta as SequelizeMeta,
};

export type {
  SequelizeMetaAttributes,
  SequelizeMetaCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const SequelizeMeta = _SequelizeMeta.initModel(sequelize);


  return {
    SequelizeMeta: SequelizeMeta,
  };
}
