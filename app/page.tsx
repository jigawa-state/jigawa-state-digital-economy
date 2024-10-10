import Image, { StaticImageData } from "next/image";

import oneGp from '@/app/images/1GP.png'
import agric from '@/app/images/Agriculture.png'
import climate from '@/app/images/Climate.png'
import emis from '@/app/images/EMiS.png'
import hmis from '@/app/images/HMIS.png'
import subeb from '@/app/images/SUBEB.png'
import basic from '@/app/images/basiceducation1.png'
import budget from '@/app/images/budget1.png'
import finance from '@/app/images/finance1.png'
import information from '@/app/images/information.png'
import jigawalogo from '@/app/images/jigawalogo.jpg'
import jgwebsite from '@/app/images/jgwebsite1.png'
import land from '@/app/images/land1.png'
import specialduties from '@/app/images/specialduties.png'
import water from '@/app/images/water.png'
// import engage from '@/app/images/Engagement.png'
// import amis from '@/app/images/AMIS.png'
// import geo from '@/app/images/Geography.png'
// import stb from '@/app/images/STB.png'
// import tech from '@/app/images/TECHNOLOGY.png'
// import claimcourt from '@/app/images/claimscourt1.png'
// import icttechnical from '@/app/images/icttechnical.png'
// import identity from '@/app/images/identity.png'
// import jichma from '@/app/images/jichma.png'
// import jiglogo from '@/app/images/jiglogo2.png'
// import jmis from '@/app/images/jmis.png'
// import kpis from '@/app/images/kpis.png'
// import revenue from '@/app/images/revenue.png'
// import socialregister from '@/app/images/socialregister.png'
// import womenAffairs from '@/app/images/women_affairs1.png'
import './styles.css'

const ministries =  [
  {
    id: 1,
    url: "https://www.jigawastate.gov.ng/",
    name: "State Official Website",
    image: jgwebsite
  },
  {
    id: 2,
    url: "https://finance.jg.gov.ng",
    name: "Ministry of Finance",
    image: finance
  },
  
  {
    id: 3,
    url: "https://budget.jg.gov.ng",
    name: "Ministry of Budget",
    image: budget
  },
  {
    id: 4,
    url: "https://api.jg.gov.ng",
    name: "One API",
    image: oneGp
  },

  {
    id: 5,
    url: "https://land.jg.gov.ng",
    name: "Ministry of Land and Housing",
    image: land
  },
  {
    id: 6,
    url: "",
    name: "Ministry of Informations, Youth Sport and Culture",
    image: information
  },
  
  {
    id: 7,
    url: "",
    name: "Ministry of Special Duties",
    image: specialduties
  },
  {
    id: 8,
    url: "https://jigawastate.gov.ng",
    name: "State Official Website",
    image: jgwebsite
  },
  {
    id: 9,
    url: "https://water.jg.gov.ng",
    name: "Ministry of Water Resources",
    image: water
  },
  {
    id: 10,
    url: "",
    name: "Ministry of Agriculture",
    image: agric
  },
  {
    id: 11,
    url: "",
    name: "State Official Website",
    image: climate
  },
  {
    id: 12,
    url: "",
    name: "State Official Website",
    image: hmis
  },
  {
    id: 13,
    url: "",
    name: "State Official Website",
    image: subeb
  },
  {
    id: 14,
    url: "",
    name: "State Official Website",
    image: basic
  },
  {
    id: 10,
    url: "",
    name: "State Official Website",
    image: budget
  },
  {
    id: 10,
    url: "",
    name: "Education Managament Information System",
    image: emis
  },
]

interface Card {
    id: number 
    url: string
    name: string
    image: StaticImageData
}

export default function Home() {
  return (
    <div className=" flex flex-col bg-white space-y-10 w-full">
      <div className=" w-full max-w-6xl mx-auto h-[80vh] pt-[150px] text-center items-center justify-center">
       <div className=" flex flex-col space-y-4 justify-center bg my-auto items-center">
        <Image src={jigawalogo} className=" h-36 w-36 rounded-full border-green-600 border-4" alt="" width={700} height={700} />
       <h1 className=" text-3xl font-semibold text-green-500 font-poppins ">Welcome to Jigawa State ICT and Digital Economy Service Portal </h1>
       <span className=" text-xl font-poppins">Powered by the office of the Technical Adviser on ICT and Digital Economy</span>
       </div>
      </div>
    <div className=" w-full  max-w-7xl mx-auto">
        <div className=" grid grid-cols-1 md:grid-cols-4 px-4 gap-4 ">
           {
            ministries.map((item: Card) => {
              return (
                <div className="" key={item.id}>
                <a href="https://www.jigawastate.gov.ng/" className="product-item rounded-lg">
                    <div className="product-item-image w-full items-center flex justify-center">
                        <Image width={1000} height={1000} className=" h-[120px] object-center object-contain w-[120px]" src={item.image} alt="" />
                        <div className="product-item-image-hover">
                        </div>
                    </div>
                    <div className="product-item-content">
                        
                        <div className="product-item-title font-poppins">
                           { item.name }
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
              )
            })
           }
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
