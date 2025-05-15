import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { SongsService } from './songs.service';

@Controller('songs')
export class SongsController {
  constructor(private readonly songsService: SongsService) {}
  @Post()
  createSong() {
    return this.songsService.createSongService('first song');
  }

  @Get()
  getAllSongs() {
    return this.songsService.getAllSongsService();
  }

  @Get(':id')
  getSongById() {
    return 'here is a song by id ${id}';
  }

  @Put(':id')
  updateSongById() {
    return 'here is the updated song by id ${id}';
  }

  @Delete(':id')
  likeSongById() {
    return 'here is the liked song';
  }
}
