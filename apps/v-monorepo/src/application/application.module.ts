import { Module } from '@nestjs/common';
import DomainModule from '../domain/domain.module';
import ProductFactory from './factory/product.factory';
import { PRODUCTS_USECASES } from './usecases/products';
import ProductRepositoryMysql from '../infrastructure/adapters/repository/products/product.repository.mysql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from '../infrastructure/adapters/repository/products/entity/product.entity';

@Module({
  imports: [DomainModule, TypeOrmModule.forFeature([ProductEntity])],
  providers: [
    ProductFactory,
    ...PRODUCTS_USECASES,
    { provide: 'ProductRepository', useClass: ProductRepositoryMysql },
  ],
  exports: [ProductFactory, ...PRODUCTS_USECASES],
})
export class ApplicationModule {}
