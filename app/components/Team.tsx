import React from 'react'
import Image from "next/image"
import rislan from '@/app/assets/team/rislan.jpg'
import hashim from '@/app/assets/team/hashim.jpg'
import governor from '@/app/assets/team/governor.png'
import deputy from '@/app/assets/team/deputy.png'
import murtala from '@/app/assets/team/murtala.jpg'
import habib from '@/app/assets/team/habib.jpg'
import Link from 'next/link'
import jigawaFlag from '@/app/assets/images/ng-flag.png'
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";



const teamsSocials = [
    { social: { facebook: {
      url: '#',
      icon: <FaFacebookF />,
      
        },
        twitter: {
            url: '#',
            icon: <FaXTwitter />,
        },
        linkedin: {
            url: 'https://www.linkedin.com/in/dr-rislan-kanya/',
            icon: <FaLinkedinIn />,
        }    
    },    
  name: "Dr. Rislan Abdulazeez Kanya", 
        role: "Technical Advisor to the Executive Governor of Jigawa State on ICT and Digital Economy", 
        image: rislan 
    },
    { social: { facebook: {
      url: '#',
      icon: <FaFacebookF />,
      
    },
      twitter: {
          url: '#',
          icon: <FaXTwitter />,
      },
      linkedin: {
          url: 'https://www.linkedin.com/in/hashim-h-hashim/',
          icon: <FaLinkedinIn />,
      }    
  }, name: "Hashim H Hashim", role: "Special Assistant to the Executive Governor of Jigawa State on ICT II", image: hashim},
    { social: { facebook: {
      url: '#',
      icon: <FaFacebookF />,
      
    },
      twitter: {
          url: '#',
          icon: <FaXTwitter />,
      },
      linkedin: {
          url: 'https://www.linkedin.com/in/hashim-h-hashim/',
          icon: <FaLinkedinIn />,
      }    
    }, name: "Murtala Lawan", role: "Senior Special Assistant to the Executive Governor of Jigawa State on ICT and Digital Economy", image: murtala },
     { social: { facebook: 
        {
          url: '#',
          icon: <FaFacebookF />,
          
        },
      twitter: {
          url: '#',
          icon: <FaXTwitter />,
      },
      linkedin: {
          url: 'https://www.linkedin.com/in/habib-kani-60b4088a/',
          icon: <FaLinkedinIn />,
      }    
  }, name: "Habib Kani", role: "Special Advisor to the Executive Governor of Jigawa State on Technology and Innovation", image: habib },
  ]


  const executives = [
    {
      id: 1,
      name: "H.E Malam Umar A. Namadi, FCA",
      slug: 'governor',
      designation: "The Executive Governor of Jigawa State",
      image: governor,
    },
    {
      id: 2,
      name: "H.E Engr. Aminu Usman",
      slug: 'deputy-governor',
      designation: "Deputy Governor of Jigawa State",
      image: deputy
    }
  ]


const Team = () => {
  return (
    <div>
         <section style={{ backgroundImage: `url(${jigawaFlag.src})` }} className=" bg-contain bg-no-repeat bg-center bg-blend-overlay bg-white/50 py-20 h-full pt-20 px-4 sm:px-6 lg:px-8">
        <div className="relative max-w-7xl grid grid-cols-1 md:grid-cols-2 space-x-4 space-y-4 items-center pt-20 mx-auto">
          {/* {
            executives.map(( executive ) => {
              return (
                <Link href={`executives/${executive.slug}`} key={executive.id} className=" hover:bg-green-200/40 p-3 rounded-md  flex items-center space-x-4 flex-col justify-center text-center md:text-start md:flex-row">
                    <Image src={executive.image} alt='' className=' h-[200px] bg-white rounded-full w-[200px] border-green-500 border-4 object-cover obj' width={700} height={700} />
                    <div className="flex flex-col">
                    <h1 className=" font-poppins">{ executive.designation}</h1>
                      <p className=" text-gray-800 hover:underline text-lg md:text-2xl font-bold"> { executive.name } </p>
                    </div>
                </Link>
              )
            } )
          } */}
        </div>
      </section>
      {/* Team Section */}
      <section className="py-20 bg-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {teamsSocials.map((member, index) => (
              <div key={index} className=" py-6 text-center">
                <img
                  className="mx-auto h-40 w-40 rounded-full object-cover border-2 border-green-500 xl:h-56 xl:w-56"
                  src={member.image.src}
                  alt={member.name}
                />
                <div className="mt-6">
                  <p className="text-sm text-green-600 font-poppins font-medium">{member.role}</p>
                  <h3 className="text-lg font-medium font-poppins text-gray-900">{member.name}</h3>
                </div>
                <div className=" flex w-full  items-center justify-center space-x-4">
                    <a href={member.social.facebook.url} className="text-gray-500 hover:text-green-600" target="_blank" rel="noopener noreferrer">
                        {member.social.facebook.icon}
                    </a>
                    <a href={member.social.twitter.url} className="text-gray-500 hover:text-green-600" target="_blank" rel="noopener noreferrer">
                        {member.social.twitter.icon}
                    </a>
                    <a href={member.social.linkedin.url} className="text-gray-500 hover:text-green-600" target="_blank" rel="noopener noreferrer">
                        {member.social.linkedin.icon}
                    </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Team