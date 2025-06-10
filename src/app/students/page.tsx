import { StudentTable } from '@/component/students/table/data-table';
import { getStudents } from '@/lib/students/data';

const Students = async () => {
    const students = await getStudents();
    if (!students) {
        return <div>No students found</div>;
    }
    return (
        <div>
            <h2>Students</h2>
            <StudentTable data={students} />
        </div>
    );
};

export default Students;
