import { DetailCard } from "@/component/detail/card";
import { Item } from "@/lib/items/types";
import { Student } from "@/lib/students/types";

interface StudentDetailProps<TData> {
  data: TData extends Student ? TData : Student
}

export function StudentDetailCard<TData extends Item>({
  data
}: StudentDetailProps<TData>) {

  const title = data.lastname + ", " + data.firstname + " (" + data.course + ")";
  return (
    <div className="p-4">
      <DetailCard title={title}>
        <div> First Name: {data.firstname}</div>
        <div> Last Name: {data.lastname}</div>
        <div> Course: {data.course}</div>
      </DetailCard>
    </div>
  );
}
