import { auth } from "@/auth";
import { readStudents } from "@/lib/students/read";

export const GET = auth(async (req) => {
  if (req.auth) {
    const items = await readStudents();
    return Response.json(items.sort((a, b) => a.id - b.id));
  }

  return Response.json({ message: "Not authenticated" }, { status: 401 });
});
