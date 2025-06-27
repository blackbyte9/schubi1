import { BookDetailCard } from '@/component/books/card';
import { AddItemDialog } from '@/component/items/add-item';
import { ItemTable } from '@/component/items/table/data-table';
import { readItemsByIsbn } from '@/lib/items/read';

export default async function Page({ params }: { params: { isbn: string } }) {
    const { isbn } = await params;
    const items = await readItemsByIsbn(isbn);

    return (
        <div>
            <BookDetailCard params={{ isbn: isbn }} />
            <div className="flex justify-end mb-4">
                <AddItemDialog isbn={isbn} />
            </div>
            <ItemTable data={items ?? []} />
        </div>
    );
};
