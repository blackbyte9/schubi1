import BookDetail from '@/component/books/detail-book';
import { AddItemDialog } from '@/component/items/add-item';
import { ItemsByIsbnTable } from '@/component/items/show-item';

export default async function Page({ params }: { params: { isbn: string } }) {
    const { isbn } = await params;
    return (
        <div>
            <BookDetail isbn={isbn} />
            <div className="flex justify-end mb-4">
                <AddItemDialog isbn={isbn} />
            </div>
            <ItemsByIsbnTable isbn={isbn} />
        </div>
    );
};
