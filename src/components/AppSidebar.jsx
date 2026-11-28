// import { SearchForm } from "@/components/search-form";
// import { VersionSwitcher } from "@/components/version-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Icon } from "@iconify/react";

// This is sample data.
const data = {
  navMain: [
    {
      title: "SMART BUDGET PLANNER",
      url: "#",
      items: [
        {
          title: "Overview",
          url: "/",
          icon: "mdi:home",
        },
        {
          title: "Income & Expenses Management",
          url: "/income&expenses",
          icon: "mdi:wallet",
        },
        {
          title: "Savings & Goals Management",
          url: "/savings",
          icon: "mdi:piggy-bank",
        },
        {
          title: "Budget Management",
          url: "/budget",
          icon: "mdi:coins",
        },
        {
          title: "Financial Report",
          url: "/report",
          icon: "mdi:folder",
        },
        {
          title: "Settings",
          url: "/settings",
          icon: "mdi:settings",
        },
      ],
    },
  ],
};

function AppSidebar({ ...props }) {
  return (
    <Sidebar {...props}>
      <SidebarContent className="flex flex-row justify-between">
        {/* We create a SidebarGroup for each parent. */}
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title} className="">
            <div className="flex justify-between">
              <SidebarGroupLabel className="">{item.title}</SidebarGroupLabel>
              <SidebarTrigger className="" />
            </div>

            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={item.isActive}>
                      <a
                        href={item.url}
                        className="flex gap-2 items-center w-full"
                      >
                        <Icon icon={item.icon} /> {item.title}
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}

export default AppSidebar;
