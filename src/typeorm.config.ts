import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { config } from './config';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: config.db.type,
  host: config.db.host,
  port: config.db.port,
  username: config.db.username,
  password: config.db.port,
  database: config.db.database,
  entities: [__dirname + '/**/*.entity.{js,ts}'],
  synchronize: config.db.synchronize,
};
