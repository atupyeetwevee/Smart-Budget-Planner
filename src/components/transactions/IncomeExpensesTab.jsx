import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import IncomeTable from "./TransactionTable";
import RecentTransactionTable from "../RecentTransactionTable";
// import { Separator } from "./ui/separator";

function IncomeExpensesTab() {
  return (
    <Tabs defaultValue="home" className="w-full items-center">
      <TabsList className="w-1/2">
        <TabsTrigger value="income" className="w-1/2">
          Income
        </TabsTrigger>
        {/* <Separator /> */}
        <TabsTrigger value="expenses" className="w-1/2">
          Expenses
        </TabsTrigger>
      </TabsList>
      <TabsContent value="income">
        <IncomeTable />
      </TabsContent>
      <TabsContent value="expenses">
        <RecentTransactionTable />
      </TabsContent>
    </Tabs>
  );
}

export default IncomeExpensesTab;
