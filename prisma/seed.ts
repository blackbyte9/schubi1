import { PrismaClient, Status } from '@/lib/prisma/client';

import books from '../data/books.json';
import items from '../data/items.json';

const prisma = new PrismaClient();

const seed = async () => {
    // clean up before the seeding (option)
    await prisma.book.deleteMany();
    await prisma.item.deleteMany();

    // you could also use createMany
    // but it is not supported for databases
    // e.g. SQLite https://github.com/prisma/prisma/issues/10710
    for (const book of books) {
        await prisma.book.create({
            data: book,
        });
    }

    for (const item of items) {
        await prisma.item.create({
            data: {
                ...item,
                status: item.status as Status,
            },
        });
    }
};

seed();
