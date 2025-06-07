import * as fs from "fs";

const items = fs.readFileSync("./data/items.txt", "utf-8");
const itemList = items.split("\r\n");

const statusConvert = (status) => {
  switch (status) {
    case "0":
      return "REMOVED";
    case "1":
      return "NEW";
    case "2":
      return "USED";
    case "3":
      return "DAMAGED";
    default:
      console.log("Unknown status: ", status);
      return "REMOVED";
  }
}

fs.appendFileSync("./data/items.json", "[\r\n");
itemList.forEach((item) => {
  item = item.trim();
  const itemParts = item.split(/\s+/);
  if (itemParts.length < 2) {
    console.log("Skipping item with insufficient parts: ", item);
    return;
  }
  const id = itemParts[0];
  const status = statusConvert(itemParts[1]);
  const book = itemParts[2].replace(/-/g, "");
  const itemData = {
    id: id,
    status: status,
    bookId: book,
  };

  fs.appendFileSync("./data/items.json", JSON.stringify(itemData) + ",\r\n");
});
fs.appendFileSync("./data/items.json", "]\r\n");
console.log("Items data conversion completed successfully.");
