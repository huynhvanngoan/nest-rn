import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'Name is not empty' })
  name: string;

  @IsNotEmpty({ message: 'Email is not empty' })
  @IsEmail({}, { message: 'Email is not valid' })
  email: string;

  @IsNotEmpty({ message: 'Password is not empty' })
  // @IsStrongPassword({
  //   minLength: 8,
  //   minLowercase: 1,
  //   minUppercase: 1,
  //   minNumbers: 1,
  //   minSymbols: 1,
  // })
  password: string;

  // @IsNotEmpty({ message: 'Phone is not empty' })
  // @IsPhoneNumber('VN', { message: 'Phone is not valid' })
  phone: string;

  // @IsNotEmpty({ message: 'Address is not empty' })
  address: string;

  image: string;
}
