import { auth } from "@/auth"
import { readItems } from "@/lib/items/read";

export const GET = auth(async (req) => {
  if (req.auth) {
    const items = await readItems();
    return Response.json(items.sort((a, b) => a.id.localeCompare(b.id)));
  }

  return Response.json({ message: "Not authenticated" }, { status: 401 })
})
