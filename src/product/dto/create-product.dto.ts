export class CreateProductDto {
  name!: string; // <— dùng ! để khẳng định “sẽ có giá trị”
  description!: string;
  price!: number;
  isActive?: boolean; // optional thì không cần !
}
