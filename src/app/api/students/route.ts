import { auth } from "@/auth";
import { getStudents } from "@/lib/students/data";

export const GET = auth(async (req) => {
  if (req.auth) {
    const items = await getStudents();
    return Response.json(items.sort((a, b) => a.id - b.id));
  }

  return Response.json({ message: "Not authenticated" }, { status: 401 });
});
