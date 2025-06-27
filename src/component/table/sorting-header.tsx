import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";

type SortingHeaderProps = {
  column: {
    // eslint-disable-next-line no-unused-vars
    toggleSorting: (desc: boolean) => void;
    getIsSorted: () => "asc" | "desc" | false;
  };
  title: string;
};

export const SortingHeader = ({ column, title }: SortingHeaderProps) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          {title}
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    };
