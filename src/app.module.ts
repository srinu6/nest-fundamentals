import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SongsModule } from './songs/songs.module';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { LoggerModule } from './logger/logger.module';

@Module({
  imports: [
    EventEmitterModule.forRoot(),
    MongooseModule.forRoot(
      'mongodb+srv://srinumaripi:lqWmQVt1ioLDWzl7@cluster0.rwcxxjy.mongodb.net/nest_movie_db',
    ),
    SongsModule,
    AuthModule,
    LoggerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
