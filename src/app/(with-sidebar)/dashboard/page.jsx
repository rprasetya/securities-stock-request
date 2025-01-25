"use client"
import DashboardContent from "@/components/Dashboard/DashboardContent"
import SidebarDashboard from "@/components/SidebarDashboard"
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Page = () => {
    const router = useRouter()
    useEffect(() => {
        const token = localStorage.getItem("authToken");
        if (!token) {
          router.replace("/login");
        }
      }, [router]);
    return(
        <div className="mx-7 mt-14">
            <DashboardContent/>
        </div>
    )
}

export default Page