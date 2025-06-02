import { DataTable } from '@/component/books/table/data-table';
import { columns } from '@/component/books/table/columns';
import { getBooks } from '@/lib/books/data';

const Home = async () => {
    const books = await getBooks();

    return (
        <div>
            <h2>Books</h2>
            <DataTable columns={columns} data={books} />
        </div>
    );
};

export default Home;
