import { prisma } from '@/prisma';

const Home = async () => {
    const books = await prisma.book.findMany();

    return (
        <div>
            <h2>Books</h2>
            <ul>
                {books
                    .sort((a, b) => a.name.localeCompare(b.name))
                    .map((book) => (
                        <li key={book.isbn}>
                            <div>({book.isbn}) {book.name}</div>
                        </li>
                    ))}
            </ul>
        </div>
    );
};

export default Home;
