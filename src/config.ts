import { get as getConfig } from 'config';

const serverConfig = getConfig('server');
const dbConfig = getConfig('db');

export const config = {
  server: {
    port: process.env.PORT || serverConfig.port,
  },

  db: {
    type: dbConfig.type,
    host: dbConfig.host,
    port: dbConfig.port,
    username: dbConfig.username,
    password: dbConfig.password,
    database: dbConfig.database,
    synchronize: dbConfig.synchronize,
  }
} as const;
