"use client";

import { useEffect, useState } from 'react';
import { AddBookDialog } from '@/component/books/detail/AddBook';
import { BookTable } from '@/component/books/table/data-table';
import { getBooks } from '@/lib/books/data';
import { Book } from '@/lib/books/types';

const Home = () => {
    const [books, setBooks] = useState<Book[]>([]);
    const [reload, setReload] = useState(false);

    useEffect(() => {
        getBooks().then(setBooks);
    }, [reload]);

    const handleBookCreated = () => {
        setReload(r => !r); // Toggle to trigger reload
    };

    return (
        <div>
            <h2>Books</h2>
            <div className="flex justify-end mb-4">
                <AddBookDialog onBookCreated={handleBookCreated} />
            </div>
            <BookTable data={books} />
        </div>
    );
};

export default Home;
