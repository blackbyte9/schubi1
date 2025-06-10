"use client"

import { SortingHeader } from "@/component/table/sortingHeader"
import { ColumnDef } from "@tanstack/react-table"
import { Book } from "lib/books/types"

export const columns: ColumnDef<Book>[] = [
  {
    accessorKey: "isbn",
    header: "ISBN",
  },
  {
    accessorKey: "name",
    header: ({ column }) => SortingHeader({ column, title: "Title" }),
  },
  {
    accessorKey: "itemCount",
    header: ({ column }) => SortingHeader({ column, title: "Items" }),
  },
  {
    accessorKey: "leasedCount",
    header: ({ column }) => SortingHeader({ column, title: "Leased items" }),
  },
]
