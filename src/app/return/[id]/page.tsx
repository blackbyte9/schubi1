
import { ItemInput } from "@/component/items/item-input";
import { LeaseTable } from "@/component/leases/table/data-table";
import { StudentDetailCard } from "@/component/students/card";
import { getActiveLeasesByStudent } from "@/lib/leases/data";

export default async function Page({ params }: { params: { id: string | string[] } }) {
    const { id } = await params;
    const leases = await getActiveLeasesByStudent(+id);

    return (
        <div>
            <StudentDetailCard params={{ id: id }} />
            <ItemInput option={"return"} />
            <br />
            <LeaseTable data={leases ?? []} />
        </div>
    );
};
