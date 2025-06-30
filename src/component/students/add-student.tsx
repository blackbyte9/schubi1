"use client";

import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createStudent } from "@/lib/students/create";
import { FilePlus } from "lucide-react";

export function AddStudentDialog() {
    const handleSubmit = async (formData: FormData) => {
        const student = {
            firstname: formData.get("firstname") as string,
            lastname: formData.get("lastname") as string,
            course: formData.get("course") as string,
            id: undefined
        };
        await createStudent(student);
        onStudentCreated();
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>
                    <FilePlus />
                    Add Student
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <form
                    onSubmit={e => {
                        e.preventDefault();
                        const formData = new FormData(e.currentTarget);
                        handleSubmit(formData);
                    }}
                >
                    <DialogHeader>
                        <DialogTitle>New Student</DialogTitle>
                        <DialogDescription>
                            Enter name and course.<br />
                            Click save when you&apos;re done.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4">
                        <div className="grid gap-3">
                            <Label htmlFor="firstname">First Name</Label>
                            <Input id="firstname" name="firstname" defaultValue="" />
                        </div>
                        <div className="grid gap-3">
                            <Label htmlFor="lastname">Last Name</Label>
                            <Input id="lastname" name="lastname" defaultValue="" />
                        </div>
                        <div className="grid gap-3">
                            <Label htmlFor="course">Course</Label>
                            <Input id="course" name="course" defaultValue="" />
                        </div>
                    </div>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="outline">Cancel</Button>
                        </DialogClose>
                        <DialogClose asChild>
                            <Button type="submit">Save changes</Button>
                        </DialogClose>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}

function onStudentCreated() {
    // Refresh the page or data after a book is edited
    if (typeof window !== "undefined") {
        window.location.reload();
    }
}
