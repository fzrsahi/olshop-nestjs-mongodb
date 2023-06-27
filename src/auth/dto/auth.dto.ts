import { IsString } from 'class-validator';
import { Role } from '@prisma/client';

export class AuthDto {
  @IsString()
  name: string;
  @IsString()
  email: string;
  @IsString()
  photo: string;
  @IsString()
  role: Role;
}
