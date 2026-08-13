import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import Topnav from "../components/Topnav";
import { Footer } from "../components/Footer";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "JICTDE",
  description: "Jigawa State Digital ICT and Digital Economy",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}  antialiased`}
      >
        <Topnav />
        <div className=' flex flex-row  items-center max-w-7xl mx-auto justify-center h-screen w-full'>
      <div className=" hidden lg:block ">
        {/* <Image src={authImage} className='h-[400px] object-contain' alt='' /> */}
      </div>
        <div className=" flex lg:w-5/12 h-full my-auto w-full  items-center rounded-md  justify-center px-10 py-10">
              {children}
        </div>
    </div>
        <Footer />
      </body>
    </html>
  );
}



// import React from 'react'
// import { PublicNavigations } from '@/components/PublicNavigations'

// const AuthLayout = ({ children }: { children:  React.ReactNode}) => {
//   return (

//      <>
//     <div className=' flex flex-row  items-center max-w-7xl mx-auto justify-center h-screen w-full'>
//       <div className=" hidden lg:block ">
//         {/* <Image src={authImage} className='h-[400px] object-contain' alt='' /> */}
//       </div>
//         <div className=" flex lg:w-5/12 h-full my-auto w-full  items-center rounded-md  justify-center px-10 py-10">
//               {children}
//         </div>
//     </div>
//     </>
//   )
// }

// export default AuthLayout