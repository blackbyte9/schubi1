"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Student } from "lib/students/types"

export const columns: ColumnDef<Student>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "firstname",
    header: "First Name",
  },
  {
    accessorKey: "lastname",
    header: "Last Name",
  },
  {
    accessorKey: "course",
    header: "Course",
  }
]
