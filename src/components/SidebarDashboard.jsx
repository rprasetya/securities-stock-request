"use client"
import logo_mandiri from "@/assets/logo_mandiri.svg"
import tabungan from "@/assets/sidebar/icon/tabungan.svg"
import bilyet_giro from "@/assets/sidebar/icon/bilyet_giro.svg"
import kartu_atm from "@/assets/sidebar/icon/kartu_atm.svg"
import buku_cek from "@/assets/sidebar/icon/buku_cek.svg"
import pengaturan from "@/assets/sidebar/icon/pengaturan.svg"
import keluar from "@/assets/sidebar/icon/keluar.svg"
import Image from "next/image"
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarFooter
  } from "@/components/ui/sidebar"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "./ui/button"


  const items = [
    {
      title: "Tabungan",
      url: "/dashboard/tabungan",
      icon: tabungan,
      alt: "tabungan",
    },
    {
      title: "Bilyet Giro",
      url: "#",
      icon: bilyet_giro,
      alt: "bilyet_giro",
    },
    {
      title: "Kartu ATM",
      url: "#",
      icon: kartu_atm,
      alt: "kartu_atm",
    },
    {
      title: "Buku Cek",
      url: "#",
      icon: buku_cek,
      alt: "buku_cek",
    }
  ]

const SidebarDashboard = () => {
    const router = useRouter()
    const pathname = usePathname();

    const handleSignOut = () => {
        localStorage.removeItem("authToken");
        router.push("/login");
    };

    return(
        <Sidebar>
            <SidebarContent>
                <SidebarGroup>
                <SidebarGroupLabel className="flex justify-center py-14">
                    <Link href="/dashboard">
                        <Image
                            src={logo_mandiri}
                            width={130}
                            alt="logo mandiri"
                        />
                    </Link>
                </SidebarGroupLabel>
                <SidebarGroupContent>
                    <SidebarMenu>
                    {items.map((item) => (
                        <SidebarMenuItem key={item.title} className="mx-8">
                            <SidebarMenuButton asChild className={`hover:bg-personal-hover ${pathname.startsWith(item.url) ? 'bg-personal-hover text-personal-button' : ''}`}>
                                <Link href={item.url}>
                                    <Image
                                        src={item.icon}
                                        alt={item.alt}
                                    />
                                    <span>{item.title}</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                    </SidebarMenu>
                </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter className="mx-8 mb-7">
                <div className="flex flex-col gap-2 text-sm">
                    <Link href={'#'} className="flex gap-2 items-center p-2 hover:bg-personal-hover rounded-md ">
                        <Image
                            src={pengaturan}
                            alt="pengaturan"
                        />
                        <span>Pengaturan</span>
                    </Link>
                    <button onClick={handleSignOut} className="flex gap-2 items-center p-2 hover:bg-personal-hover rounded-md">
                        <Image
                            src={keluar}
                            alt="keluar"
                        />
                        <span>Keluar</span>
                    </button>
                </div>
            </SidebarFooter>
        </Sidebar>
    )
}

export default SidebarDashboard