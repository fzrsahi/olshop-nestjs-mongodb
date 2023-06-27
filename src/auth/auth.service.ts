import { Body, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}
  async test() {
    const user = await this.prisma.user.findMany({
      include: {
        products: true,
        Order: {
          include: {
            products: true,
          },
        },
      },
    });
    return user;
  }

  async validateUser(@Body() dto: AuthDto) {
    console.log(dto);
    const user = await this.prisma.user.upsert({
      where: {
        email: dto.email,
      },
      update: {},
      create: {
        email: dto.email,
        name: dto.name,
        role: dto.role,
        photo: dto.photo,
      },
    });

    delete user.hash;
    return user;
  }

  async findUser(id: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        id,
      },
    });

    return user;
  }
}
