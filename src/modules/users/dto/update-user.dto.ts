import { IsMongoId, IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateUserDto {
  @IsMongoId({ message: 'Invalid _id' })
  @IsNotEmpty({ message: '_id is not empty' })
  _id: string;

  @IsOptional()
  name: string;

  @IsOptional()
  phone: string;

  @IsOptional()
  address: string;

  @IsOptional()
  image: string;
}
