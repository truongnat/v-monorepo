import { Injectable, Inject } from '@nestjs/common';
import Product from '../../../domain/models/products.model';
import { ProductRepository } from '../../../domain/ports/product.repository';
import { Optional } from 'typescript-optional';
import ProductCommand from '../../commands/product.command';

@Injectable()
export default class UpdateProductUseCase {
  constructor(
    @Inject('ProductRepository') private productRepository: ProductRepository
  ) {}

  public handler(
    productId: number,
    product: ProductCommand
  ): Promise<Optional<Product>> {
    return this.productRepository.updateProduct(productId, product as any);
  }
}
