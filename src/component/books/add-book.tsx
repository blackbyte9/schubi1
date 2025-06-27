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
import { createBook } from "@/lib/books/add";
import { FilePlus } from "lucide-react";

export function AddBookDialog() {
    const handleSubmit = async (formData: FormData) => {
        const book = {
            isbn: formData.get("isbn") as string,
            name: formData.get("title") as string,
        };
        await createBook(book);
        onBookCreated();
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>
                    <FilePlus />
                    Add Book
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
                        <DialogTitle>New Book</DialogTitle>
                        <DialogDescription>
                            Scan or write the ISBN of the book (without dashes or spaces).<br />
                            Enter the Title.<br />
                            Click save when you&apos;re done.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4">
                        <div className="grid gap-3">
                            <Label htmlFor="isbn">ISBN</Label>
                            <Input id="isbn" name="isbn" defaultValue="" />
                        </div>
                        <div className="grid gap-3">
                            <Label htmlFor="title">Title</Label>
                            <Input id="title" name="title" defaultValue="" />
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

function onBookCreated() {
    // Refresh the page or data after a book is edited
    if (typeof window !== "undefined") {
        window.location.reload();
    }
}
