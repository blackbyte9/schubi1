import { readBookByIsbn } from '@/lib/books/read';
import { Suspense } from 'react';
import Book_ from './card/card-wrapper';

export default function BookDetail(props: {
    isbn: string,
}) {
    const book = readBookByIsbn(props.isbn);

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Book_ book={book} />
        </Suspense>
    );
}
