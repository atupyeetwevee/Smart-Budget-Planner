import { Button } from "@/components/ui/button";
import { FieldSeparator } from "@/components/ui/field";
import { Separator } from "@/components/ui/separator";
import { Toggle } from "@/components/ui/toggle";

function IncomePage() {
  return (
    <>
      <div className="flex flex-1 flex-col gap-4 p-4">
        <div className="flex justify-evenly items-center text-center">
          <div className="w-1/2 flex border border-2-muted">
            <Toggle className="w-1/2">
              <p className="p-4">Income</p>
            </Toggle>
            <Separator orientation="vertical" className="" />
            <Toggle className="w-1/2 ">
              <p className="p-4">Expenses</p>
            </Toggle>
          </div>
        </div>
        <div className="min-h-screen grid grid-cols-2 gap-4 rounded-xl bg-muted/50 md:min-h-min">
          <div className="aspect-video rounded-xl bg-muted/80"></div>
          <div className="aspect-video rounded-xl bg-muted/80"></div>
        </div>
      </div>
    </>
  );
}

export default IncomePage;
