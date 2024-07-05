'use client'
import { Home, Menu, Pizza, UtensilsCrossed } from "lucide-react";
import { NavLink } from "./nav-link";
import { ModeToggle } from "./theme/theme-toggle";
import { AccountMenu } from "./account-menu";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@radix-ui/react-collapsible'
import { Button } from "./ui/button";

export function Header() {

    return (
        <Collapsible className="border-r-2">
            <div className="flex flex-col h-full items-center gap-6 p-6">
                <div className="flex items-center w-full justify-between gap-3 mt-2 mr-10">
                    <div className="flex items-center gap-6 ml-4">
                        <Pizza className="h-6 w-6" />
                        <h1 className="font-bold">Pizza Shop</h1>
                    </div>
                    <CollapsibleTrigger asChild className="lg:hidden">
                        <Button variant='ghost'>
                            <Menu className="w-6 h-6" />
                        </Button>
                    </CollapsibleTrigger>
                </div>

                <CollapsibleContent forceMount className="flex flex-col justify-between items- w-full lg:h-full data-[state=closed]:hidden lg:data-[state=closed]:flex">
                    <nav className="flex lg:flex-col lg:gap-4 lg:mt-10 h-full items-end w-full lg:items-center space-x-4 lg:space-x-6">
                        <NavLink href='/'>
                            <div className="flex items-center w-[12rem] gap-2 p-4 border-2 rounded-2xl hover:opacity-40">
                                <Home className="w-6 h-6" />
                                Início
                            </div>
                        </NavLink>
                        <NavLink href='/orders'>
                            <div className="flex lg:mr-[1.25rem] items-center w-[12rem] gap-2 p-4 border-2 rounded-2xl hover:opacity-40">
                                <UtensilsCrossed className="w-6 h-6" />
                                Pedidos
                            </div>
                        </NavLink>
                    </nav>
                    <div className="lg:mt-auto lg:mb-8 flex lg:ml-0 ml-56 mt-4 gap-2">
                        <ModeToggle />
                        <AccountMenu />
                    </div>
                </CollapsibleContent>
            </div>
        </Collapsible>
    )
}