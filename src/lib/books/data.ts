import { prisma } from "../prisma";
import { Book } from "./types";
import { Status } from "../items/types";
import { getLeasedItemsByIsbn } from "../items/data";

export async function getBooks(): Promise<Book[]> {
  const dbBooks = await prisma.book.findMany({
    include: {
      items: {
        where: { status: { not: Status.REMOVED } },
        select: { id: true },
      },
    },
  });

  const leaseCount: { [isbn: string]: number } = {};
  for (const book of dbBooks) {
    leaseCount[book.isbn as string] = (await getLeasedItemsByIsbn(book.isbn)).length;
  }

  // Map DB fields to Book type
  return dbBooks.map(({ isbn, name, items }) => ({ isbn, name, itemCount: items.length, leasedCount: leaseCount[isbn as string] || 0 }));
}

export async function getBookByIsbn(isbn: string): Promise<Book | null> {
  const dbBook = await prisma.book.findUnique({
    where: { isbn },
    include: {
      items: {
        where: { status: { not: Status.REMOVED } },
        select: { id: true },
      },
    },
  });
  const leaseCount = (await getLeasedItemsByIsbn(isbn)).length;
  // Map DB fields to Book type
  return dbBook ? { isbn: dbBook.isbn, name: dbBook.name, itemCount: dbBook.items.length, leasedCount: leaseCount } : null;
}