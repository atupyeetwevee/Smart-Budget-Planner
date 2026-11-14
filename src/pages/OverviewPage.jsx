import { ChartPieDonutText } from "@/components/ui/chartDonutText";
import { Icon } from "@iconify/react";

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
            <div className="col-span-2 bg-muted rounded-xl aspect-auto">
              <ChartPieDonutText />
            </div>
            <div className=" bg-muted rounded-xl aspect-video">
              <h2>Saving Goal</h2>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-5">
            <div className="col-span-2 bg-muted rounded-xl aspect-auto">
              <h2>Recent Transactions</h2>
            </div>
            <div className=" bg-muted rounded-xl aspect-video">
              <h2>Well done you're on track</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OverviewPage;
