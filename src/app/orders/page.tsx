import { Header } from "@/components/header";
import { Metadata } from "next";
import { Orders } from "./orders";

export const metadata: Metadata = {
    title: "Pedidos | Pizza Shop",
    description: "Pedidos Pizza Shop",
};

export default function Home() {
    return (
        <div className="flex flex-col lg:grid lg:grid-cols-app">
            <Header />
            <Orders />
        </div>
    )
}