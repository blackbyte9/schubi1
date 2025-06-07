import { prisma } from "../prisma";
import { Student } from "./types";

export async function getStudents(): Promise<Student[]> {
  const dbStudents = await prisma.student.findMany();

  // Map DB fields to Book type
  return dbStudents.map(({ id, firstname, lastname, course }) => ({ id, firstname, lastname, course }));
}

export async function getStudentById(id: number): Promise<Student | null> {
  const dbStudent = await prisma.student.findUnique({
    where: { id },
  });
  // Map DB fields to Book type
  return dbStudent ? { id: dbStudent.id, firstname: dbStudent.firstname, lastname: dbStudent.lastname, course: dbStudent.course } : null;
}