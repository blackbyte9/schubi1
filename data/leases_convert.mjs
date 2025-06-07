import * as fs from "fs";

const leases = fs.readFileSync("./data/leases.txt", "utf-8");
const leasesList = leases.split("\r\n");

fs.appendFileSync("./data/leases.json", "[\r\n");
leasesList.forEach((lease) => {
  lease = lease.trim();
  const leaseParts = lease.split(/\t/);
  if (leaseParts.length < 2) {
    console.log("Skipping item with insufficient parts: ", lease);
    return;
  }
  const leaseDate = new Date(leaseParts[1]);
  const returnDate = leaseParts[3] === "t" ? new Date() : new Date(leaseParts[2]);
  const itemId = leaseParts[4];
  const studentId = leaseParts[5];
  const active = leaseParts[3] === "t" ? true : false;
  const leaseData = {
    leased: leaseDate,
    returned: returnDate,
    active: active,
    itemId: itemId,
    studentId: studentId,
  };

  fs.appendFileSync("./data/leases.json", JSON.stringify(leaseData) + ",\r\n");
});
fs.appendFileSync("./data/leases.json", "]\r\n");
console.log("Leases data conversion completed successfully.");
