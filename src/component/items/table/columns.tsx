"use client";

import { SortingHeader } from "@/component/table/sortingHeader";
import { ColumnDef } from "@tanstack/react-table";
import { Item } from "lib/items/types";

export const columns: ColumnDef<Item>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => SortingHeader({ column, title: "ID" }),
  },
  {
    accessorKey: "isbn",
    header: ({ column }) => SortingHeader({ column, title: "ISBN" }),
  },
  {
    accessorKey: "status",
    header: ({ column }) => SortingHeader({ column, title: "Status" }),
  },
  {
    accessorKey: "leased",
    header: ({ column }) => SortingHeader({ column, title: "Leased" }),
  },
];
