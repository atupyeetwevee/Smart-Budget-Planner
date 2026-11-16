import { ChartPieDonutText } from "@/components/ui/chartDonutText";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import { LucideArrowRight } from "lucide-react";
import RecentTransactionTable from "@/components/RecentTransactionTable";
import LiveEmoji from "@/components/LiveEmoji";

function OverviewPage() {
  const summaryCards = [
    {
      title: "Monthly Income",
      amount: 1000000,
      icon: "mdi:wallet",
      color: "#3B82F6",
    },
    {
      title: "Total Expenses",
      amount: 700000,
      icon: "mdi:receipt",
      color: "#EF4444",
    },
    {
      title: "Savings",
      amount: 300000,
      icon: "mdi:piggy-bank",
      color: "#22C55E",
    },
    {
      title: "Remaining",
      amount: 0,
      icon: "mdi:scale-balance",
      color: "#A855F7",
    },
  ];
  return (
    <>
      <div className="flex flex-1 flex-col gap-4 min-h-0 p-4">
        <div className="grid auto-rows-min gap-4 md:grid-cols-4">
          {summaryCards.map((item) => (
            <div
              key={item.title}
              className="flex gap-4 text-center rounded-xl bg-muted p-4"
            >
              <Icon
                icon={item.icon}
                width="28"
                height="28"
                style={{ color: item.color }}
              />
              <div>
                <h2>{item.title}</h2>
                <p className="">{item.amount}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex-1 flex flex-col gap-5 rounded-xl min-h-0">
          <div className="grid grid-cols-3 gap-5">
            <div className="col-span-2 rounded-xl aspect-auto">
              <ChartPieDonutText />
            </div>
            <div className="bg-muted p-4 rounded-xl aspect-video space-y-4">
              <h2 className="font-bold">Smart Tip</h2>
              <p>Your savings goal of TZS 300,000 is achievable this month!</p>
              <Button
                variant="outline"
                className="bg-lime-300/80 hover:bg-chart-4 text-white"
              >
                View Details
                <LucideArrowRight />
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-5">
            <div className="col-span-2 bg-muted rounded-xl aspect-auto p-4">
              <div className="flex gap-5 justify-between">
                <h2 className="font-bold">Recent Transactions</h2>
                <Button className="bg-lime-300/80 hover:bg-chart-4">
                  See all <LucideArrowRight />
                </Button>
              </div>
              <RecentTransactionTable />
            </div>
            <div className=" bg-muted rounded-xl aspect-video">
              <h2 className="font-bold p-4">Well done you're on track</h2>
              <LiveEmoji />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OverviewPage;
