import { DetailCard } from "@/component/detail/card";
import { Item } from "@/lib/items/types";

interface ItemDetailProps<TData> {
  data: TData extends Item ? TData : Item
}

export function ItemDetailCard<TData extends Item>({
  data
}: ItemDetailProps<TData>) {

  const title = data.id + " (" + data.isbn + ")";
  //TODO add Name of the book
  return (
    <div className="p-4">
      <DetailCard title={title}>
        <div> {data.isbn}</div>
        <div> Status: {data.status}</div>
        <div>Leased: {data.leased ? 'Yes' : 'No'}</div>
      </DetailCard>
    </div>
  );
}
