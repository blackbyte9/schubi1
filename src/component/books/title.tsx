import { readBookByIsbn } from "@/lib/books/read";

export async function BookTitle(isbn: string, title?: string): Promise<string> {
    if (title === undefined || title.length === 0) {
        const book = await readBookByIsbn(isbn);
        title = book?.name;
    }
    return (
        ` ${title} (${isbn})`
    );
}
