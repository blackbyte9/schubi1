"use server";

import { Book, PrismaClient } from '@/lib/prisma/client';

const prisma = new PrismaClient();

export async function createBook(book: Book): Promise<Book | null> {

    return await prisma.book.create({
        data: book,
    });
}
