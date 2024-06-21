import { Header } from "@/components/header";
import { Metadata } from "next";
import { Children } from "react";
import { Orders } from "./orders";

export const metadata: Metadata = {
    title: "Pedidos | Pizza Shop",
    description: "Pedidos Pizza Shop",
};

export default function Home() {
    return (
        <div>
            <Header />
            <Orders />
        </div>
    )
}