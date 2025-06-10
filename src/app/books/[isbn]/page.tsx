import { BookDetailCard } from '@/component/books/detail/card';
import { ItemTable } from '@/component/items/table/data-table';
import { getItemsByIsbn } from '@/lib/items/data';

export default async function Page({ params }: { params: { isbn: string } }) {
    const { isbn } = await params;
    const items = await getItemsByIsbn(isbn);

    return (
        <div>
            <BookDetailCard params={{ isbn: isbn }} />
            <ItemTable data={items ?? []} />
        </div>
    );
};
