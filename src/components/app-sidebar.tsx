import {
  IconCamera,
  IconChartBar,
  IconDashboard,
  IconDatabase,
  IconDeviceSdCard,
  IconFileAi,
  IconFileDescription,
  IconFileWord,
  IconFolder,
  IconHelp,
  IconListDetails,
  IconReport,
  IconSearch,
  IconSettings,
  IconUsers
} from "@tabler/icons-react"
import * as React from "react"
import { useTranslation } from 'react-i18next'

import { NavDocuments } from "@/components/nav-documents"
import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
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

// Note: we translate labels inside the component so hooks can be used.

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { t } = useTranslation()

  const data = {
    user: {
      name: "shadcn",
      email: "m@example.com",
      avatar: "/avatars/shadcn.jpg",
    },
    navMain: [
      {
        title: t('nav.main.dashboard'),
        url: '#',
        icon: IconDashboard,
      },
      {
        title: t('nav.main.lifecycle'),
        url: '#',
        icon: IconListDetails,
      },
      {
        title: t('nav.main.analytics'),
        url: '#',
        icon: IconChartBar,
      },
      {
        title: t('nav.main.projects'),
        url: '#',
        icon: IconFolder,
      },
      {
        title: t('nav.main.team'),
        url: '#',
        icon: IconUsers,
      },
    ],
    navClouds: [
      {
        title: t('nav.clouds.capture'),
        icon: IconCamera,
        isActive: true,
        url: '#',
        items: [
          {
            title: t('nav.clouds.items.activeProposals'),
            url: '#',
          },
          {
            title: t('nav.clouds.items.archived'),
            url: '#',
          },
        ],
      },
      {
        title: t('nav.clouds.proposal'),
        icon: IconFileDescription,
        url: '#',
        items: [
          {
            title: t('nav.clouds.items.activeProposals'),
            url: '#',
          },
          {
            title: t('nav.clouds.items.archived'),
            url: '#',
          },
        ],
      },
      {
        title: t('nav.clouds.prompts'),
        icon: IconFileAi,
        url: '#',
        items: [
          {
            title: t('nav.clouds.items.activeProposals'),
            url: '#',
          },
          {
            title: t('nav.clouds.items.archived'),
            url: '#',
          },
        ],
      },
    ],
    navSecondary: [
      {
        title: t('navSecondary.settings'),
        url: '#',
        icon: IconSettings,
      },
      {
        title: t('navSecondary.getHelp'),
        url: '#',
        icon: IconHelp,
      },
      {
        title: t('navSecondary.search'),
        url: '#',
        icon: IconSearch,
      },
    ],
    documents: [
      {
        name: t('documents.dataLibrary'),
        url: '#',
        icon: IconDatabase,
      },
      {
        name: t('documents.reports'),
        url: '#',
        icon: IconReport,
      },
      {
        name: t('documents.wordAssistant'),
        url: '#',
        icon: IconFileWord,
      },
    ],
  }

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
        <NavMain items={data.navMain} />
        <NavDocuments items={data.documents} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
