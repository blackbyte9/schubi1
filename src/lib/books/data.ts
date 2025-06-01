import { prisma } from "../prisma";
import { Book } from "./types";

export async function getBooks(): Promise<Book[]> {
  const dbBooks = await prisma.book.findMany();
  // Map DB fields to Book type
  return dbBooks.map(({ isbn, name }) => ({ isbn, name }));
}
