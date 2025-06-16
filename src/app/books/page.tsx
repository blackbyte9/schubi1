import { AddBookDialog } from '@/component/books/detail/AddBook';
import { BookTable } from '@/component/books/table/data-table';
import { getBooks } from '@/lib/books/data';

export default async function Page() {

    const books = await getBooks();

    return (
        <div>
            <h2>Books</h2>
            <div className="flex justify-end mb-4">
                <AddBookDialog />
            </div>
            <BookTable data={books} />
        </div>
    );
};
