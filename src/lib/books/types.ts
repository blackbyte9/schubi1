export type Book = {
    isbn: string;
    name: string;
    itemCount: number;
    leasedCount?: number; // Optional, only used in some queries
};
