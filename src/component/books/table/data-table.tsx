"use client";

import { columns } from "@/component/books/table/columns";
import { DataTable } from "@/component/table/dataTable";
import { Book } from "@/lib/books/types";

interface BookTableProps<TData> {
  data: TData extends Book[] ? TData : Book[]
}

export function BookTable<TData extends Book[]>({
  data
}: BookTableProps<TData>) {
  return (
    <DataTable columns={columns}
      data={data}
      rowClickHandler={(row) => {
        const original = row.original as Record<string, unknown>;
        return `/books/${(original as { isbn: string }).isbn}`;
      }} />

  );
}
