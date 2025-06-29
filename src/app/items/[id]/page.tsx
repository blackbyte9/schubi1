
import ItemDetail from '@/component/items/detail-item';
import { LeaseTable } from '@/component/leases/table/data-table';
import { readLeasesByItem } from '@/lib/leases/read';

export default async function Page({ params }: { params: { id: string } }) {
    const { id } = await params;
    const leases = await readLeasesByItem(Array.isArray(id) ? id[0] : id);

    return (
        <div>
            <ItemDetail id={id} />
            <LeaseTable data={leases ?? []} />
        </div>
    );
};
