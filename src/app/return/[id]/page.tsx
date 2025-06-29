
import { ItemInput } from "@/component/items/item-input";
import { LeasesByStudentTable } from "@/component/leases/show-lease";
import StudentDetail from "@/component/students/detail-student";

export default async function Page({ params }: { params: { id: number } }) {
    const { id } = await params;

    return (
        <div>
            <StudentDetail id={id} />
            <ItemInput option={"return"} />
            <br />
            <LeasesByStudentTable id={+id} />
        </div>
    );
};
