import { Controller, Get, Post, UseGuards } from '@nestjs/common';
import { GoogleAuthGuard } from './guard';

@Controller('auth')
export class AuthController {
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
}
