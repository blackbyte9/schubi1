import { auth } from "@/auth"
import { getBooks } from "@/lib/books/data";

export const GET = auth(async (req) => {
  if (req.auth) {
    const books = await getBooks();
    return Response.json(books.sort((a, b) => a.isbn.localeCompare(b.isbn)));
  }

  return Response.json({ message: "Not authenticated" }, { status: 401 })
})