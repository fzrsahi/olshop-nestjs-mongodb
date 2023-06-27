import {
  Controller,
  Get,
  Post,
  Req,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { GoogleAuthGuard } from './guard';
import { AuthService } from './auth.service';
import { Request } from 'express';

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
  test(@Req() req: Request) {
    if (!req.user) throw new UnauthorizedException();
    return this.authService.test();
  }

  @Get('met')
  me() {
    return 'je';
  }
}
