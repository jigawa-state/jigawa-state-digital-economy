import { Calendar, Home, Inbox, Search, Settings,} from "lucide-react"
import { Switch } from "@/components/ui/switch"
import { LockOpen1Icon } from "@radix-ui/react-icons"
import logo from '@/app/assets/images/jictde.png'


const homes = [
    {
      title: "Home",
      url: "#",
      icon: Home,
    },
    {
      title: "News",
      url: "/user/news",
      icon: Inbox,
    },
    {
      title: "Policies",
      url: "/user/policies",
      icon: Calendar,
    },
    {
      title: "Gallery ",
      url: "/user/gallery",
      icon: Search,
    },
  ]


import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
  } from "@/components/ui/sidebar"
import { DarkButton } from "./DarkButton"
import Image from "next/image"
  
  export function AppSidebar() {
    return (
     <Sidebar>
      <SidebarHeader className=" w-full flex justify-start ">
        <div className=" text-lg font-semibold font-poppins text-black">
          <Image alt="" src={logo} className=" h-10 object-contain" />
        </div>
      </SidebarHeader>
        <SidebarContent>
            <SidebarGroup>
                <SidebarGroupLabel className=" border-b self-center ">Jigawa ICT & Digital Economy</SidebarGroupLabel>
                <SidebarGroupContent>
                    <SidebarMenu>
                        {
                            homes.map(item => (
                                <SidebarMenuItem className="" key={item.title}>
                                    <SidebarMenuButton className=" py-3" asChild>
                                        <a className="" href={item.url}>
                                            <item.icon />
                                            <span className=" py-3"> {item.title} </span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))
                        }
                    </SidebarMenu>
                </SidebarGroupContent>
            </SidebarGroup>
        </SidebarContent>
        <SidebarFooter className="">
         <div className=" dark:bg-gray-600/50 bg items-center flex justify-between py-1 bg-white dark:bg-stone-950 px-3 rounded-xl w-full h-full">
                <button className=" flex text-sm bg-stone-200 dark:bg-stone-800 dark:text-stone-400 text-stone-900 rounded-full px-3 py-2 items-center space-x-2">
                  <p className=" text-xs">Log Out</p>
                  <LockOpen1Icon className=" h-3 w-3" />
                </button> 
                <DarkButton />
         </div>
        </SidebarFooter>
     </Sidebar>
    )
  }
  