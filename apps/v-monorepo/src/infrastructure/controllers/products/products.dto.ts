import ProductCommand from 'apps/v-monorepo/src/application/commands/product.command';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class AddProductDto implements ProductCommand {
  @IsNotEmpty()
  @IsString()
  public name: string;

  @IsOptional()
  @IsString()
  public description: string;

  @IsOptional()
  @IsString()
  public imageUrl: string;

  @IsNotEmpty()
  @IsNumber()
  public price: number;
}

export class UpdateProductDto implements ProductCommand {
  @IsNotEmpty()
  @IsString()
  public name: string;

  @IsOptional()
  @IsString()
  public description: string;

  @IsOptional()
  @IsString()
  public imageUrl: string;

  @IsNotEmpty()
  @IsNumber()
  public price: number;
}
