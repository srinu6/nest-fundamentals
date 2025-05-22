import { Module } from '@nestjs/common';
import { SongsController } from './songs.controller';
import { SongsService } from './songs.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Songs, SongsSchema } from './songs.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Songs.name, schema: SongsSchema }]),
  ],
  controllers: [SongsController],
  providers: [SongsService],
})
export class SongsModule {}
