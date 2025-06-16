"use client"


import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { createItem } from "@/lib/items/create"
import { FilePlus } from "lucide-react"

export function AddItemDialog(props: {
    onItemCreated?: () => void,
    isbn: string,
}) {
    const handleSubmit = async (formData: FormData, isbn: string) => {
        await createItem(isbn, formData.get("id") as string);
        if (props.onItemCreated) {
            props.onItemCreated();
        }
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>
                    <FilePlus />
                    Add Item
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <form
                    onSubmit={e => {
                        e.preventDefault();
                        const formData = new FormData(e.currentTarget);
                        handleSubmit(formData, props.isbn);
                    }}
                >
                    <DialogHeader>
                        <DialogTitle>New Item</DialogTitle>
                        <DialogDescription>
                            Scan or write the Id of the Item (from the label ... starting with RSV...).<br />
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
    )
}
