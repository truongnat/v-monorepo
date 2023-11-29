import PriceProductLessZeroException from '../exceptions/price-product-less-zero.exception';

export default class ProductModel {
  private id?: number;

  private readonly name: string;

  private readonly description: string;

  private readonly imageUrl: string;

  private readonly price: number;

  private created_date: Date;

  private updated_date: Date;

  constructor(
    id: number,
    name: string,
    description: string,
    imageUrl: string,
    price: number
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.imageUrl = imageUrl;
    this.price = price || 0;
    this.validatePrice();
  }

  public validatePrice(): void {
    if (this.price <= 0) {
      throw new PriceProductLessZeroException(
        'The price product should be greater than zero'
      );
    }
  }

  public getName(): string {
    return this.name;
  }

  public getId(): number {
    return this.id;
  }

  public setCreateAt(created_date: Date): this {
    this.created_date = created_date;
    return this;
  }

  public setUpdateAt(updated_date: Date): this {
    this.updated_date = updated_date;
    return this;
  }
}
