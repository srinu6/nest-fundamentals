// src/movies/schemas/movie.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Songs extends Document {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  artists: string[];

  @Prop()
  releaseDate: Date;

  @Prop({ required: true })
  duration: string;
}

export const SongsSchema = SchemaFactory.createForClass(Songs);
