"use server";

import { Book, PrismaClient } from '@/lib/prisma/client';

const prisma = new PrismaClient();

export async function updateBook(book: Book): Promise<Book | null> {

    return await prisma.book.update(
        {
            where: { isbn: book.isbn },
            data: {
                name: book.name,
            },
        }
    );
}
