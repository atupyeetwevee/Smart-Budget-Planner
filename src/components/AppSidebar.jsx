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
          title: "Wallet",
          url: "/wallet",
        },
        {
          title: "Transactions",
          url: "/transaction",
        },
        {
          title: "Goals",
          url: "/goals",
        },
        {
          title: "Budget",
          url: "/budget",
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
      {/* <SidebarHeader>
       
      </SidebarHeader> */}
      <SidebarContent>
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
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}

export default AppSidebar;
