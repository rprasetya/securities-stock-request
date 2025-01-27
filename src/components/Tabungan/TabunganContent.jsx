"use client"
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
import { Input } from "../ui/input"
import { useData } from "@/app/context/DataContext";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { useState } from "react"


const TabunganContent = () => {
    const { securities, setSecurities } = useData();
    const [date, setDate] = useState(null);


    const addNewRow = () => {
        setSecurities((prevSecurities) => [
            ...prevSecurities,
            {
                id: Date.now(),
                PIC: "",
                kantorCabang: "",
                tanggal: "",
                jenisSurat: "",
                jumlah: "",
                keterangan: "",
            },
        ]);
    };

    const handleDateChange = (newDate, securityId) => {
        setSecurities((prevSecurities) =>
            prevSecurities.map((security) =>
                security.id === securityId ? { ...security, tanggal: newDate } : security
            )
        );
    };

    const handleInputChange = (id, field, value) => {
        setSecurities((prevSecurities) =>
            prevSecurities.map((security) =>
                security.id === id ? { ...security, [field]: value } : security
            )
        );
        console.log(securities);
    };

    const handleDeleteRow = (id) => {
        setSecurities((prevSecurities) =>
            prevSecurities.filter((security) => security.id !== id)
        );
    };
    
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
                            <TableHead className="font-bold text-sm text-black">Jenis Surat</TableHead>
                            <TableHead className="font-bold text-sm text-black">Jumlah</TableHead>
                            <TableHead className="font-bold text-sm text-black text-center">Keterangan</TableHead>
                            <TableHead className="font-bold text-sm text-black text-center">Aksi</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {securities.map((security) => (
                            <TableRow key={security.id} className="border-none text-xs">
                                <TableCell>
                                    <Input 
                                        placeholder="......."
                                        value={security.PIC}
                                        onChange={(e) =>
                                            handleInputChange(security.id, "PIC", e.target.value)
                                        }
                                    />
                                </TableCell>
                                <TableCell>
                                    <Input 
                                        placeholder="......."
                                        value={security.kantorCabang}
                                        onChange={(e) =>
                                            handleInputChange(security.id, "kantorCabang", e.target.value)
                                        }
                                    />
                                </TableCell>
                                <TableCell>
                                    <Select>
                                        <SelectTrigger className="flex gap-10" >
                                            <SelectValue placeholder={security.tanggal ? `${new Date(security.tanggal).toLocaleDateString("id-ID")}` : "Pilih Tanggal"} />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <Calendar
                                                    mode="single"
                                                    selected={security.tanggal ? new Date(security.tanggal) : null}
                                                    onSelect={(newDate) => handleDateChange(newDate, security.id)}
                                                    className="rounded-md border shadow active:text-white"
                                                />
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </TableCell>
                                <TableCell>
                                    <Input 
                                        placeholder="......."
                                        value={security.jenisSurat}
                                        onChange={(e) =>
                                            handleInputChange(security.id, "jenisSurat", e.target.value)
                                        }
                                    />
                                </TableCell>
                                <TableCell>
                                    <Input 
                                        placeholder="......."
                                        value={security.jumlah}
                                        onChange={(e) =>
                                            handleInputChange(security.id, "jumlah", e.target.value)
                                        }
                                    />
                                </TableCell>
                                <TableCell className="text-center flex items-center gap-2">
                                    <Select
                                        value={security.keterangan}
                                        onValueChange={(value) =>
                                            handleInputChange(security.id, "keterangan", value)
                                        }
                                    >
                                        <SelectTrigger className="flex gap-10">
                                            <SelectValue placeholder="Pilih Keterangan" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectLabel>Keterangan</SelectLabel>
                                                <SelectItem value="Disetujui">Disetujui</SelectItem>
                                                <SelectItem value="Ditolak">Ditolak</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </TableCell>
                                <TableCell className="text-center">
                                    <Button
                                        onClick={() => handleDeleteRow(security.id)}
                                        className="bg-red-500 text-white text-xs px-3 py-2 rounded"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width={24}viewBox="0 0 24 24"><path fill="currentColor" d="M7 21q-.825 0-1.412-.587T5 19V6q-.425 0-.712-.288T4 5t.288-.712T5 4h4q0-.425.288-.712T10 3h4q.425 0 .713.288T15 4h4q.425 0 .713.288T20 5t-.288.713T19 6v13q0 .825-.587 1.413T17 21zM17 6H7v13h10zm-7 11q.425 0 .713-.288T11 16V9q0-.425-.288-.712T10 8t-.712.288T9 9v7q0 .425.288.713T10 17m4 0q.425 0 .713-.288T15 16V9q0-.425-.288-.712T14 8t-.712.288T13 9v7q0 .425.288.713T14 17M7 6v13z"></path></svg>
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>  
                <div className="flex justify-end mt-4">
                    <Button
                        className="w-fit shadow-none font-normal text-xs px-5 rounded"
                        onClick={addNewRow}
                    >
                        Tambah Baris
                    </Button>
                </div>
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