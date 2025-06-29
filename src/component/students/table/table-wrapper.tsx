'use client';

import { use } from 'react';
import { StudentTable } from './data-table';
import { Student } from '@/lib/students/types';

export default function Students({
  students,
}: {
  students: Promise<Student[]>
}) {
  const allStudents = use(students);

  return (
    <StudentTable data={allStudents} />
  );
}
