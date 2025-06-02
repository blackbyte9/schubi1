import { prisma } from "../prisma";
import { Item, Status } from "./types";

export async function getItems(): Promise<Item[]> {
  const items = await prisma.item.findMany({
    where: {
      status: { not: Status.REMOVED }
    },
  });
  // Map DB fields to Book type
  return items.map(({ isbn, id, status }) => ({
    isbn,
    id,
    status: status as Status
  }));
}
