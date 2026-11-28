import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import AppSidebar from "../components/AppSidebar";
import { Outlet } from "react-router-dom";

export default function Page() {
  return (
    <SidebarProvider>
      <div className="flex justify-between">
        <AppSidebar />
      </div>
      <SidebarInset>
        <Outlet />
      </SidebarInset>
    </SidebarProvider>
  );
}
