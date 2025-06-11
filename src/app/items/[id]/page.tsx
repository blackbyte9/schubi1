import { BookTitle } from '@/component/books/title';
import { ItemDetailCard } from '@/component/items/detail/card';
import { LeaseTable } from '@/component/leases/table/data-table';
import { getItemById } from '@/lib/items/data';
import { getLeasesByItem } from '@/lib/leases/data';

export default async function Page({ params }: { params: { id: string | string[] } }) {
    const { id } = await params
    const item = await getItemById(id as string);
    if (!item) {
        return <div>Item not found</div>;
    }
    const leases = await getLeasesByItem(Array.isArray(id) ? id[0] : id);

    return (
        <div>
            <ItemDetailCard params={{ id: id }} />
            <h2>{item?.id} ({item?.isbn}) ... Status {item.status}</h2>
            <p> {BookTitle(item.isbn)}</p>
            <p>Leased: {item.leased ? 'Yes' : 'No'}</p>
            <LeaseTable data={leases ?? []} />
        </div>
    );
};
