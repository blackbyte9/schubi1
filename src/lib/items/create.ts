"use server";

import { Item, PrismaClient, Status } from '@/lib/prisma/client';

const prisma = new PrismaClient();

export async function createItem(book: string, id: string): Promise<Item | null> {

    const item = {
        isbn: book as string,
        id: id as string,
        status: Status.NEW, // Use the Status enum for the status property
    };
    return await prisma.item.create({
        data: item,
    });
}
