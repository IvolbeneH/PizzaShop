'use client'
import Link, { LinkProps } from "next/link";

export type NavLinkProps = LinkProps

export function NavLink({ children, href }: { children: React.ReactNode, href: string }) {


    return <Link
        className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground"
        href={href}
    >
        {children}
    </Link>

}