import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { GoogleStrategy } from './strategy';
import { AuthService } from './auth.service';
import { SessionSelializer } from './serializer';

@Module({
  controllers: [AuthController],
  providers: [GoogleStrategy, AuthService, SessionSelializer],
})
export class AuthModule {}
