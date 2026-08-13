import React from 'react'
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { Toaster } from "@/components/ui/toaster"

const AuthLayout = ({ children }: { children:  React.ReactNode}) => {
  return (

     <>
        <SidebarProvider>
          <AppSidebar />
            <main className=' w-full dark:bg-dark-bg '>
              <SidebarTrigger />
              {children}
              <Toaster />
            </main>
        </SidebarProvider>
    </>
  )
}

export default AuthLayout