import { getStudentById } from '@/lib/students/data';

export default async function Page ({ params }: { params: { id: string | string[] } }) {
    const { id } = await params
    const student = await getStudentById(+id);
    if (!student) {
        return <div>Student ({id}) not found</div>;
    }

    return (
        <div>
            <h2>{student?.firstname} {student?.lastname} ({student?.id}) ... {student?.course}</h2>
        </div>
    );
};
