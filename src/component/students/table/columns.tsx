"use client";

import { SortingHeader } from "@/component/table/sorting-header";
import { ColumnDef } from "@tanstack/react-table";
import { Student } from "lib/students/types";

export const columns: ColumnDef<Student>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "firstname",
    header: ({ column }) => SortingHeader({ column, title: "First Name" }),
  },
  {
    accessorKey: "lastname",
    header: ({ column }) => SortingHeader({ column, title: "Last Name" }),
  },
  {
    accessorKey: "course",
    header: ({ column }) => SortingHeader({ column, title: "Course" }),
  }
];
