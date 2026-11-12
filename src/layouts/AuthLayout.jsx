import { Outlet } from "react-router-dom";
import { cn } from "cn";
import { Card, CardContent } from "@/components/ui/card";
import AdsPage from "@/authpages/AdsPage";
import Footer from "@/components/Footer";

function AuthLayout({ className, ...props }) {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-4xl">
        <div className={cn("flex flex-col gap-6", className)} {...props}>
          <Card className="overflow-hidden p-0">
            <CardContent className="grid p-0 md:grid-cols-2">
              <AdsPage />
              <Outlet />
            </CardContent>
          </Card>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;
