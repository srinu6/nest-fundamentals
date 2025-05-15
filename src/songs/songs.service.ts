import { Injectable } from '@nestjs/common';

@Injectable()
export class SongsService {
    private readonly songs: string[] = [];

    createSongService(song: string) {
        this.songs.push(song);
        return this.songs;
    }

    getAllSongsService() {
        return this.songs;
    }
}
