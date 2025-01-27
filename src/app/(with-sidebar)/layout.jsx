import "../globals.css";
import { DataProvider } from "@/app/context/DataContext";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import SidebarDashboard from "@/components/SidebarDashboard";

export default function RootLayout({ children }) {
  return (
    <SidebarProvider>
      <SidebarDashboard />
      <main className="w-full">
        <SidebarTrigger/>
        <DataProvider>{children}</DataProvider>
      </main>
    </SidebarProvider>
  );
}
