'use client';

import { use } from 'react';
import { ItemTable } from './data-table';
import { Item } from '@/lib/items/types';

export default function Items({
  items,
}: {
  items: Promise<Item[]>
}) {
  const allItems = use(items);

  return (
    <ItemTable data={allItems} />
  );
}
