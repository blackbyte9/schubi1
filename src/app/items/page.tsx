import { ItemTable } from '@/component/items/table/data-table';
import { readItems } from '@/lib/items/read';

const Items = async () => {
    const items = await readItems();

    return (
        <div>
            <h2>Items</h2>
            <ItemTable data={items} />
        </div>
    );
};

export default Items;
