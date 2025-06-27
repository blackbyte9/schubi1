import { ItemInput } from "@/component/items/item-input";
import { StudentDetailCard } from "@/component/students/card";

const Return = async () => {

    return (
        <div>
            <h2>Return Items</h2>
            <StudentDetailCard params={{ id: "" }} />
            <ItemInput option={"return"} />
        </div>
    );
};

export default Return;
