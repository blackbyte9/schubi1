import { getItemById } from '@/lib/items/data';

export default async function Page ({ params }: { params: { id: string | string[] } }) {
    const { id } = await params
    const item = await getItemById(id as string);
    if (!item) {
        return <div>Item not found</div>;
    }

    return (
        <div>
            <h2>{item?.id} ({item?.isbn}) ... Status {item.status}</h2>
        </div>
    );
};
