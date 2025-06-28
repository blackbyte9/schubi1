import { readStudentById } from "@/lib/students/read";

export async function StudentTitle(id: number, firstName?: string | undefined, lastName?: string | undefined, course?: string | undefined): Promise<string> {
    if (lastName === undefined || lastName.length === 0) {
        const student = await readStudentById(id);
        firstName = student?.firstname;
        lastName = student?.lastname;
        course = student?.course ?? undefined;
    }
    return (
        ` ${lastName},  ${firstName} (${course})`
    );
}
