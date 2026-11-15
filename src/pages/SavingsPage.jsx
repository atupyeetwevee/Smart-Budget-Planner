import { Button } from "@/components/ui/button";
function SavingsPage() {
  return (
    <div>
      <div className="flex flex-1 flex-col gap-4 p-4">
        <div className="grid auto-rows-min gap-4 md:grid-cols-2">
          <div className="aspect-auto rounded-xl bg-muted" />
          <div className="aspect-auto rounded-xl bg-muted" />
        </div>

        <Button
          variant="outline "
          className="bg-black hover:bg-gray-700 text-white"
        >
          +Creating New Goals
        </Button>

        <div className="min-h-screen grid grid-rows-4 gap-4 flex-1 rounded-xl bg-muted md:min-h-min">
          <div className="rounded-xl bg-muted/80">tutuilyuiojkoik</div>
          <div className="rounded-xl bg-muted/80">rutkuli</div>
          <div className="rounded-xl bg-muted/80">iu8iyiiio</div>
          <div className="rounded-xl bg-muted/80">9oklkl;kl;l</div>
        </div>
      </div>
    </div>
  );
}

export default SavingsPage;
