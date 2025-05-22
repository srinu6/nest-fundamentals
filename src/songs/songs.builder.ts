import { createSongDto } from './dto/create-song-dto';

export class SongsBuilder {
  private song: Partial<createSongDto> = {};

  setTitle(title: string): this {
    console.log('Setting title:', title);
    this.song = { ...this.song, title };
    return this;
  }

  setArtists(artists: string[]): this {
    this.song = { ...this.song, artists };
    return this;
  }

  setReleaseDate(releaseDate: Date): this {
    this.song = { ...this.song, releaseDate };
    return this;
  }

  setDuration(duration: string): this {
    this.song = { ...this.song, duration };
    return this;
  }

  build(): createSongDto {
    if (
      !this.song.title ||
      !this.song.artists ||
      !this.song.releaseDate ||
      !this.song.duration
    ) {
      throw new Error('Missing required fields');
    }
    return this.song as createSongDto;
  }
}
