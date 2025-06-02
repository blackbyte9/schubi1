import { getBookByIsbn } from '@/lib/books/data';

export default async function Page ({ params }: { params: { isbn: string | string[] } }) {
    const { isbn } = await params
    const book = await getBookByIsbn(isbn as string);
    if (!book) {
        return <div>Book not found</div>;
    }

    return (
        <div>
            <h2>{book?.name} ({book?.isbn})</h2>
        </div>
    );
};
