import { auth } from "@/auth"
import { prisma } from '@/prisma';

export const GET = auth(async (req) => {
  if (req.auth) {
    const books = await prisma.book.findMany();
    return Response.json(books.sort((a, b) => a.name.localeCompare(b.name)))
  }

  return Response.json({ message: "Not authenticated" }, { status: 401 })
})