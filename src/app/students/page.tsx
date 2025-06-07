import { DataTable } from '@/component/students/table/data-table';
import { columns } from '@/component/students/table/columns';
import { getStudents } from '@/lib/students/data';

const Students = async () => {
    const students = await getStudents();

    return (
        <div>
            <h2>Items</h2>
            <DataTable columns={columns} data={students} />
        </div>
    );
};

export default Students;
