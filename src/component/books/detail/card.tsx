import { DetailCard } from "@/component/detail/card";
import { getBookByIsbn } from "@/lib/books/data";
import { BookTitle } from "../title";

export async function BookDetailCard({ params }: { params: { isbn: string | string[] } }) {
    const { isbn } = await params
    const book = await getBookByIsbn(isbn as string);
    if (!book) {
        return <div className="p-4">Book not found</div>;
    }
    const title = await BookTitle(book?.isbn, book?.name);
    return (
        <div className="p-4">
            <DetailCard title={title}>
                <div>Count of Items: {book?.itemCount}</div>
                <div>Count of leased Items: {book?.leasedCount}</div>
            </DetailCard>
        </div>
    )
}
