import { getItemById } from "@/lib/items/data";


export async function ItemTitle(id: string, isbn?: string): Promise<string> {
    if (isbn === undefined || isbn.length === 0) {
        const item = await getItemById(id);
        isbn = item?.isbn;
    }
    return (
        ` ${id} (${isbn})`
    );
}
