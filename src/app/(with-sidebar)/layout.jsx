import "../globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import SidebarDashboard from "@/components/SidebarDashboard";

export default function RootLayout({ children }) {
  return (
    <SidebarProvider>
      <SidebarDashboard />
      <main className="w-full">
        <SidebarTrigger/>
        {children}
      </main>
    </SidebarProvider>
  );
}
