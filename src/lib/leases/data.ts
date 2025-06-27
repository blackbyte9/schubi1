import { prisma } from "../prisma";
import { Lease } from "./types";

export async function getLeasesByStudent(id: number): Promise<Lease[]> {
  const dbLeases = await prisma.borrow.findMany({
    where: { studentId: id },
  });

  // Map DB fields to Book type
  return dbLeases.map(({ id, itemId, studentId, active, leased, returned }) => ({ id, item: itemId, student: studentId, active, leased, returned }));
}

export async function getLeasesByItem(id: string): Promise<Lease[]> {
  const dbLeases = await prisma.borrow.findMany({
    where: { itemId: id },
  });
    // Map DB fields to Book type
  return dbLeases.map(({ id, itemId, studentId, active, leased, returned }) => ({ id, item: itemId, student: studentId, active, leased, returned }));
}

export async function getActiveLeasesByStudent(id: number): Promise<Lease[]> {
  const dbLeases = await prisma.borrow.findMany({
    where: { studentId: id, active: true,},
  });

  // Map DB fields to Book type
  return dbLeases.map(({ id, itemId, studentId, active, leased, returned }) => ({ id, item: itemId, student: studentId, active, leased, returned }));
}

