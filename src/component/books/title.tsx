import { getBookByIsbn } from "@/lib/books/data";


export async function BookTitle(isbn: string, title?: string): Promise<string> {
    if (title === undefined || title.length === 0) {
        const book = await getBookByIsbn(isbn);
        title = book?.name;
    }
    return (
        ` ${title} (${isbn})`
    );
}
