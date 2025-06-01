import { prisma } from '@/prisma';

interface BookPageProps {
    params: {
        isbn: string | string[];
    };
}

const Book = async ({params: {isbn}}: BookPageProps) => {
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

export default Book;
