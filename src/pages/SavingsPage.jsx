import IncomeTable from "@/components/transactions/TransactionTable";
import { Button } from "@/components/ui/button";
import { Progress, ProgressIndicator } from "@/components/ui/progress";

function SavingsPage() {
  const savingsMenu = [
    {
      title: "JAMII",
      amount: 1000000,
      icon: "mdi:wallet",
      color: "#3B82F6",
      progress: 40,
    },
    {
      title: "VACATION",
      amount: 3000000,
      icon: "mdi:receipt",
      color: "#EF4444",
      progress: 64,
    },
    {
      title: "TRIP",
      amount: 300000,
      icon: "mdi:piggy-bank",
      color: "#22C55E",
      progress: 21,
    },
    {
      title: "UTT",
      amount: 5000000,
      icon: "mdi:scale-balance",
      color: "#A855F7",
      progress: 76,
    },
  ];

  return (
    <div>
      <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4"></header>
      <div className="flex flex-1 flex-col gap-4 p-4">
        <div className="grid auto-rows-min gap-4 grid-cols-4">
          {savingsMenu.map((item) => (
            <div
              key={item.title}
              className="aspect-auto rounded-xl bg-muted p-4"
            >
              <p>{item.title}</p>
              <p>{item.amount}</p>
              <Progress value={item.progress} color={item.color} />
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center">
          <Button
            variant="outline "
            className="w-1/2 bg-lime-300/80 hover:bg-lime-700/80  hover:text-white"
          >
            +Creating New Goals
          </Button>
        </div>

        <div className="min-h-screen flex-1 rounded-xl bg-muted/50 md:min-h-min">
          <IncomeTable />
        </div>
      </div>
    </div>
  );
}

export default SavingsPage;
