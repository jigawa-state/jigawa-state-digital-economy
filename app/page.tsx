import Image from "next/image";

import oneGp from '@/app/images/1GP.png'
// import amis from '@/app/images/AMIS.png'
// import agric from '@/app/images/Agriculture.png'
// import climate from '@/app/images/Climate.png'
// import emis from '@/app/images/EMiS.png'
// import engage from '@/app/images/Engagement.png'
// import geo from '@/app/images/Geography.png'
// import hmis from '@/app/images/HMIS.png'
// import stb from '@/app/images/STB.png'
// import subeb from '@/app/images/SUBEB.png'
// import tech from '@/app/images/TECHNOLOGY.png'
// import basic from '@/app/images/basiceducation1.png'
// import budget from '@/app/images/budget1.png'
// import claimcourt from '@/app/images/claimscourt1.png'
// import finance from '@/app/images/finance1.png'
// import icttechnical from '@/app/images/icttechnical.png'
// import identity from '@/app/images/identity.png'
// import information from '@/app/images/information.png'
// import jgwebsite from '@/app/images/jgwebsite1.png'
// import jichma from '@/app/images/jichma.png'
import jiglogo from '@/app/images/jiglogo2.png'
// import jmis from '@/app/images/jmis.png'
// import kpis from '@/app/images/kpis.png'
// import land from '@/app/images/land1.png'
// import revenue from '@/app/images/revenue.png'
// import socialregister from '@/app/images/socialregister.png'
// import specialduties from '@/app/images/specialduties.png'
// import water from '@/app/images/water.png'
// import budgets from '@/app/images/women_affairs1.png'
import './styles.css'

// const ministries =  [
//   {
//     id: 1,
//     url: "",
//     name: "State Official Website",
//     image: oneGp
//   },
//   {
//     id: 1,
//     url: "",
//     name: "Ministry of Finance ",
//     image: oneGp
//   },
  
//   {
//     id: 1,
//     url: "",
//     name: "Ministry of Budget",
//     image: oneGp
//   },
//   {
//     id: 1,
//     url: "",
//     name: "State Official Website",
//     image: oneGp
//   },
//   {
//     id: 1,
//     url: "",
//     name: "State Official Website",
//     image: oneGp
//   },
//   {
//     id: 1,
//     url: "",
//     name: "State Official Website",
//     image: oneGp
//   },
// ]

export default function Home() {
  return (
    <div className=" flex flex-col bg-white space-y-10 w-full">
      <div className=" w-full max-w-6xl mx-auto pt-[60px] text-center items-center justify-center">
       <div className=" flex flex-col space-y-2 justify-center items-center">
        <Image src={jiglogo} alt="" width={700} height={700} />
       {/* <h1 className=" text-4xl font-semibold text-green-500 font-poppins ">Welcome to Jigawa State Government </h1>
       <span className=" text-2xl font-poppins">The new World</span> */}
       </div>
      </div>
    <div className=" w-full  max-w-7xl mx-auto">
        <div className=" grid grid-cols-4">
            <div className="">
                <a href="https://www.jigawastate.gov.ng/" className="product-item">
                    <div className="product-item-image w-full items-center flex justify-center">
                        <Image width={1000} height={1000} className=" h-[120px] object-center object-contain w-[120px]" src={oneGp} alt="" />
                        <div className="product-item-image-hover">
                        </div>
                    </div>
                    <div className="product-item-content">
                        
                        <div className="product-item-title font-poppins">
                            State Official Website
                        </div>
                        <div className="product-item-price">
                       Jigawa State 
                        </div>
                        <div className="button-pill">
                            <span>Visit</span>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
      <div className="grid-container">
         <div className="grid-x grid-margin-x small-up-1 medium-up-1 large-up-1 grid-x-wrapper">
             <div className="product-box column" style={{textAlign: 'center',  margin: '50px 0 50px'}}>
               <a href="#" target="_blank" className="">POWERED BY: - Office of Technical Adviser on ICT and Digital Economy</a>
            </div>
         </div>
      </div>
    </div>
  );
}
