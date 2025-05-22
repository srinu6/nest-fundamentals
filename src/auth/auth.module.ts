import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jmt.strategy';
import { ThrottlerModule } from '@nestjs/throttler';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: 'mysecretkey',
      signOptions: { expiresIn: '6000s' },
    }),
    // ThrottlerModule.forRoot({
    //   ttl: 60, // Time to live (seconds)
    //   limit: 10, // Max requests per timeToLive per IP
    // }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
})
export class AuthModule {}
