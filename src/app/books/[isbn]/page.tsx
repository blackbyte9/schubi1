import { columns } from '@/component/items/table/columns';
import { DataTable } from '@/component/items/table/data-table';
import { getBookByIsbn } from '@/lib/books/data';
import { getItemsByIsbn } from '@/lib/items/data';

export default async function Page({ params }: { params: { isbn: string | string[] } }) {
    const { isbn } = await params
    const book = await getBookByIsbn(isbn as string);
    if (!book) {
        return <div>Book not found</div>;
    }
    const items = await getItemsByIsbn(book.isbn);

    return (
        <div>
            <h2>{book?.name} ({book?.isbn})</h2>
            <div>Count of Items: {book.itemCount}</div>
            <div>Count of leased Items: {book.leasedCount}</div>
            <DataTable columns={columns} data={items ?? []} />
        </div>
    );
};
