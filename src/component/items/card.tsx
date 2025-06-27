import { BookTitle } from "@/component/books/title";
import { DetailCard } from "@/component/detail/card";
import { readItemById } from "@/lib/items/read";
import { ItemTitle } from "@/component/items/title";

export async function ItemDetailCard({ params }: { params: { id: string | string[] } }) {
    const { id } = await params;

    const item = await readItemById(id as string);
    if (!item) {
        return (
        <div className="p-4">
            <DetailCard title="No Item Found">
                <div> Please select an Item</div>
            </DetailCard>
        </div>
    );
    }
    const title = await ItemTitle(item.id, item.isbn);

    return (
        <div className="p-4">
            <DetailCard title={title}>
                <div> {BookTitle(item.isbn)}</div>
                <div> Status: {item?.status}</div>
                <div>Leased: {item.leased ? 'Yes' : 'No'}</div>
            </DetailCard>
        </div>
    );
}
