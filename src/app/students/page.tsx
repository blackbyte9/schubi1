import { StudentTable } from '@/component/students/table/data-table';
import { readStudents } from '@/lib/students/read';

const Students = async () => {
    const students = await readStudents();
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
