import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class AuthServiceDto {
  @IsNotEmpty()
  @IsString()
  readonly username: string;

  @IsNotEmpty()
  @IsNumber()
  readonly password: string;
}
