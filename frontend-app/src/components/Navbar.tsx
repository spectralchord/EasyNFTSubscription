import * as React from "react"
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/primitives/NavigationMenu"
import {Link} from "react-router-dom";

export const Navbar = () => (
    <NavigationMenu>
        <NavigationMenuList>
            <NavigationMenuItem>
                <Link to="/">
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Home
                    </NavigationMenuLink>
                </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <Link to="/app">
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        All subscriptions
                    </NavigationMenuLink>
                </Link>
            </NavigationMenuItem>
        </NavigationMenuList>
    </NavigationMenu>
);
