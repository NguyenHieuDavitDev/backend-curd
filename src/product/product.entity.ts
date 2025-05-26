import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id!: number; // <-- thêm !

  @Column()
  name!: string; // <-- thêm !

  @Column('text')
  description!: string; // <-- thêm !

  @Column('decimal')
  price!: number; // <-- thêm !

  @Column({ default: true })
  isActive!: boolean; // <-- thêm !
}
