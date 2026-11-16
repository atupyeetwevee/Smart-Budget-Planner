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
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

function IncomeTable() {
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
    <div className="">
      <div className="flex justify-between items-center p-4">
        <p className="font-bold">Your Income Sources</p>
        <Button className="bg-neutral-100 hover:bg-lime-300/80 text-black hover:text-white border-gray-300">
          +Add Income
        </Button>
      </div>
      <Separator orientation="horizontal" classname="h-auto" />
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

export default IncomeTable;
