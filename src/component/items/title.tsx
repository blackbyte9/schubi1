import { readItemById } from "@/lib/items/read";


export async function ItemTitle(id: string, isbn?: string): Promise<string> {
    if (isbn === undefined || isbn.length === 0) {
        const item = await readItemById(id);
        isbn = item?.isbn;
    }
    return (
        ` ${id} (${isbn})`
    );
}
