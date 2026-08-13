"use client"

import * as React from "react"
import Link from "next/link"
import governor from "@/app/assets/images/governor.png"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const navigations = [
  { name: "Home", url: "/" },
  { name: "OneAPI", url: "/oneapi" },
  { name: "Activities", url: "/activities" },
]

const components: { title: string; href: string; description: string }[] = [
  {
    title: "About JICTDE",
    href: "/about-us",
    description: "Vision, mission, pillars, leadership, and the state digital transformation mandate.",
  },
  {
    title: "Policies",
    href: "/policies",
    description: "Government policies, documents, and digital economy guidance for Jigawa State.",
  },
  {
    title: "Progress Report",
    href: "/progress-report",
    description: "Implementation updates and public-sector digital transformation progress reports.",
  },
  {
    title: "News",
    href: "/news",
    description: "Latest news and official updates from Jigawa State ICT and Digital Economy.",
  },
  {
    title: "Gallery",
    href: "/gallery",
    description: "Images from programmes, events, trainings, and government digital initiatives.",
  },
  {
    title: "Impact",
    href: "/impact",
    description: "Evidence of programme outcomes and service delivery improvements.",
  },
]

export function NavComponents() {
  return (
    <NavigationMenu className="items-start">
      <NavigationMenuList>
        {navigations.map((component) => (
          <NavigationMenuItem key={component.url}>
            <Link href={component.url} legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>{component.name}</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}

        <NavigationMenuItem>
          <NavigationMenuTrigger>Government Portal</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[420px] lg:w-[640px] lg:grid-cols-[0.85fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    style={{ backgroundImage: `linear-gradient(180deg, rgba(2,44,34,0.1), rgba(2,44,34,0.9)), url(${governor.src})` }}
                    className="flex h-full min-h-64 w-full select-none flex-col justify-end rounded-lg bg-cover bg-center p-5 no-underline outline-none focus:shadow-md"
                    href="/about-us"
                  >
                    <div className="text-lg font-bold text-white">Jigawa State ICT and Digital Economy</div>
                    <p className="mt-2 text-sm leading-6 text-emerald-50">Official digital transformation portal for Jigawa State Government.</p>
                  </a>
                </NavigationMenuLink>
              </li>
              {components.map((component) => (
                <ListItem key={component.href} href={component.href} title={component.title}>{component.description}</ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn("block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-emerald-50 hover:text-emerald-950 focus:bg-emerald-50 focus:text-emerald-950", className)}
          {...props}
        >
          <div className="text-sm font-bold leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
