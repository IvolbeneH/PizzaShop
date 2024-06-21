

import { Home, Menu, Pizza, UtensilsCrossed } from "lucide-react";
import { Separator } from "./ui/separator";
import { NavLink } from "./nav-link";
import { ModeToggle } from "./theme/theme-toggle";
import { AccountMenu } from "./account-menu";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@radix-ui/react-collapsible'
import { Button } from "./ui/button";

export function Header() {
    return (
        <Collapsible className="border-b">
            <div className="flex h-16 items-center gap-6 px-6">
                <div>
                    <Pizza className="h-6 w-6" />
                </div>
                <Separator orientation="vertical" className="h-6" />
                <nav className="flex items-center space-x-4 lg:space-x-6">
                    <NavLink href='/'>
                        <Home className="w-4 h-4" />
                        Início
                    </NavLink>
                    <NavLink href='/orders'>
                        <UtensilsCrossed className="w-4 h-4" />
                        Pedidos
                    </NavLink>
                </nav>
                <div className="ml-auto flex items-center gap-2">
                    <ModeToggle />
                    <AccountMenu />
                </div>
            </div>
        </Collapsible>
    )
}