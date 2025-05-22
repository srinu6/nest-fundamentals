import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { SongsService } from './songs.service';
import { createSongDto } from './dto/create-song-dto';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('songs')
@Controller('songs')
export class SongsController {
  constructor(private readonly songsService: SongsService) {}

  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @Post()
  createSong(@Body() createSongDto: createSongDto) {
    return this.songsService.createSongService(createSongDto);
  }

  @Get()
  getAllSongs() {
    return this.songsService.getAllSongsService();
  }

  @Get(':id')
  getSongById(@Param('id') id: number) {
    return this.songsService.getSongByIdService(id);
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
