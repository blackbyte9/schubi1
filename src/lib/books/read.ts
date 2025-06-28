"use server";

import { prisma } from "../prisma";
import { Book } from "./types";
import { Status } from "../items/types";
import { readLeasedItemsByIsbn } from "../items/read";

export async function readBooks(): Promise<Book[]> {
  const dbBooks = await prisma.book.findMany({
    include: {
      items: {
        where: { status: { not: Status.REMOVED } },
        select: { id: true },
      },
      _count: {
        select: {
          items: {
            where: { status: { not: Status.REMOVED }, Borrow: { some: { active: true } } },
          }
        }
      },
    },
  },);

  // Map DB fields to Book type
  return dbBooks.map(({ isbn, name, items, _count }) => ({ isbn, name, itemCount: items.length, leasedCount: _count.items }));
}

export async function readBookByIsbn(isbn: string): Promise<Book | null> {
  const dbBook = await prisma.book.findUnique({
    where: { isbn },
    include: {
      items: {
        where: { status: { not: Status.REMOVED } },
        select: { id: true },
      },
    },
  });
  const leaseCount = (await readLeasedItemsByIsbn(isbn)).length;
  // Map DB fields to Book type
  return dbBook ? { isbn: dbBook.isbn, name: dbBook.name, itemCount: dbBook.items.length, leasedCount: leaseCount } : null;
}
