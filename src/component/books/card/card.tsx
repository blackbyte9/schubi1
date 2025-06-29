import { DetailCard } from "@/component/detail/card";
import { Book } from "@/lib/books/types";

interface BookDetailProps<TData> {
  data: TData extends Book ? TData : Book
}

export function BookDetailCard<TData extends Book>({
  data
}: BookDetailProps<TData>) {

  const title = data.name + " (" + data.isbn + ")";

  return (
    <div className="p-4">
      <DetailCard title={title}>
        <div>Count of Items: {data.itemCount}</div>
        <div>Count of leased Items: {data.leasedCount}</div>
      </DetailCard>
    </div>
  );
}
