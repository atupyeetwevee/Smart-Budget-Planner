import IncomeExpensesTab from "@/components/IncomeExpensesTab";
import IncomeTable from "@/components/IncomeTable";
import RecentTransactionTable from "@/components/RecentTransactionTable";

function IncomePage() {
  return (
    <>
      <div className="flex flex-1 flex-col gap-4 p-4">
        {/* <div className="flex justify-evenly items-center text-center">
          <div className="w-1/2 flex border border-2-muted"> */}
        <IncomeExpensesTab />
        {/* </div>
        </div> */}
        <div className="min-h-screen grid grid-cols-2 gap-4 rounded-xl bg-muted/50 md:min-h-min">
          <div className="aspect-video rounded-xl bg-muted/80">
            <IncomeTable />
            <div className="w-full h-auto p-10 rounded-4xl bg-lime-300/80">
              Total Amount
            </div>
          </div>
          <div className="aspect-video rounded-xl bg-muted/80">
            <RecentTransactionTable />
          </div>
        </div>
      </div>
    </>
  );
}

export default IncomePage;
