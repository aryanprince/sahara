"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import {
  BadgeDollarSign,
  CalendarClock,
  Gamepad2,
  type LucideIcon,
  type LucideProps,
} from "lucide-react";
import Link from "next/link";
import React, { type ReactNode } from "react";

const components: {
  title: string;
  href: string;
  description: string;
  icon?: ReactNode;
}[] = [
  {
    title: "All Games",
    href: "/games",
    description: "View all of the games",
    icon: <Gamepad2 />,
  },
  {
    title: "Upcoming Releases",
    href: "/games/upcoming",
    description: "See all upcoming relesese",
    icon: <CalendarClock />,
  },
  {
    title: "Best Deals",
    href: "/games/deals",
    description: "Find the best deals",
    icon: <BadgeDollarSign />,
  },
];

export default function MainNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
            Home
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
            About
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Games</NavigationMenuTrigger>
          <NavigationMenuContent className="flex min-w-[250px] flex-col gap-3 p-3">
            {components.map((component) => (
              <div key={component.title}>
                <ListItem
                  href={component.href}
                  title={component.title}
                  icon={component.icon}
                  description={component.description}
                />
              </div>
            ))}
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function ListItem({
  href,
  title,
  description,
  icon,
}: {
  href: string;
  title: string;
  description: string;
  icon?: ReactNode;
}) {
  return (
    <li className="list-none">
      <NavigationMenuLink>
        <Link
          href={href}
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
        >
          <div className="flex items-center gap-4">
            {icon && <div className="text-xl">{icon}</div>}
            <div className="flex flex-col gap-1">
              <div className="text-sm font-medium leading-none">{title}</div>
              <div className="text-xs leading-none text-muted-foreground">
                {description}
              </div>
            </div>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
