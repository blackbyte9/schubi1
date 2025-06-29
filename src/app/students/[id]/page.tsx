
import { LeaseTable } from "@/component/leases/table/data-table";
import StudentDetail from "@/component/students/detail-student";
import { readLeasesByStudent } from "@/lib/leases/read";

export default async function Page({ params }: { params: { id: number } }) {
    const { id } = await params;
    const leases = await readLeasesByStudent(+id);

    return (
        <div>
            <StudentDetail id={id} />

            <LeaseTable data={leases ?? []} />
        </div>
    );
};
