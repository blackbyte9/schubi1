
import { LeaseTable } from "@/component/leases/table/data-table";
import { StudentDetailCard } from "@/component/students/detail/card";
import { getLeasesByStudent } from "@/lib/leases/data";

export default async function Page({ params }: { params: { id: string | string[] } }) {
    const { id } = await params
    const leases = await getLeasesByStudent(+id);

    return (
        <div>
            <StudentDetailCard params={{ id: id }} />

            <LeaseTable data={leases ?? []} />
        </div>
    );
};
