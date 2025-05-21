import { Body, Controller, Post, UnauthorizedException } from '@nestjs/common';
import { AuthServiceDto } from './dto/authServiceDto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() authServiceDto: AuthServiceDto) {
    const user = await this.authService.validateUser(
      authServiceDto.username,
      authServiceDto.password,
    );
    if (!user) {
      throw new UnauthorizedException();
    }
    return this.authService.login(user);
  }
}
