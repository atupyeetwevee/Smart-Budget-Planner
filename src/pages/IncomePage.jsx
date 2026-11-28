import IncomeExpensesTab from "@/components/transactions/IncomeExpensesTab";
import IncomeTable from "@/components/transactions/TransactionTable";
import RecentTransactionTable from "@/components/RecentTransactionTable";

function IncomePage() {
  return (
    <>
      <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4"></header>
      <div className="flex flex-1 flex-col gap-4 p-4">
        <IncomeExpensesTab />
      </div>
    </>
  );
}

export default IncomePage;
