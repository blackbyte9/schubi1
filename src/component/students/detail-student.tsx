
import { Suspense } from 'react';
import Student_ from './card/card-wrapper';
import { readStudentById } from '@/lib/students/read';

export default function StudentDetail(props: {
    id: number,
}) {
    const student = readStudentById(+props.id);

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Student_ student={student} />
        </Suspense>
    );
}
