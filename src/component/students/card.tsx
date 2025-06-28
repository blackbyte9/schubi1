import { DetailCard } from "@/component/detail/card";
import { StudentTitle } from "./title";
import { readStudentById } from "@/lib/students/read";

export async function StudentDetailCard({ params }: { params: { id: string | string[] } }) {
    const { id } = await params;

    const student = await readStudentById(+id);
    if (!student) {
        return <div>Student not found</div>;
    }
    const title = await StudentTitle(
        student.id,
        student.firstname ?? undefined,
        student.lastname ?? undefined,
        student.course ?? undefined
    );

    return (
        <div className="p-4">
            <DetailCard title={title}>
                <div>First Name: {student.firstname}</div>
                <div>Last Name: {student.lastname}</div>
                <div>Course: {student.course}</div>
            </DetailCard>
        </div>
    );
}
