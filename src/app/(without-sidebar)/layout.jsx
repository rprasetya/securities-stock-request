import { Poppins } from "next/font/google";
import "../globals.css";
import { Toaster } from "@/components/ui/toaster"


export default function RootLayout({ children }) {
  return (
    <>
      <main className="w-full">{children}</main>
      <Toaster/>
    </>
  );
}
