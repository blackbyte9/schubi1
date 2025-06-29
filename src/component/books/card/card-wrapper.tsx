'use client';
import type { Book } from '@/lib/books/types';
import { use } from 'react';
import { BookDetailCard } from './card';
import { DetailCard } from '@/component/detail/card';

export default function Book_({
  book,
}: {
  book: Promise<Book | null>
}) {
  const bookDetail = use(book);

  if (bookDetail === null) {
    return (
      <div className="p-4">
        <DetailCard title="Book not found">
          <div>Please select a book</div>
        </DetailCard>
      </div>
    );
  }

  return (
    <BookDetailCard data={bookDetail} />
  );
}
