import Image from 'next/image'
import Link from 'next/link'
import jigawalogo from '@/app/images/jigawalogo.jpg'
import jigawaLogo from '@/app/assets/images/gigital-economy-logo.jpg'


import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet"


const navigations = [ 
  {name: 'Home', url: '/'},
  {name: 'About', url: '/about'},
  {name: 'Activities', url: '/activities'},
  {name: 'OneAPI', url: '/oneapi'},
  {name: "Policies", url: "/policies"},
  {name: "News", url: "/news "},
  {name: "Progress Resport", url: 'progress-report'},
  {name: "Gallery", url: "gallery"},
  {name: "Impact", url: 'impact'},
  {name: "KPI's", url: "kpi"}
]



const Topnav = () => {
  return (
    <div className=' w-full dark:text-gray-900 shadow-md py-3 fixed bg-fixed top-0 z-10 bg-white px-4 border-b'>
        <div className=" max-w-7xl mx-auto flex justify-between ">
          <Link href={'/'} className=' flex space-x-3 items-center'>
          <Image src={jigawaLogo} alt='' className=' h-12 flex-none object-contain max-w-max object-left rounded-full' width={700} height={700} />
            {/* <p className='font-poppins font-semibold '></p> */}
          </Link>

          <div className=" md:flex space-x-6 hidden items-center">
            {
              navigations.map(( nav ) => {
                return (
                  <Link href={nav.url} key={nav.url} className=' font-poppins font-semibold text-sm'>{ nav.name }</Link>
                )
              })
            }
              {/* <Link href={'/'} className=' font-poppins font-semibold'>Home</Link>
              <Link href={'/activities'} className=' font-poppins font-semibold'>Activities</Link> */}
              {/* <Link href={'/oneapi'} className=' font-poppins font-semibold bg-green-500 px-4 py-2 rounded-md text-white'>OneAPI</Link> */}
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
              <   Link href={'/'} className=' flex space-x-3 items-center'>
                  <Image src={jigawaLogo} alt='' className=' h-12 flex-none object-contain max-w-max object-left rounded-full' width={700} height={700} />
                    {/* <p className='font-poppins font-semibold '></p> */}
                  </Link>

                <div className="flex flex-col space-y-1 items-start my-4">
                   {
                    navigations.map((nav ) => {
                      return  <Link  key={nav.url} href={nav.url} className=' font-poppins font-semibold py-2'>
                                    <SheetTrigger>
                                      {nav.name}
                                    </SheetTrigger>
                              </Link>
                    })
                   }
                   
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