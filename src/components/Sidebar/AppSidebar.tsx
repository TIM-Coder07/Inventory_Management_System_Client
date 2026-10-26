"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  History,
  Users,
  Settings,
  ChartNoAxesCombined,
  ChevronRight,
  ChartNoAxesColumn,
  ArrowLeftRight,
  TrendingUp,
  Wallet,
  CreditCard,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  useSidebar,
} from "@/components/ui/sidebar";

const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Overview",
    url: "/dashboard/overview",
    icon: ChartNoAxesCombined,
    children: [
      {
        title: "Analytics",
        url: "/dashboard/overview/analytics",
        icon: ChartNoAxesColumn,
      },
      {
        title: "Transactions",
        url: "/dashboard/overview/transactions",
        icon: ArrowLeftRight,
      },
      {
        title: "Investments",
        url: "/dashboard/overview/investments",
        icon: TrendingUp,
      },
      {
        title: "Accounts",
        url: "/dashboard/overview/accounts",
        icon: Wallet,
      },
      {
        title: "Spending",
        url: "/dashboard/overview/spending",
        icon: CreditCard,
      },
    ],
  },
  {
    title: "Products",
    url: "/dashboard/products",
    icon: Package,
    children: [
      {
        title: "Analytics",
        url: "/dashboard/overview/analytics",
        icon: ChartNoAxesColumn,
      },
    ],
  },
  {
    title: "Point of Sale",
    url: "/dashboard/pos",
    icon: ShoppingCart,
  },
  {
    title: "Sales History",
    url: "/dashboard/sales",
    icon: History,
  },
  {
    title: "Customers",
    url: "/dashboard/customers",
    icon: Users,
  },
  {
    title: "Settings",
    url: "/dashboard/settings",
    icon: Settings,
  },
];

export default function AppSidebar() {
  const pathname = usePathname();
  const { state } = useSidebar();

  const isCollapsed = state === "collapsed";

  return (
    <Sidebar collapsible="icon">
      <SidebarContent className="overflow-visible">
        <SidebarGroup className="overflow-visible">
          <SidebarGroupLabel>Inventory Management</SidebarGroupLabel>

          <SidebarGroupContent className="overflow-visible">
            <SidebarMenu className="overflow-visible">
              {items.map((item) => {
                const Icon = item.icon;
                const hasChildren = Boolean(item.children);

                const isActive =
                  pathname === item.url ||
                  Boolean(
                    item.children?.some((child) => pathname === child.url),
                  );

                return (
                  <SidebarMenuItem
                    key={item.url}
                    className="group/menu relative overflow-visible"
                  >
                    <SidebarMenuButton
                      render={<Link href={item.url} />}
                      tooltip={item.title}
                      isActive={isActive}
                    >
                      <Icon className="size-4 shrink-0" />
                      <span>{item.title}</span>

                      {hasChildren && (
                        <ChevronRight className="ml-auto size-4 shrink-0" />
                      )}
                    </SidebarMenuButton>

                    {hasChildren && (
                      <div
                        className={`
      invisible pointer-events-none
      absolute top-0 z-[100]
      w-52 rounded-xl border
      bg-popover p-2 text-popover-foreground
      opacity-0 shadow-xl
      transition-all duration-200

      ${isCollapsed ? "left-full ml-2" : "left-full ml-2"}

      group-hover/menu:visible
      group-hover/menu:pointer-events-auto
      group-hover/menu:opacity-100
    `}
                      >
                        <p className="px-3 py-2 text-xs font-semibold text-muted-foreground">
                          Overview
                        </p>

                        {item.children?.map((child) => {
                          const ChildIcon = child.icon;

                          return (
                            <Link
                              key={child.url}
                              href={child.url}
                              className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm hover:bg-accent"
                            >
                              <ChildIcon className="size-4 shrink-0" />
                              <span>{child.title}</span>
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
