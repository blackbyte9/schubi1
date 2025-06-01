import { DataTable } from '@/component/books/table/data-table';
import { prisma } from '@/prisma';
import { columns } from '../../component/books/table/columns';

const Home = async () => {
    const books = await prisma.book.findMany();

    return (
        <div>
            <h2>Books</h2>
            <DataTable columns={columns} data={books} />
        </div>
    );
};

export default Home;
