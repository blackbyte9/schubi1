import { auth } from "@/auth"
import { getItems } from "@/lib/items/data";

export const GET = auth(async (req) => {
  if (req.auth) {
    const items = await getItems();
    return Response.json(items.sort((a, b) => a.id.localeCompare(b.id)));
  }

  return Response.json({ message: "Not authenticated" }, { status: 401 })
})