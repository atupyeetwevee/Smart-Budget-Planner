import { Table, TableBody } from "@/components/ui/table";

import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { useTransactions } from "@/hooks/useTransactions";

// Create a reusable table for income and expenses.
function TransactionTable({ type }) {
  // Retrieve transaction data from Supabase.
  const { data: transactions, isLoading, error } = useTransactions();

  // Display loading information while fetching records.
  if (isLoading) return <p>Loading transactions...</p>;

  // Display an error if the request fails.
  if (error) return <p>Error: {error.message}</p>;

  // Filter transactions according to the selected type.
  const filteredTransactions =
    transactions?.filter((transaction) => transaction.type === type) || [];

  // Format amounts into Tanzanian shillings.
  const formatAmount = (amount) =>
    new Intl.NumberFormat("en-TZ", {
      style: "currency",
      currency: "TZS",
      maximumFractionDigits: 2,
    }).format(amount);

  // Render the transaction table.
  return (
    <div className="">
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
          {/* Display the retrieved transaction records. */}
          {filteredTransactions.length > 0 ? (
            filteredTransactions.map((transaction) => (
              <tr key={transaction.id} className="border-b">
                {/* Display the income source or expense name. */}
                <td className="p-3">{transaction.name}</td>

                {/* Display the transaction category. */}
                <td className="p-3">{transaction.category}</td>

                {/* Display the formatted transaction amount. */}
                <td className="p-3 font-medium">
                  {formatAmount(transaction.amount)}
                </td>

                {/* Display the transaction date. */}
                <td className="p-3">{transaction.transaction_date}</td>
              </tr>
            ))
          ) : (
            // Display a message when there are no records.
            <tr>
              <td colSpan="4" className="p-4 text-center text-muted-foreground">
                No {type} records found.
              </td>
            </tr>
          )}
        </TableBody>
      </Table>
    </div>
  );
}

export default TransactionTable;
