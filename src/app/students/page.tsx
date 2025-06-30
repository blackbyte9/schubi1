import { AddStudentDialog } from '@/component/students/add-student';
import AllStudentsTable from '@/component/students/show-student';

const Students = async () => {
    return (
        <div>
            <h2>Students</h2>
            <div className="flex justify-end mb-4">
                <AddStudentDialog />
            </div>
            <AllStudentsTable />
        </div>
    );
};

export default Students;
