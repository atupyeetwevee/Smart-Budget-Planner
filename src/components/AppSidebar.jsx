// import { SearchForm } from "@/components/search-form";
// import { VersionSwitcher } from "@/components/version-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  navMain: [
    {
      title: "Architecture",
      url: "#",
      items: [
        {
          title: "Overview",
          url: "/",
        },
        {
          title: "Income & Expenses Management",
          url: "/income&expenses",
        },
        {
          title: "Savings & Goals Management",
          url: "/savings",
        },
        {
          title: "Budget Management",
          url: "/budget",
        },
        {
          title: "Financial Report",
          url: "/report",
        },
        {
          title: "Settings",
          url: "/settings",
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
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={item.isActive}>
                      <a href={item.url}>{item.title}</a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
        <SidebarTrigger className="-ml-1" />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}

export default AppSidebar;
