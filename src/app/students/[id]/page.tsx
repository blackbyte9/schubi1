import {columns} from "@/component/leases/table/columns";
import {DataTable} from "@/component/leases/table/data-table";
import { getLeasesByStudent } from "@/lib/leases/data";
import { getStudentById } from '@/lib/students/data';

export default async function Page ({ params }: { params: { id: string | string[] } }) {
    const { id } = await params
    const student = await getStudentById(+id);
    const leases = await getLeasesByStudent(+id);
    if (!student) {
        return <div>Student ({id}) not found</div>;
    }

    return (
        <div>
            <h2>{student?.firstname} {student?.lastname} ({student?.id}) ... {student?.course}</h2>
            <DataTable columns={columns} data={leases ?? []} />
        </div>
    );
};
