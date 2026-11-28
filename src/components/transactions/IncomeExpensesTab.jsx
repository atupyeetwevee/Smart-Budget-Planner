import { useState } from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import TransactionForm from "./TransactionForm";

import TransactionTable from "./TransactionTable";

// Create the income and expenses dashboard.
function IncomeExpensesTab() {
  // Store whether the dialog is currently open.
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Store whether the user wants to add income or expenses.
  const [transactionType, setTransactionType] = useState("income");

  // Open the dialog with the selected transaction type.
  const handleAddTransaction = (type) => {
    setTransactionType(type);
    setIsDialogOpen(true);
  };

  // Render the dashboard.
  return (
    <div className="space-y-6">
      {/* Create the income and expenses tabs. */}
      <Tabs defaultValue="income" className="w-full">
        {/* Display the tab navigation. */}
        <TabsList className="grid w-full grid-cols-2 md:w-1/2">
          {/* Select the income tab. */}
          <TabsTrigger value="income">Income</TabsTrigger>

          {/* Select the expenses tab. */}
          <TabsTrigger value="expenses">Expenses</TabsTrigger>
        </TabsList>

        {/* Display the income section. */}
        <TabsContent value="income" className="space-y-4">
          {/* Display the income heading and add button. */}
          <div className="flex items-center justify-between">
            <h2 className="font-semibold">Your Income Sources</h2>

            {/* Open the income form when clicked. */}
            <button
              onClick={() => handleAddTransaction("income")}
              className="rounded-md border px-3 py-2 text-sm"
            >
              + Add Income
            </button>
          </div>

          {/* Display saved income transactions. */}
          <TransactionTable type="income" />
        </TabsContent>

        {/* Display the expenses section. */}
        <TabsContent value="expenses" className="space-y-4">
          {/* Display the expense heading and add button. */}
          <div className="flex items-center justify-between">
            <h2 className="font-semibold">Monthly Expenses</h2>

            {/* Open the expense form when clicked. */}
            <button
              onClick={() => handleAddTransaction("expense")}
              className="rounded-md border px-3 py-2 text-sm"
            >
              + Add Expense
            </button>
          </div>

          {/* Display saved expense transactions. */}
          <TransactionTable type="expense" />
        </TabsContent>
      </Tabs>

      {/* Create a controlled dialog for adding transactions. */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        {/* Define the dialog content. */}
        <DialogContent className="sm:max-w-[425px]">
          {/* Display the dialog title and description. */}
          <DialogHeader>
            <DialogTitle>
              {transactionType === "income"
                ? "Add New Income"
                : "Add New Expense"}
            </DialogTitle>

            <DialogDescription>
              Enter your financial details below.
            </DialogDescription>
          </DialogHeader>

          {/* Display the appropriate form based on the selected type. */}
          <TransactionForm
            type={transactionType}
            onSuccess={() => setIsDialogOpen(false)}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}

// Export the completed dashboard.
export default IncomeExpensesTab;
