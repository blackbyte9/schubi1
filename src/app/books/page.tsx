import { AddBookDialog } from '@/component/books/add-book';
import { BookTable } from '@/component/books/table/data-table';
import { readBooks } from '@/lib/books/read';

export default async function Page() {

    const books = await readBooks();

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
