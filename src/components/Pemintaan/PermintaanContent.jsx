"use client"
import Image from "next/image"
import { Button } from "../ui/button"
import logo_mandiri from "@/assets/logo_mandiri.svg"
import kembali from "@/assets/permintaan/icon/kembali.svg"
import Link from "next/link"
import { useData } from "@/app/context/DataContext";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { useRouter } from "next/navigation"


const PermintaanContent = () => {
    const { securities } = useData();
    const router = useRouter();
    return(
        <div className="flex flex-col gap-3 mb-20">
            <Button onClick={() => router.back()} className="text-personal-button w-fit bg-personal-backgroundButton shadow-none hover:bg-personal-backgroundButton hover:bg-opacity-60">
                <Image 
                    src={kembali}
                    width={15}
                    alt="kembali"
                />
                <span className="text-xs">Kembali</span>
            </Button>
            <div className="text-sm rounded-lg grid grid-cols-5 gap-x-5 gap-y-9">
                <div className="shadow-xl col-span-3 px-5 py-9 flex flex-col gap-24">
                    <div>
                        <p>Nomor: R09.Br.Mlu/0800/2021</p>
                        <p>Tanggal: 23 Januari 2025</p>
                    </div>
                    <div>
                        <p>Kepada Yth</p>
                        <p>Area Head Bank Mandiri Balikpapan</p>
                        <p>Jl. Soekarno Hatta</p>
                        <p>Balikpapan</p>
                    </div>
                </div>
                <div className="bg-white rounded-lg col-span-2 shadow-xl w-fit flex flex-col gap-5 px-5 py-10">
                    <Image
                        src={logo_mandiri}
                        width={240}
                        alt="logo mandiri"
                    />
                    <div>
                        <p>PT. Bank Mandiri (Persero) Tbk</p>
                        <p>Cabang KCP Malinau</p>
                        <p>Jl. Raja Pandhita No. 01</p>
                        <p>Malinau</p>
                        <p>Telp. (0553) 2023203</p>
                        <p>Fax. (0551) 21340</p>
                        <p>E-mail :</p>
                        <p>Malinau@bankmandiri.co.id</p>
                    </div>
                </div>
                <div className="col-span-5 shadow-xl rounded-lg py-5 px-8 flex flex-col gap-5">
                    <div className="uppercase font-bold text-sm underline flex flex-col justify-center items-center">
                        <h2>PT. Bank Mandiri (Persero) Tbk.</h2>
                        <h2>Hasil Laporan Permintaan Surat Berharga</h2>
                    </div>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="font-bold text-sm text-black">No</TableHead>
                                <TableHead className="font-bold text-sm text-black">Tanggal</TableHead>
                                <TableHead className="font-bold text-sm text-black">Nama Cabang</TableHead>
                                <TableHead className="font-bold text-sm text-black">Jenis Surat Berharga</TableHead>
                                <TableHead className="font-bold text-sm text-black">Jumlah</TableHead>
                                <TableHead className="font-bold text-sm text-black text-center">Keterangan</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {securities.map((security) => (
                                <TableRow key={security.id} className="border-none text-xs">
                                    <TableCell>{security.id}</TableCell>
                                    <TableCell>{security.tanggal ? new Date(security.tanggal).toLocaleDateString('id-ID') : '-'}</TableCell>
                                    <TableCell>{security.kantorCabang}</TableCell>
                                    <TableCell>{security.jenisSurat}</TableCell>
                                    <TableCell>{security.jumlah}</TableCell>
                                    <TableCell className="text-center">
                                        <span 
                                            className={`font-bold px-10 py-1 rounded ${
                                                security.keterangan === "Disetujui"
                                                ? 'text-personal-agree font-normal bg-personal-backgroundAgree'
                                                : 'text-red-700 bg-red-100'
                                            }`}
                                        >
                                            {security.keterangan === "Disetujui" ? 'Disetujui' : 'Ditolak'}
                                        </span>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                </Table>  
                </div>
            </div>
        </div>
    )
}

export default PermintaanContent