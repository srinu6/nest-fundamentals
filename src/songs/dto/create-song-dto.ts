import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsDateString,
  IsMilitaryTime,
  IsNotEmpty,
  IsString,
} from 'class-validator';

export class createSongDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'Baby' })
  readonly title: string;

  @IsArray()
  @IsString({ each: true })
  @IsNotEmpty({ each: true })
  @ApiProperty({ type: [String], example: ['Justin Bieber', 'Usher'] })
  readonly artists: string[];

  @IsNotEmpty()
  @IsDateString()
  @ApiProperty({ example: '2023-10-01' })
  readonly releaseDate: Date;

  @IsMilitaryTime()
  @IsNotEmpty()
  @ApiProperty({ example: '03:45' })
  readonly duration: string;
}
