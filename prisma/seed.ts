import { PrismaClient } from '@/lib/prisma/client';


import leases from '../data/leases.json';
import items from '../data/items.json';
import books from '../data/books.json';
import students from '../data/students.json';
import { Status } from '@/lib/items/types';

const prisma = new PrismaClient();

const seedInit = async () => {
    console.log("Cleanup DB before seeding...");
    await prisma.borrow.deleteMany();
    await prisma.item.deleteMany();
    await prisma.book.deleteMany();
    await prisma.student.deleteMany();
}

const seedBooks = async () => {
    console.log("Seeding books...");
    let cnt = 0;
    for (const book of books) {
        await prisma.book.create({
            data: book,
        });
        cnt++;
    }
    console.log("Seeded books:", cnt);
}

const seedItems = async () => {
    console.log("Seeding items...");
    let cnt = 0;
    for (const item of items) {
        await prisma.item.create({
            data: {
                id: item.id,
                status: item.status as Status,
                book: {
                    connectOrCreate: {
                        where: { isbn: item.bookId },
                        create: {
                            name: "Unknown Book", // Fallback if bookName is not provided
                            isbn: item.bookId,
                        }
                    },
                },
            }
        });
        cnt++;
    }
    console.log("Seeded items:", cnt);
    cnt = 0;
}

const seedStudents = async () => {
    console.log("Seeding students...");
    let cnt = 0;
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
}

const seedLeases = async () => {
    console.log("Seeding leases...");
    let cnt = 0;
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
}

const seed = async () => {
    await seedInit();
    
    await seedBooks();
    await seedItems();
    await seedStudents();
    await seedLeases();
    console.log("Seeding completed.");
};

seed();
