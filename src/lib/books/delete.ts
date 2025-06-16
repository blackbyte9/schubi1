"use server";

import { Book, PrismaClient } from '@/lib/prisma/client';

const prisma = new PrismaClient();

export async function deleteBook(book: Book): Promise<Book | null> {

    return await prisma.book.delete(
        {
            where: { isbn: book.isbn },
        }
    );
}
