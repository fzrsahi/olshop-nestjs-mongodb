import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

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
}
