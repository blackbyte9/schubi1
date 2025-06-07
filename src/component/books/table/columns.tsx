"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Book } from "lib/books/types"

export const columns: ColumnDef<Book>[] = [
  {
    accessorKey: "isbn",
    header: "ISBN",
  },
  {
    accessorKey: "name",
    header: "Title",
  },
  {
    accessorKey: "itemCount",
    header: "Items",
  },
  {
    accessorKey: "leasedCount",
    header: "Leased items",
  },
]
