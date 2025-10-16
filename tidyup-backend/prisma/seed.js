import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Create users
  await prisma.user.createMany({
    data: [
      { name: 'Admin User', email: 'admin@tidyup.com', password: 'admin123' },
      { name: 'Test User 1', email: 'test1@tidyup.com', password: 'test123' },
      { name: 'Test User 2', email: 'test2@tidyup.com', password: 'test123' },
    ],
    skipDuplicates: true,
  });

  console.log('✅ Seed data inserted successfully!');
}

main()
  .then(() => prisma.$disconnect())
  .catch((err) => {
    console.error(err);
    prisma.$disconnect();
  });
