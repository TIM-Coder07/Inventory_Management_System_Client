
"use client";

import { usePathname } from "next/navigation";
import { Bell, UserRound } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";

const pageTitles: Record<string, string> = {
  "/dashboard": "Dashboard",
  "/dashboard/products": "Products",
  "/dashboard/pos": "Point of Sale",
  "/dashboard/sales": "Sales History",
  "/dashboard/customers": "Customers",
  "/dashboard/settings": "Settings",
};

export default function DashboardNavbar() {
  const pathname = usePathname();
  const title = pageTitles[pathname] ?? "Dashboard";

  return (
    <header className="sticky top-0 z-20 flex h-16 shrink-0 items-center justify-between border-b bg-background px-4 sm:px-6">
      <div className="flex items-center gap-3">
        <SidebarTrigger />

        <Separator orientation="vertical" className="h-6" />

        <div>
          <h1 className="font-semibold">{title}</h1>
          <p className="hidden text-xs text-muted-foreground sm:block">
            Inventory Management System
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" aria-label="Notifications">
          <Bell className="size-4" />
        </Button>

        <Button variant="ghost" size="icon" aria-label="Profile">
          <UserRound className="size-4" />
        </Button>
      </div>
    </header>
  );
}
