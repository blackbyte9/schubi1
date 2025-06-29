'use client';

import { use } from 'react';
import { DetailCard } from '@/component/detail/card';
import { Student } from '@/lib/students/types';
import { StudentDetailCard } from './card';

export default function Student_({
  student,
}: {
  student: Promise<Student | null>
}) {
  const studentDetail = use(student);

  if (studentDetail === null) {
    return (
      <div className="p-4">
        <DetailCard title="Item not found">
          <div>Please select an Item</div>
        </DetailCard>
      </div>
    );
  }

  return (
    <StudentDetailCard data={studentDetail} />
  );
}
