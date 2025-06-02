import { DataTable } from '@/component/items/table/data-table';
import { columns } from '@/component/items/table/columns';
import { getItems } from '@/lib/items/data';

const Items = async () => {
    const items = await getItems();

    return (
        <div>
            <h2>Items</h2>
            <DataTable columns={columns} data={items} />
        </div>
    );
};

export default Items;
