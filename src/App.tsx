import './App.css'

import { AppSidebar } from "@/components/app-sidebar"
import { ChartAreaInteractive } from "@/components/chart-area-interactive"
import { DataTable } from "@/components/data-table"
import { SectionCards } from "@/components/section-cards"
import { SiteHeader } from "@/components/site-header"
import { ThemeProvider } from "@/components/theme-provider"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"

import { IconCamera, IconChartBar, IconDashboard, IconDatabase, IconFileAi, IconFileDescription, IconFileWord, IconFolder, IconHelp, IconListDetails, IconReport, IconSearch, IconSettings, IconUsers, type Icon } from '@tabler/icons-react'
import { t } from 'i18next'
import data from "./app/dashboard/data.json"

export type NavItem = {
  title: string
  url: string
  icon?: Icon
}

export interface SidebarData {
  user: {
    name: string;
    email: string;
    avatar: string;
  };
  navMain: Array<{
    title: string;
    url: string;
    icon: any;
  }>;
  navClouds: Array<{
    title: string;
    icon: any;
    isActive?: boolean;
    url: string;
    items: Array<{
      title: string;
      url: string;
    }>;
  }>;
  navSecondary: Array<{
    title: string;
    url: string;
    icon: any;
  }>;
  documents: Array<{
    title: string;
    url: string;
    icon: any;
  }>;
}

function App() {


  const data1 = {
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
        title: t('documents.dataLibrary'),
        url: '#',
        icon: IconDatabase,
      },
      {
        title: t('documents.reports'),
        url: '#',
        icon: IconReport,
      },
      {
        title: t('documents.wordAssistant'),
        url: '#',
        icon: IconFileWord,
      },
    ],
  }
  // Default to first item
  // TODO: Future improvement: record last selected item per user
  const currentNavItem1: NavItem = data1.navMain[0];

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <SidebarProvider
        style={
          {
            "--sidebar-width": "calc(var(--spacing) * 72)",
            "--header-height": "calc(var(--spacing) * 12)",
          } as React.CSSProperties
        }
      >
        <AppSidebar currentNavItem={currentNavItem1} data={data1} variant="inset" />
        <SidebarInset>
          <SiteHeader title={currentNavItem1.title} />
          <div className="flex flex-1 flex-col">
            <div className="@container/main flex flex-1 flex-col gap-2">
              <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
                <SectionCards />
                <div className="px-4 lg:px-6">
                  <ChartAreaInteractive />
                </div>
                <DataTable data={data} />
              </div>
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </ThemeProvider>
  )
}

export default App
