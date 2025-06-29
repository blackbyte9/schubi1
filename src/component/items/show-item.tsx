import { Suspense } from 'react';
import { readItems, readItemsByIsbn } from '@/lib/items/read';
import Items from './table/table-wrapper';

export default function AllItemsTable() {
  const items = readItems();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Items items={items} />
    </Suspense>
  );
}

export function ItemsByIsbnTable(props: {
  isbn: string,
}) {
  const items = readItemsByIsbn(props.isbn);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Items items={items} />
    </Suspense>
  );
}
