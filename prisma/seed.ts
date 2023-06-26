import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const fazrul = await prisma.user.upsert({
    where: { email: 'fzrsahi@gmail.com' },
    update: {},
    create: {
      email: 'fzrsahi@gmail.com',
      name: 'Fazrul Sahi',
      hash: '123',
      role: 'USER',
      products: {
        createMany: {
          data: [
            {
              name: 'Indomie Goreng',
              title: 'Indomie Goreng Murah',
              category: 'Food',
              published: false,
              description: 'Ini Indomie Goreng',
              image:
                'https://st4.depositphotos.com/1150749/26402/i/600/depositphotos_264020662-stock-photo-paris-france-april-24-2019.jpg',
              stock: 10,
            },
            {
              name: 'Indomie kuah',
              title: 'Indomie kuah Murah',
              category: 'Food',
              published: false,
              description: 'Ini Indomie kuah',
              image:
                'https://st4.depositphotos.com/1150749/26402/i/600/depositphotos_264020662-stock-photo-paris-france-april-24-2019.jpg',
              stock: 10,
            },
            {
              id: '6161be92898d94dbaf9e5e85',
              name: 'Indomie Kari',
              title: 'Indomie Kari Murah',
              category: 'Food',
              published: false,
              description: 'Ini Indomie Kari',
              image:
                'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.lenovo.com%2Fid%2Fin%2F&psig=AOvVaw03NEwbhkLgpERjxq5uuoTB&ust=1687853862928000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCPClnuG_4P8CFQAAAAAdAAAAABAE',
              stock: 10,
            },
          ],
        },
      },
    },
  });

  const John = await prisma.user.upsert({
    where: { email: 'john@doe.com' },
    update: {},
    create: {
      email: 'john@doe.com',
      name: 'John Doe',
      hash: '123',
      role: 'USER',
      products: {
        createMany: {
          data: [
            {
              id: '6161be92898d94dbaf9e5e84',
              name: 'Keyboard Mechanical',
              title: 'Keyboard Mech Murah',
              category: 'Tech',
              published: false,
              description: 'Ini Keyboard Mech Baru',
              image:
                'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.risccomputer.co.id%2Fproduct%2Flogitech-k120-usb-keyboard%2F&psig=AOvVaw1o3yVvLmJFd6mV9Lp_R8RE&ust=1687854021695000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCOCX9azA4P8CFQAAAAAdAAAAABAE',
              stock: 10,
            },
            {
              name: 'Mouse Gaming',
              title: 'Mouse Gaming Murah',
              category: 'Tech',
              published: false,
              description: 'Ini Mouse Gaming',
              image:
                'https://id-media.apjonlinecdn.com/catalog/product/h/p/hp_240_bluetooth_mouse_jetblack_coreset_topdown_1.png',
              stock: 10,
            },
            {
              name: 'Stick PS5',
              title: 'Stick PS5 Murah',
              category: 'Tech',
              published: false,
              description: 'Ini Stick PS5',
              image:
                'https://m.media-amazon.com/images/I/612bjwBuobS._AC_UF1000,1000_QL80_.jpg',
              stock: 10,
            },
          ],
        },
      },
    },
  });

  const Doe = await prisma.user.upsert({
    where: { email: 'doe@doe.com' },
    update: {},
    create: {
      email: 'doe@doe.com',
      name: 'Doe Chirs',
      hash: '123',
      role: 'USER',
      Order: {
        create: {
          quantity: 2,
          total: 210,
          products: {
            connect: [
              {
                id: '6161be92898d94dbaf9e5e84',
              },
              {
                id: '6161be92898d94dbaf9e5e85',
              },
            ],
          },
        },
      },
    },
  });

  console.log({ fazrul, John, Doe });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
