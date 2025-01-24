"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import logo_mandiri from  "@/assets/logo_mandiri.svg"
import Image from "next/image"
import { useToast } from "@/hooks/use-toast"
import { useState } from "react"
import { useRouter } from "next/navigation"

const LoginForm = () => {
    const router = useRouter();

    const accounts = [
        {
            username: "akun1",
            password: "passwordakun1"
        },
        {
            username: "akun2",
            password: "passwordakun2"
        },
    ]

    const [isLoading, setIsLoading] = useState(false);
    const { toast } = useToast()

    const handleSubmit = (e) => {
        setIsLoading(true)
        e.preventDefault();
        const formData = new FormData(e.target);
        const username = formData.get('username');
        const password = formData.get('password');

        const user = accounts.find((u) => u.username === username && u.password === password);

        if (user) {
            toast({
                title: "Login Berhasil",
                description: "Selamat Datang!",
              })
            setTimeout(() => {
                router.push('/dashboard');
            }, 2000);
        } else {
            toast({
                variant:"destructive",
                title: "Login Gagal",
                description: "Username atau password salah",
              })
            setTimeout(() => {
                setIsLoading(false);
            }, 1000);
        }
    };
    return(
        <div className="flex flex-col items-center">
            <Image
                src={logo_mandiri}
                width={209}
                alt="logo mandiri"
            />
            <Button className="w-fit bg-personal-backgroundButton hover:bg-personal-button hover:bg-opacity-20 text-personal-button flex gap-1 text-base shadow-none mt-9">
                <span>Masuk Ke</span>
                <span className="font-bold">PSB</span>
            </Button>
            <form onSubmit={handleSubmit} className="flex flex-col gap-2 mt-7">
                <div className="flex items-center border rounded w-80 border-personal-border">
                    <Label htmlFor="username" className="mx-3" >
                        <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 9C11.2091 9 13 7.20914 13 5C13 2.79086 11.2091 1 9 1C6.79086 1 5 2.79086 5 5C5 7.20914 6.79086 9 9 9Z" stroke="#C4C4C4" strokeWidth="1.5"/>
                            <path d="M17 16.5C17 18.985 17 21 9 21C1 21 1 18.985 1 16.5C1 14.015 4.582 12 9 12C13.418 12 17 14.015 17 16.5Z" stroke="#C4C4C4" strokeWidth="1.5"/>
                        </svg>
                    </Label>
                    <Input 
                        className="border-0" 
                        type="text" 
                        name="username"
                        id="username" 
                        placeholder="Username"
                        required/>
                </div>
                <div className="flex items-center border rounded w-80 border-personal-border">
                    <Label htmlFor="password" className="mx-3">
                        <svg width="18" height="23" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 16C7.46957 16 6.96086 15.7893 6.58579 15.4142C6.21071 15.0391 6 14.5304 6 14C6 12.89 6.89 12 8 12C8.53043 12 9.03914 12.2107 9.41421 12.5858C9.78929 12.9609 10 13.4696 10 14C10 14.5304 9.78929 15.0391 9.41421 15.4142C9.03914 15.7893 8.53043 16 8 16ZM14 19V9H2V19H14ZM14 7C14.5304 7 15.0391 7.21071 15.4142 7.58579C15.7893 7.96086 16 8.46957 16 9V19C16 19.5304 15.7893 20.0391 15.4142 20.4142C15.0391 20.7893 14.5304 21 14 21H2C1.46957 21 0.960859 20.7893 0.585786 20.4142C0.210714 20.0391 0 19.5304 0 19V9C0 7.89 0.89 7 2 7H3V5C3 3.67392 3.52678 2.40215 4.46447 1.46447C5.40215 0.526784 6.67392 0 8 0C8.65661 0 9.30679 0.129329 9.91342 0.380602C10.52 0.631876 11.0712 1.00017 11.5355 1.46447C11.9998 1.92876 12.3681 2.47995 12.6194 3.08658C12.8707 3.69321 13 4.34339 13 5V7H14ZM8 2C7.20435 2 6.44129 2.31607 5.87868 2.87868C5.31607 3.44129 5 4.20435 5 5V7H11V5C11 4.20435 10.6839 3.44129 10.1213 2.87868C9.55871 2.31607 8.79565 2 8 2Z" fill="#C4C4C4"/>
                        </svg>

                    </Label>
                    <Input 
                        className="border-0" 
                        type="password" 
                        name="password"
                        id="password" 
                        placeholder="Password" 
                        required/>
                </div>
                <div className="flex justify-center mt-5">
                    <Button 
                        type="submit"
                        disabled={isLoading}
                        className="w-fit shadow-none text-base bg-personal-backgroundButton text-personal-button hover:bg-personal-button hover:bg-opacity-20"
                    >
                        {isLoading ? 'Memuat...' : 'Masuk'}
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default LoginForm