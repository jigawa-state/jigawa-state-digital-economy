'use client'
import { logOut } from "@/actions/logout"
import { LockOpen1Icon } from "@radix-ui/react-icons"


export default function LogoutButton() {
  const handleLogout = async () => {
    try {
      await logOut()
      // Force a complete page reload to clear any remaining state
      window.location.href = '/'
    } catch (error) {
      console.error('Logout failed:', error)
    }
  }

  return (

    <button  onClick={handleLogout} className=" flex text-sm bg-gray-200 dark:bg-gray-800 dark:text-stone-400 text-stone-900 rounded-xl px-3 py-1 items-center space-x-2">
      <p className=" text-xs">Log Out</p>
      <LockOpen1Icon className=" h-3 w-3" />
  </button> 
  )
}
