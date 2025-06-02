import { prisma } from '@/prisma';

//TODO: get books from data.ts

export default async function Page ({ params }: { params: { isbn: string | string[] } }) {
    const { isbn } = await params
    const book = await prisma.book.findFirst({
        where: {
            isbn: Array.isArray(isbn)
                ? isbn[0]
                : isbn,
        },
    });

    return (
        <div>
            <h2>{book?.name} ({book?.isbn})</h2>
        </div>
    );
};
