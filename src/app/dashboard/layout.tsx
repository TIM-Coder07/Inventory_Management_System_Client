
import type { ReactNode } from "react";
import AppSidebar from "@/components/Sidebar/AppSidebar";
import DashboardNavbar from "@/components/Navbar/DashboardNavbar";
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <SidebarProvider defaultOpen>
      <AppSidebar />

      <SidebarInset className="min-w-0">
        <DashboardNavbar />

        <main className="min-h-screen flex-1 p-6">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
