"use client";

import * as React from "react";
import Link from "next/link";

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export function NavBar() {
    return (
        <NavigationMenu viewport={false}>
            <NavigationMenuList>
                <NavigationMenuLink asChild>
                    <Link href="/lease">Lease</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                    <Link href="/return">Return</Link>
                </NavigationMenuLink>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Lists</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <NavigationMenuLink asChild>
                            <Link href="/books">Books</Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                            <Link href="/students">Students</Link>
                        </NavigationMenuLink>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>

        </NavigationMenu>
    );
}
