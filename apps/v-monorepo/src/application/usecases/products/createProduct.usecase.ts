import { Injectable, Inject } from '@nestjs/common';
import Product from '../../../domain/models/products.model';
import { ProductRepository } from '../../../domain/ports/product.repository';
import ProductCommand from '../../commands/product.command';
import ProductFactory from '../../factory/product.factory';
import { Optional } from 'typescript-optional';

@Injectable()
export default class CreateProductUseCase {
  constructor(
    @Inject('ProductRepository') private productRepository: ProductRepository,
    private productFactory: ProductFactory
  ) {}

  public async handler(
    productCommand: ProductCommand
  ): Promise<Optional<Product>> {
    const product = this.productFactory.createProduct(productCommand);
    return this.productRepository.createProduct(product);
  }
}
