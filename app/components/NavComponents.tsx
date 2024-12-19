"use client"

import * as React from "react"
import Link from "next/link"
import governor from '@/app/assets/images/governor.png'

import { cn } from "@/lib/utils"
// import { Icons } from "@/components/icons"
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
    {name: 'Home', url: '/'},
    {name: 'OneAPI', url: '/oneapi'},
    {name: 'Activities', url: '/activities'},
    
    // {name: 'About', url: '/about-us'},
    // {name: 'Activities', url: '/activities'},
    // {name: "Policies", url: "/policies"},
    // {name: "News", url: "/news "},
    // {name: "Progress Resport", url: '/progress-report'},
    // {name: "Gallery", url: "/gallery"},
    // {name: "Impact", url: '/impact'},
    // {name: "KPI's", url: "/kpi"}
  ]

  

const components: { title: string; href: string; description: string }[] = [
 
  {
    title: "Policies",
    href: "/policies",
    description: " Government policies and how they affect the people of Jigawa State",
  },
  {
    title: "Progress",
    href: "/progress-report",
    description:
      "Our progress reports on each of our activities in JICTDE",
  },
  {
    title: "News",
    href: "/news",
    description: " The latest news and updates from JICTDE",
  },
  {
    title: "Gallery",
    href: "/gallery",
    description:
      "Our gallery of images from our activities, events and more",
  },
  {
    title: "Impact",
    href: "/impact",
    description:
      " The impact of our activities on the people of Jigawa State",
  },
]

export function NavComponents() {
  return (
    <NavigationMenu className=" items-start" >
      <NavigationMenuList dir="left">
          <ul className=" flex ">
              {navigations.map((component) => (
                  
                  <NavigationMenuItem key={component.url}>
                        <Link href={component.url} legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                {component.name}
                                </NavigationMenuLink>
                        </Link>
                </NavigationMenuItem>
              ))}
            </ul>


        <NavigationMenuItem>
          <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[600px] lg:grid-cols-[.80fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    style={{
                        backgroundImage: `url(${governor.src})`
                    }}
                    className="flex h-full w-full bg-no-repeat bg-cover select-none object-center flex-col justify-end bg-opacity-35 bg-gradient-to-b from-black/50 to-black rounded-lg no-underline outline-none focus:shadow-md"
                    href="/about-us"
                  >
                    {/* <Icons.logo className="h-6 w-6" /> */}
                   <div className="bg-gradient-to-b py-4 px-4 from-transparent rounded-b-lg to-black/80 flex flex-col">
                   <div className="mb-2 mt-4 text-500-300 text-green-200 text-lg font-medium">
                      JICTDE
                    </div>
                    <p className="text-sm leading-tight text-green-50 text-muted-foreground ">
                      Digitalizaing Jigawa State Infrastructure to imporove, transparent 
                    </p>
                   </div>
                  </a>
                </NavigationMenuLink>
              </li>
             {
              components.map((component) => {
                return  <ListItem className=" text-sm" href={component.href} title={ component.title }> { component.description } </ListItem>
              })
             }
             
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        {/* <NavigationMenuItem>
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem> */}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
