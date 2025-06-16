import { BookTitle } from "@/component/books/title";
import { DetailCard } from "@/component/detail/card";
import { readItemById } from "@/lib/items/read";
import { ItemTitle } from "../title";

export async function ItemDetailCard({ params }: { params: { id: string | string[] } }) {
    const { id } = await params

    const item = await readItemById(id as string);
    if (!item) {
        return <div>Item not found</div>;
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
    )
}
