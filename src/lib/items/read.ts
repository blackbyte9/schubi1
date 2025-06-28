import { prisma } from "../prisma";
import { Item, Status } from "./types";

export async function readItems(): Promise<Item[]> {
  const items = await prisma.item.findMany({
    where: {
      status: { not: Status.REMOVED }
    },
    include: {
      Borrow: {
        where: { active: true },
        select: { id: true },
      },
    },
  });
  // Map DB fields to item type
  return items.map(({ isbn, id, status, Borrow }) => ({
    isbn,
    id,
    status: status as Status,
    leased: Borrow.length > 0
  }));
}

export async function readItemById(id: string): Promise<Item | null> {
  const item = await prisma.item.findUnique({
    where: { id },
    include: {
      Borrow: {
        where: { active: true },
        select: { id: true },
      },
    },
  });
  // Map DB fields to Item type
  return item ? { isbn: item.isbn, id: item.id, status: item.status as Status, leased: item.Borrow.length > 0 } : null;
}

export async function readItemsByIsbn(isbn: string): Promise<Item[]> {
  const items = await prisma.item.findMany({
    where: { isbn, status: { not: Status.REMOVED } },
    include: {
      Borrow: {
        where: { active: true },
        select: { id: true },
      },
    },
  });
  // Map DB fields to Item type
  return items.map(({ id, status, Borrow }) => ({
    isbn,
    id,
    status: status as Status,
    leased: Borrow.length > 0
  }));
}

export async function readLeasedItemsByIsbn(isbn: string): Promise<Item[]> {
  const items = await prisma.item.findMany({
    where: {
      isbn,
      status: { not: Status.REMOVED },
      Borrow: {
        some: { active: true }
      }
    },
  });
  // Map DB fields to Item type
  return items.map(({ id, status }) => ({
    isbn,
    id,
    status: status as Status
  }));
}

export async function readLeasedItemsByStudent(studentId: number): Promise<Item[]> {
  const items = await prisma.item.findMany({
    where: {
      Borrow: {
        some: {
          studentId,
          active: true
        }
      },
      status: { not: Status.REMOVED }
    },
  });
  // Map DB fields to Item type
  return items.map(({ id, isbn, status }) => ({
    isbn,
    id,
    status: status as Status
  }));
}
