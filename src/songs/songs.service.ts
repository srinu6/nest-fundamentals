import { Injectable } from '@nestjs/common';
import { createSongDto } from './dto/create-song-dto';
import { InjectModel } from '@nestjs/mongoose';
import { Songs } from './songs.schema';
import { Model } from 'mongoose';

@Injectable()
export class SongsService {
  constructor(@InjectModel(Songs.name) private songsModel: Model<Songs>) {}

  private readonly songs: createSongDto[] = [];

  createSongService(song: createSongDto) {
    const newSong = new this.songsModel({
      title: song.title,
      releaseDate: song.releaseDate,
      artists: song.artists,
      duration: song.duration,
    });
    return newSong.save();
  }

  getAllSongsService() {
    return this.songs;
  }

  getSongByIdService(id: number) {
    return this.songs[id];
  }
}
