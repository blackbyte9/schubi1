import { PrismaClient } from '@/lib/prisma/client';


import leases from '../data/leases.json';
import items from '../data/items.json';
import books from '../data/books.json';
import students from '../data/students.json';
import { Status } from '@/lib/items/types';

const prisma = new PrismaClient();

const seed = async () => {
    // clean up before the seeding (option)
    await prisma.borrow.deleteMany();
    await prisma.item.deleteMany();
    await prisma.book.deleteMany();
    await prisma.student.deleteMany();

    // you could also use createMany
    // but it is not supported for databases
    // e.g. SQLite https://github.com/prisma/prisma/issues/10710
    let cnt = 0;
    for (const book of books) {
        await prisma.book.create({
            data: book,
        });
        cnt++;
    }
    console.log("Seeded books:", cnt);
    cnt = 0;

    for (const item of items) {
        try {
            await prisma.item.create({
                data: {
                    id: item.id,
                    status: item.status as Status,
                    book: {
                        connect: {
                            isbn: item.bookId,
                        },
                    },
                },
            });
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
            await prisma.book.upsert({
                where: { isbn: item.bookId },
                update: {},
                create: {
                    isbn: item.bookId,
                    name: "unknown",
                },
            });
            await prisma.item.create({
                data: {
                    id: item.id,
                    status: item.status as Status,
                    book: {
                        connect: {
                            isbn: item.bookId,
                        },
                    },
                },
            });
        }
        cnt++;
    }
    console.log("Seeded items:", cnt);
    cnt = 0;

    for (const student of students) {
        await prisma.student.create({
            data: {
                idOld: +(student.idOld),
                firstname: student.firstname,
                lastname: student.lastname,
            }
        });
        cnt++;
    }
    console.log("Seeded students:", cnt);
    cnt = 0;

    for (const lease of leases) {
        const student = await prisma.student.findFirst({
            where: {
                idOld: +lease.studentId,
            },
            select: {
                id: true,
            },
        });
        const item = await prisma.item.findFirst({
            where: {
                id: lease.itemId,
            },
            select: {
                id: true,
            },
        });
        if (!student) {
            console.warn(`Student with idOld ${lease.studentId} not found. Skipping lease.`);
            continue;
        }
        if (!item) {
            console.warn(`Item with id ${lease.itemId} not found. Skipping lease.`);
            continue;
        }
        await prisma.borrow.create({
            data: {
                active: lease.active,
                leased: lease.leased,
                returned: lease.returned,
                item: {
                        connect: {
                            id: lease.itemId,
                        },
                    },
                student: {
                    connect: {
                        id: student.id,
                    },
                }
                //startDate: new Date(lease.startDate),
                //endDate: lease.endDate ? new Date(lease.endDate) : null,
            },
        });
        cnt++;
    }
    console.log("Seeded leases:", cnt);
};

seed();
