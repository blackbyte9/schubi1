'use client';
import { Book } from '@/lib/books/types';
import { use } from 'react';
import { BookTable } from './data-table';

export default function Books({
  books,
}: {
  books: Promise<Book[]>
}) {
  const allBooks = use(books);

  return (
    <BookTable data={allBooks} />
  );
}
