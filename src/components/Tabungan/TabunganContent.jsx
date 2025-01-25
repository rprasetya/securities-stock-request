import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import cta from "@/assets/tabungan/icon/cta.svg"
import Link from "next/link"
import Image from "next/image"

const securities = [
    {
        id: 1,
        PIC: "Nama Pegawai",
        kantorCabang: "Malinau",
        tanggal: "Jan 23, 2025",
        jumlah: "100 pcs",
        keterangan: true,
    },
    {
        id: 2,
        PIC: "Nama Pegawai",
        kantorCabang: "Malinau",
        tanggal: "Jan 23, 2025",
        jumlah: "100 pcs",
        keterangan: true,
    },
]

const TabunganContent = () => {
    return(
        <div className="flex flex-col gap-5">
            <h1 className="text-xl">Buku Tabungan</h1>
            <div className=" bg-white shadow-xl px-10 py-10 rounded-3xl flex flex-col gap-3">
                <Link href="#" className="flex justify-end items-center gap-4 hover:gap-5 transition-all">
                    <span className="text-personal-cta text-xs">Lihat Semua</span>
                    <Image 
                        src={cta}
                        width={8}
                        alt="cta"
                    />
                </Link>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="font-bold text-sm text-black">PIC</TableHead>
                            <TableHead className="font-bold text-sm text-black">Kantor Cabang</TableHead>
                            <TableHead className="font-bold text-sm text-black">Tanggal</TableHead>
                            <TableHead className="font-bold text-sm text-black">Jumlah</TableHead>
                            <TableHead className="font-bold text-sm text-black text-center">Keterangan</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {securities.map((security) => (
                            <TableRow key={security.id} className="border-none text-xs">
                                <TableCell>{security.PIC}</TableCell>
                                <TableCell>{security.kantorCabang}</TableCell>
                                <TableCell>{security.tanggal}</TableCell>
                                <TableCell>{security.jumlah}</TableCell>
                                <TableCell className="text-center">
                                    <span 
                                        className={`font-bold px-10 py-1 rounded ${
                                            security.keterangan
                                            ? 'text-personal-agree font-normal bg-personal-backgroundAgree'
                                            : 'text-red-700 bg-red-100'
                                        }`}
                                    >
                                        {security.keterangan ? 'Disetujui' : 'Ditolak'}
                                    </span>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>  
            </div>
            <div className="flex justify-center mt-3">
                <Link href="/dashboard/tabungan/permintaan">
                    <Button className="bg-personal-backgroundButton text-personal-button w-fit shadow-none font-normal text-xs px-10 rounded hover:bg-personal-backgroundButton hover:bg-opacity-60">Kirim</Button>
                </Link>
            </div>
        </div>
    )
}

export default TabunganContent