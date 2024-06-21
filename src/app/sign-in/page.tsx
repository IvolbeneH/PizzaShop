import { Metadata } from "next";
import { Pizza } from 'lucide-react'
import { SingIn } from "./sing-in";
import Image from "next/image";
import pizzameio from '@/assets/pizzameio.svg'

export const metadata: Metadata = {
    title: "Sign-In | Pizza Shop",
    description: "",
};

export default function Home() {
    return (
        <div className="min-h-screen grid grid-cols-2">
            <div className="h-full border-r border-foreground/5 bg-muted p-10 text-muted-foreground flex flex-col justify-between">
                <div className="flex items-center gap-3 text-lg font-medium text-foreground">
                    <Pizza className="h-5 w-5" />
                    <span className="font-semibold">Pizza Shop</span>
                </div>
                <div className="flex justify-center">
                    <Image src={pizzameio} alt="" width={370} height={30} />
                </div>
                <footer className="text-sm">
                    Painel do parceiro &copy; Pizza Shop - {new Date().getFullYear()}
                </footer>
            </div>
            <div className="flex flex-col items-center justify-center relative bg-zinc-900">
                <SingIn />
            </div>
        </div>
    )
}