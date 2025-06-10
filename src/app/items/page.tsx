import { ItemTable } from '@/component/items/table/data-table';
import { getItems } from '@/lib/items/data';

const Items = async () => {
    const items = await getItems();

    return (
        <div>
            <h2>Items</h2>
            <ItemTable data={items} />
        </div>
    );
};

export default Items;
