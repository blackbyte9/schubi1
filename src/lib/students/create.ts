"use server";

import { PrismaClient } from '@/lib/prisma/client';
import { Student } from './types';

const prisma = new PrismaClient();

export async function createStudent(student: Student): Promise<Student | null> {

    return await prisma.student.create({
        data: student,
    });
}
