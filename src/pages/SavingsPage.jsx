import IncomeTable from "@/components/IncomeTable";
import { Button } from "@/components/ui/button";
import { Progress, ProgressIndicator } from "@/components/ui/progress";

function SavingsPage() {
  const savingsMenu = [
    {
      title: "JAMII",
      amount: 1000000,
      icon: "mdi:wallet",
      color: "#3B82F6",
    },
    {
      title: "VACATION",
      amount: 3000000,
      icon: "mdi:receipt",
      color: "#EF4444",
    },
    {
      title: "TRIP",
      amount: 300000,
      icon: "mdi:piggy-bank",
      color: "#22C55E",
    },
    {
      title: "UTT",
      amount: 5000000,
      icon: "mdi:scale-balance",
      color: "#A855F7",
    },
  ];

  return (
    <div>
      <div className="flex flex-1 flex-col gap-4 p-4">
        <div className="grid auto-rows-min gap-4 grid-cols-4">
          {savingsMenu.map((item) => (
            <div className="aspect-auto rounded-xl bg-muted p-4">
              <p>{item.title}</p>
              <p>{item.amount}</p>
              <Progress value={56} className="w-full max-w-sm">
                <ProgressIndicator style={{ background: item.color }} />
              </Progress>{" "}
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center">
          <Button
            variant="outline "
            className="w-1/2 bg-black hover:bg-gray-700 text-white"
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
