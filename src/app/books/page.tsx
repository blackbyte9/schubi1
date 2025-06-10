import { BookTable } from '@/component/books/table/data-table';
import { getBooks } from '@/lib/books/data';

const Home = async () => {
    const books = await getBooks();

    return (
        <div>
            <h2>Books</h2>
            <BookTable data={books} />
        </div>
    );
};

export default Home;
