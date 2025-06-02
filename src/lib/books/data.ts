import { prisma } from "../prisma";
import { Book } from "./types";

export async function getBooks(): Promise<Book[]> {
  const dbBooks = await prisma.book.findMany();
  // Map DB fields to Book type
  return dbBooks.map(({ isbn, name }) => ({ isbn, name }));
}

export async function getBookByIsbn(isbn: string): Promise<Book | null> {
  const dbBook = await prisma.book.findUnique({
    where: { isbn },
  });
  // Map DB fields to Book type
  return dbBook ? { isbn: dbBook.isbn, name: dbBook.name } : null;
}