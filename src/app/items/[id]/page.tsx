import { ItemDetailCard } from '@/component/items/detail/card';
import { LeaseTable } from '@/component/leases/table/data-table';
import { getLeasesByItem } from '@/lib/leases/data';

export default async function Page({ params }: { params: { id: string | string[] } }) {
    const { id } = await params
    const leases = await getLeasesByItem(Array.isArray(id) ? id[0] : id);

    return (
        <div>
            <ItemDetailCard params={{ id: id }} />
            <LeaseTable data={leases ?? []} />
        </div>
    );
};
