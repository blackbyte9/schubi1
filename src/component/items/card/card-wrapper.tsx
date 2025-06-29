'use client';

import { use } from 'react';
import { ItemDetailCard } from './card';
import { DetailCard } from '@/component/detail/card';
import { Item } from '@/lib/items/types';

export default function Item_({
  item,
}: {
  item: Promise<Item | null>
}) {
  const itemDetail = use(item);

  if (itemDetail === null) {
    return (
      <div className="p-4">
        <DetailCard title="Item not found">
          <div>Please select an Item</div>
        </DetailCard>
      </div>
    );
  }

  return (
    <ItemDetailCard data={itemDetail} />
  );
}
