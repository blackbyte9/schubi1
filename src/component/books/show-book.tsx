import { readBooks } from '@/lib/books/read';
import { Suspense } from 'react';
import Books from './table/table-wrapper';

export default function AllBooksTable() {
  const books = readBooks();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Books books={books} />
    </Suspense>
  );
}
