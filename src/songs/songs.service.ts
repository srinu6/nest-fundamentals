import { Injectable } from '@nestjs/common';
import { createSongDto } from './dto/create-song-dto';
import { InjectModel } from '@nestjs/mongoose';
import { Songs } from './songs.schema';
import { Model } from 'mongoose';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { SongsBuilder } from './songs.builder';

@Injectable()
export class SongsService {
  constructor(
    @InjectModel(Songs.name) private songsModel: Model<Songs>,
    private eventEmitter: EventEmitter2,
  ) {}

  private readonly songs: createSongDto[] = [];

  createSongService(song: createSongDto) {
    const songBuilder = new SongsBuilder();
    songBuilder
      .setTitle(song.title)
      .setArtists(song.artists)
      .setReleaseDate(song.releaseDate)
      .setDuration(song.duration);
    const newSong = songBuilder.build();
    // const newSong = new this.songsModel({
    //   title: song.title,
    //   releaseDate: song.releaseDate,
    //   artists: song.artists,
    //   duration: song.duration,
    // });
    const newSongDB = new this.songsModel(newSong);
    this.eventEmitter.emit('song.created', newSong);
    console.log('Song created event emitted:', newSong);
    return newSongDB.save();
  }

  getAllSongsService() {
    return this.songs;
  }

  getSongByIdService(id: number) {
    return this.songs[id];
  }
}
