import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Icon } from "@iconify/react";

function RecentTransactionTable() {
  const bills = [
    {
      title: "House Rent",
      amount: 200000,
      icon: "clarity:house-solid",
      color: "#5683e9",
      bgColor: "#e8effd",
    },
    {
      title: "Groceries",
      amount: 100000,
      icon: "lucide-extended:groceries-filled",
      color: "#b3ed74",
      bgColor: "#e0f6e5",
    },
    {
      title: "Electricity",
      amount: 20000,
      icon: "healthicons:electricity-outline",
      color: "#fdb91b",
      bgColor: "#ebe5dc",
    },
  ];
  return (
    <div>
      <Table>
        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
        {/* <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader> */}
        <TableBody>
          {bills.map((item) => (
            <TableRow>
              <TableCell className="text-center">
                <div
                  className="flex justify-center items-center h-9 w-9 rounded-full"
                  style={{ backgroundColor: item.bgColor }}
                >
                  <Icon
                    icon={item.icon}
                    className="text-2xl"
                    style={{ color: item.color }}
                  />
                </div>
              </TableCell>
              <TableCell>{item.title}</TableCell>

              <TableCell className="text-right">{item.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default RecentTransactionTable;
