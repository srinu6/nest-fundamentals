import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';

@Injectable()
export class SongsListener {
  @OnEvent('song.created')
  handleSongCreatedEvent(payload: any) {
    console.log('Song created event received:', payload);
  }
}
