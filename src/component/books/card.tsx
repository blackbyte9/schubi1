import { DetailCard } from "@/component/detail/card";
import { readBookByIsbn } from "@/lib/books/read";
import { BookTitle } from "./title";

export async function BookDetailCard({ params }: { params: { isbn: string | string[] } }) {
    const { isbn } = await params;
    const book = await readBookByIsbn(isbn as string);
    if (!book) {
        return (
        <div className="p-4">
            <DetailCard title="No Book Found">
                <div>Please select a book</div>
            </DetailCard>
        </div>
    );
    }
    const title = await BookTitle(book?.isbn, book?.name);
    return (
        <div className="p-4">
            <DetailCard title={title}>
                <div>Count of Items: {book?.itemCount}</div>
                <div>Count of leased Items: {book?.leasedCount}</div>
            </DetailCard>
        </div>
    );
}
