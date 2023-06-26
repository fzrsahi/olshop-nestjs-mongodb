import { Controller, Get, Post, UseGuards } from '@nestjs/common';
import { GoogleAuthGuard } from './guard';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @UseGuards(GoogleAuthGuard)
  @Get('google/login')
  login() {
    return 'hello wrol';
  }

  @UseGuards(GoogleAuthGuard)
  @Get('google/redirect')
  handleRedirect() {
    return 'handle redirect';
  }

  @Get('test')
  test() {
    return this.authService.test();
  }
}
