import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Separator } from "./ui/separator";

function TabsDisabled() {
  return (
    <Tabs defaultValue="home" className="w-full items-center">
      <TabsList className="w-1/2">
        <TabsTrigger value="home" className="w-1/2">
          Income
        </TabsTrigger>
        {/* <Separator /> */}
        <TabsTrigger value="settings" className="w-1/2" disabled>
          Expenses
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}

export default TabsDisabled;
