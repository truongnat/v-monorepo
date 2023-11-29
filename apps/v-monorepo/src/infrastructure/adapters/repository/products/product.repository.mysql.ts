import { Injectable } from '@nestjs/common';
import Product from '../../../../domain/models/products.model';
import { ProductEntity } from './entity/product.entity';
import { Optional } from 'typescript-optional';
import ProductMapper from '../../../mapper/product.mapper';
import { ProductRepository } from '../../../../domain/ports/product.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export default class ProductRepositoryMysql implements ProductRepository {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productEntityRepository: Repository<ProductEntity>
  ) {}

  public async getAll(): Promise<Product[]> {
    const products = await this.productEntityRepository.find();
    return ProductMapper.toDomains(products);
  }

  public async createProduct(product: Product): Promise<Optional<Product>> {
    const productCreated = await this.productEntityRepository.save({
      ...product,
    });
    return ProductMapper.toDomain(productCreated);
  }

  public async getProduct(productId: number): Promise<Optional<Product>> {
    const product = await this.productEntityRepository.findOneBy({
      id: productId,
    });
    return ProductMapper.toDomain(product);
  }

  public async deleteProduct(productId: number): Promise<Optional<Product>> {
    const productDeleted = await this.getProduct(productId);
    if (productDeleted.isPresent()) {
      await this.productEntityRepository.delete(productId);
      return productDeleted;
    }
  }

  public async updateProduct(
    productId: number,
    product: Product
  ): Promise<Optional<Product>> {
    const productUpdated = await this.productEntityRepository.findOneBy({
      id: productId,
    });
    Object.assign(productUpdated, product);
    await this.productEntityRepository.save(productUpdated);
    return ProductMapper.toDomain(productUpdated);
  }
}
