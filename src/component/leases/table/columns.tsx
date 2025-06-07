"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Lease } from "lib/leases/types"

export const columns: ColumnDef<Lease>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "item",
    header: "Item",
  },
  {
    accessorKey: "Active",
    header: "Active",
    cell: ({ row }) => {
      const active = row.original.active
      return active ? "Yes" : "No"
    }
  },
  {
    accessorKey: "leased",
    header: "Leased",
    cell: ({ row }) => {
      const leased = row.getValue("leased")
      return new Date(leased as string).toLocaleDateString("de-DE", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
      })
    }
  },
  {
    accessorKey: "returned",
    header: "Returned",
    cell: ({ row }) => {
      const returned = row.getValue("returned")
      if(row.original.active) {
        return "Not returned"
      }
      return returned ? new Date(returned as string).toLocaleDateString("de-DE", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
      }) : "Not returned"
    }
  }
]
