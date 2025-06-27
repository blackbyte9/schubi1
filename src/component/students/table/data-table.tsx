"use client";

import { columns } from "@/component/students/table/columns";
import { DataTable } from "@/component/table/data-table";
import { Student } from "@/lib/students/types";

interface LeaseTableProps<TData> {
  data: TData extends Student[] ? TData : Student[]
}

export function StudentTable<TData extends Student[]>({
  data,
}: LeaseTableProps<TData>) {
  return (
    <DataTable columns={columns}
      data={data}
      rowClickHandler={(row) => {
        const original = row.original as Record<string, unknown>;
        return `/students/${(original as { id: string }).id}`; // Adjust the path as needed
      }} />

  );
}
