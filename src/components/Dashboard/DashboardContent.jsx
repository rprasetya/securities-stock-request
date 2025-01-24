import tabungan from "@/assets/dashboard/icon/tabungan.svg"
import bilyet_giro from "@/assets/dashboard/icon/bilyet_giro.svg"
import kartu_atm from "@/assets/dashboard/icon/kartu_atm.svg"
import buku_cek from "@/assets/dashboard/icon/buku_cek.svg"
import Image from "next/image"
import Link from "next/link"

const items = [
    {
      title: "Buku Tabungan",
      url: "/tabungan",
      icon: tabungan,
      width: 90,
      alt: "tabungan",
    },
    {
      title: "Bilyet Giro",
      url: "#",
      width: 106,
      icon: bilyet_giro,
      alt: "bilyet_giro",
    },
    {
      title: "Kartu ATM",
      url: "#",
      width: 100,
      icon: kartu_atm,
      alt: "kartu_atm",
    },
    {
      title: "Buku Cek",
      url: "#",
      width: 100,
      icon: buku_cek,
      alt: "buku_cek",
    }
  ]

const DashboardContent = () => {
    return(
        <div className="flex flex-col gap-5">
            <h1 className="text-xl">Dashboard Mandiri</h1>
            <div className="text-black grid grid-cols-2 gap-8 mr-40">
                {items.map((item) => (
                    <Link key={item.title} href={item.url} className="grid grid-cols-1 gap-9 justify-items-center bg-white shadow-lg px-24 py-10 rounded-3xl">
                        <Image
                            src={item.icon}
                            width={item.width}
                            alt={item.alt}
                        />
                        <h2 className="text-2xl text-personal-text font-semibold">{item.title}</h2>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default DashboardContent