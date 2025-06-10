"use client"

import { columns } from "@/component/items/table/columns"
import { DataTable } from "@/component/table/dataTable"
import { Item } from "@/lib/items/types"

interface ItemTableProps<TData> {
  data: TData extends Item[] ? TData : Item[]
}

export function ItemTable<TData extends Item[]>({
  data,
}: ItemTableProps<TData>) {
  return (
    <DataTable columns={columns}
      data={data}
      rowClickHandler={(row) => {
        const original = row.original as Record<string, unknown>
        return `/items/${(original as { id: string }).id}`
      }} />

  )
}
