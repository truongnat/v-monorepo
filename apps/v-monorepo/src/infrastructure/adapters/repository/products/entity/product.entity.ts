import { Document } from 'mongoose';

import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class ProductEntity {
  @PrimaryGeneratedColumn({ type: 'integer' })
  id: number;

  @Column('varchar', { length: 255, nullable: false })
  name: string;

  @Column('varchar', { length: 5000, nullable: true })
  description: string;

  @Column('varchar', { length: 5000, nullable: true })
  imageUrl: string;

  @Column('decimal', { precision: 10, scale: 2, nullable: false })
  price: number;

  @CreateDateColumn({ name: 'created_date' })
  created_date: Date;

  @UpdateDateColumn({ name: 'updated_date' })
  updated_date: Date;
}
