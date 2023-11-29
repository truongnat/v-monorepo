import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { EnvironmentConfigModule } from '../environment-config/environment-config.module';
import { EnvironmentConfigService } from '../environment-config/environment-config.service';
import { ProductEntity } from '../../adapters/repository/products/entity/product.entity';

export const getTypeOrmModuleOptions = (
  config: EnvironmentConfigService
): TypeOrmModuleOptions => {
  return {
    type: 'mysql',
    host: config.getDatabaseHost(),
    port: config.getDatabasePort(),
    username: config.getDatabaseUser(),
    password: config.getDatabasePassword(),
    database: config.getDatabaseName(),
    entities: [ProductEntity],
    synchronize: config.getDatabaseSync(),
    autoLoadEntities: true,
    logging: true,
    schema: config.getDatabaseSchema(),
    migrationsRun: true,
    cli: {
      migrationsDir: 'src/migrations',
    },
  } as TypeOrmModuleOptions;
};

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [EnvironmentConfigModule],
      inject: [EnvironmentConfigService],
      useFactory: getTypeOrmModuleOptions,
    }),
  ],
})
export class TypeOrmConfigModule {}
