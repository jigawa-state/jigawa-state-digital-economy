import Image from 'next/image'
import Link from 'next/link'
import jigawalogo from '@/app/images/jigawalogo.jpg'


import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet"





const Topnav = () => {
  return (
    <div className=' w-full shadow-md py-3 fixed top-0 z-10 bg-white px-4 border-b'>
        <div className=" max-w-7xl mx-auto flex justify-between ">
          <Link href={''} className=' flex space-x-3 items-center'>
          <Image src={jigawalogo} alt='' className=' h-12 w-12 border-2 border-green-400 rounded-full' width={700} height={700} />
            <p className='font-poppins font-semibold '>Jigawa Portals</p>
          </Link>

          <div className=" md:flex space-x-3 hidden items-center">
              <Link href={''} className=' font-poppins font-semibold'>Home</Link>
              <Link href={''} className=' font-poppins font-semibold'>Solutions</Link>
              <Link href={''} className=' font-poppins font-semibold'>Maganement</Link>
          </div>
          <div className=" flex md:hidden items-center">
          <Sheet>
            <SheetTrigger>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
              </svg>
            </SheetTrigger>
            <SheetContent side={'left'}>
              <SheetHeader className=' flex flex-col'>
                <Link href={''} className=' flex space-x-3 items-center'>
                <Image src={jigawalogo} alt='' className=' h-12 w-12 border-2 border-green-400 rounded-full' width={700} height={700} />
                  <p className='font-poppins font-semibold '>Jigawa Portals</p>
                </Link>

                <div className="flex flex-col space-y-1 items-start my-4">
                    <Link href={''} className=' font-poppins font-semibold py-2'>
                        <SheetTrigger>
                          Home
                        </SheetTrigger>
                   </Link>
                    <Link href={''} className=' font-poppins font-semibold py-2'>
                        <SheetTrigger>
                              Solutions
                          </SheetTrigger>
                        </Link>
                    <Link href={''} className=' font-poppins font-semibold py-2'>
                        <SheetTrigger>
                          Management
                        </SheetTrigger>
                    </Link>
                </div>
              </SheetHeader>
            </SheetContent>
          </Sheet>
          </div>
        </div>
    </div>
  )
}

export default Topnav