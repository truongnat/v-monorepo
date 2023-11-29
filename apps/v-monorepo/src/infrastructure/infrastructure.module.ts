import { Module } from '@nestjs/common';
import { ApplicationModule } from '../application/application.module';
import ProductController from './controllers/products/product.controller';
import { EnvironmentConfigModule } from './config/environment-config/environment-config.module';
import { TypeOrmConfigModule } from './config/typeorm/typeorm.module';

@Module({
  imports: [ApplicationModule, EnvironmentConfigModule, TypeOrmConfigModule],
  controllers: [ProductController],
})
export class InfrastructureModule {}
