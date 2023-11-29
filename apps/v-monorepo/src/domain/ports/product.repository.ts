import { Optional } from 'typescript-optional';
import Product from '../models/products.model';

export interface ProductRepository {
  /**
   *
   */
  getAll(): Promise<Product[]>;

  /**
   * Returns product filtered by id
   * @param {string} productId
   * @returns a `Product` object containing the data.
   */
  getProduct(id: number): Promise<Optional<Product>>;

  /**
   *
   */
  createProduct(product: Product): Promise<Optional<Product>>;

  /**
   *
   */
  deleteProduct(productId: number): Promise<Optional<Product>>;

  /**
   *
   */
  updateProduct(
    productId: number,
    product: Product
  ): Promise<Optional<Product>>;
}
