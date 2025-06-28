import { prisma } from "../prisma";
import { Student } from "./types";

export async function readStudents(): Promise<Student[]> {
  const dbStudents = await prisma.student.findMany({
    include: {
      Borrow: {
        where: {
          active: true,
        },
      },
    },
  });

  // Map DB fields to Book type
  return dbStudents.map(({ id, firstname, lastname, course, Borrow }) => ({ id, firstname, lastname, course, leases: Borrow.length }));
}

export async function readStudentById(id: number): Promise<Student | null> {
  const dbStudent = await prisma.student.findUnique({
    where: { id },
  });
  // Map DB fields to Book type
  return dbStudent ? { id: dbStudent.id, firstname: dbStudent.firstname, lastname: dbStudent.lastname, course: dbStudent.course } : null;
}
