"use client";

import { columns } from "@/component/leases/table/columns";
import { DataTable } from "@/component/table/dataTable";
import { Lease } from "@/lib/leases/types";

interface LeaseTableProps<TData> {
  data: TData extends Lease[] ? TData : Lease[]
}

export function LeaseTable<TData extends Lease[]>( {
  data,
}: LeaseTableProps<TData> ) {
  return (
    <DataTable columns={columns}
      data={data}
      rowClickHandler={(row) => {
        const original = row.original as Record<string, unknown>;
        return `/items/${(original as { item: string }).item}`; // Adjust the path as needed
      }}  />

  );
}
