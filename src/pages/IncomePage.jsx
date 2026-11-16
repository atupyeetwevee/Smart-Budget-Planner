import IncomeTable from "@/components/IncomeTable";
import RecentTransactionTable from "@/components/RecentTransactionTable";
import { Separator } from "@/components/ui/separator";
import { Toggle } from "@/components/ui/toggle";

function IncomePage() {
  return (
    <>
      <div className="flex flex-1 flex-col gap-4 p-4">
        <div className="flex justify-evenly items-center text-center">
          <div className="w-1/2 flex border border-2-muted">
            <Toggle className="w-1/2 hover:bg-lime-300/80">
              <p className="p-4">Income</p>
            </Toggle>
            <Separator orientation="vertical" className="" />
            <Toggle className="w-1/2 hover:bg-lime-300/80">
              <p className="p-4">Expenses</p>
            </Toggle>
          </div>
        </div>
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
