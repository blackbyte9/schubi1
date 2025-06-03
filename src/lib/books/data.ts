import { prisma } from "../prisma";
import { Book } from "./types";

//TODO filter count to exclude REMOVED items

export async function getBooks(): Promise<Book[]> {
  const dbBooks = await prisma.book.findMany({
  include: {
    _count: {
      select: { items: true },
    },
  },
});
  // Map DB fields to Book type
  return dbBooks.map(({ isbn, name, _count }) => ({ isbn, name, itemCount: _count.items }));
}

export async function getBookByIsbn(isbn: string): Promise<Book | null> {
  const dbBook = await prisma.book.findUnique({
    where: { isbn },
    include: {
    _count: {
      select: { items: true },
    },
  },
  });
  // Map DB fields to Book type
  return dbBook ? { isbn: dbBook.isbn, name: dbBook.name, itemCount: dbBook._count.items } : null;
}