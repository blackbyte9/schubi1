import { auth } from "@/auth";
import { readBooks } from "@/lib/books/read";

export const GET = auth(async (req) => {
  if (req.auth) {
    const books = await readBooks();
    return Response.json(books.sort((a, b) => a.isbn.localeCompare(b.isbn)));
  }

  return Response.json({ message: "Not authenticated" }, { status: 401 });
});
