import { Injectable } from '@nestjs/common';
import { createSongDto } from './dto/create-song-dto';

@Injectable()
export class SongsService {
  private readonly songs: createSongDto[] = [];

  createSongService(song: createSongDto) {
    this.songs.push(song);
    return this.songs;
  }

  getAllSongsService() {
    return this.songs;
  }

  getSongByIdService(id: number) {
    return this.songs[id];
  }
}
