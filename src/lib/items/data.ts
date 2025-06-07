import { prisma } from "../prisma";
import { Item, Status } from "./types";

export async function getItems(): Promise<Item[]> {
  const items = await prisma.item.findMany({
    where: {
      status: { not: Status.REMOVED }
    },
  });
  // Map DB fields to item type
  return items.map(({ isbn, id, status }) => ({
    isbn,
    id,
    status: status as Status
  }));
}

export async function getItemById(id: string): Promise<Item | null> {
  const item = await prisma.item.findUnique({
    where: { id },
  });
  // Map DB fields to Item type
  return item ? { isbn: item.isbn, id: item.id, status: item.status as Status } : null;
}

export async function getItemsByIsbn(isbn: string): Promise<Item[]> {
  const items = await prisma.item.findMany({
    where: { isbn, status: { not: Status.REMOVED } },
  });
  // Map DB fields to Item type
  return items.map(({ id, status }) => ({
    isbn,
    id,
    status: status as Status
  }));
}
