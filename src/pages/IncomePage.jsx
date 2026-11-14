function IncomePage() {
  return (
    <>
      <div className="flex flex-1 flex-col gap-4 p-4">
        <div className="grid auto-rows-min gap-4 grid-cols-2 text-center">
          <div className="aspect-auto rounded-xl bg-muted/80">Income</div>
          <div className="aspect-auto rounded-xl bg-muted/80">Expenses</div>
        </div>
        <div className="min-h-screen grid grid-cols-2 gap-4 rounded-xl bg-muted/50 md:min-h-min">
          <div className="aspect-video rounded-xl bg-muted/80"></div>
          <div className="aspect-video rounded-xl bg-muted/80"></div>
          <div className="aspect-video rounded-xl bg-muted/80"></div>
          <div className="aspect-video rounded-xl bg-muted/80"></div>
        </div>
      </div>
    </>
  );
}

export default IncomePage;
