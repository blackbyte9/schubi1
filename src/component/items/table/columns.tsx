"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Item } from "lib/items/types"

export const columns: ColumnDef<Item>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "isbn",
    header: "ISBN",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
]
