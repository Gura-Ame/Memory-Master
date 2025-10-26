import type { NavItem, SidebarData } from "@/App"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import {
  IconDeviceSdCard
} from "@tabler/icons-react"
import * as React from "react"
import { useTranslation } from 'react-i18next'
import { ModeToggle } from "./mode-toggle"
import { NavGroup } from "./nav-main"

// Note: we translate labels inside the component so hooks can be used.

export function AppSidebar({ 
  currentNavItem, 
  data, 
  ...props 
}: { 
  currentNavItem: NavItem;
  data: SidebarData;
} & React.ComponentProps<typeof Sidebar>) {
  const { t } = useTranslation()

  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:p-1.5!"
            >
              <a href="#">
                <IconDeviceSdCard className="size-5!" />
                <span className="text-base font-semibold">{t('sidebar.brand')}</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavGroup items={data.navMain} currentItem={currentNavItem} />
        <NavGroup items={data.documents} currentItem={currentNavItem} label="Documents" />
        <NavGroup items={data.navSecondary} currentItem={currentNavItem} className="mt-auto" />
      </SidebarContent>
      <ModeToggle />
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
