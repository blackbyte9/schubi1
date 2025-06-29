import { Suspense } from 'react';
import { readStudents } from '@/lib/students/read';
import Students from './table/table-wrapper';

export default function AllStudentsTable() {
  const students = readStudents();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Students students={students} />
    </Suspense>
  );
}
