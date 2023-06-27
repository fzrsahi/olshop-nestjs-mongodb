import { PassportSerializer } from '@nestjs/passport';
import { AuthService } from './../auth.service';
import { User } from '@prisma/client';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SessionSelializer extends PassportSerializer {
  constructor(private readonly authService: AuthService) {
    super();
  }

  serializeUser(user: User, done: Function) {
    console.log('serialize user');

    done(null, user);
  }
  async deserializeUser(payload: any, done: Function) {
    const user = await this.authService.findUser(payload.id);
    console.log({
      msg: 'deserial user',
      user,
    });
    return user ? done(null, user) : done(null, null);
  }
}
