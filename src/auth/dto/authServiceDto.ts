import { IsNotEmpty, IsString } from 'class-validator';

export class AuthServiceDto {
  @IsNotEmpty()
  @IsString()
  readonly username: string;

  @IsNotEmpty()
  @IsString()
  readonly password: string;
}
