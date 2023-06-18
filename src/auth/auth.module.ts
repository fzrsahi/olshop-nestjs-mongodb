import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { GoogleStrategy } from './strategy';

@Module({
  controllers: [AuthController],
  providers: [GoogleStrategy],
})
export class AuthModule {}
