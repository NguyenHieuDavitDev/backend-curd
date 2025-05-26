export class CreateProductDto {
  name!: string;
  description!: string;
  price!: number;
}

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column('text')
  description!: string;

  @Column('decimal')
  price!: number;

  @Column({ default: true })
  isActive!: boolean;
}
