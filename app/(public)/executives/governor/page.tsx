import PagesBanner from '@/app/components/PagesBanner'
import React from 'react'
import governor from '@/app/assets/team/governor.png'
import Image from 'next/image'
import GovernorBiography from '../_components/governors-biography'

const page = ( ) => {
   
  return (
    <div className=' w-full'>
      <PagesBanner subtitle='' message='The Executive Governor of Jigawa State ' />
      <div className=" max-w-6xl px-10 flex flex-col justify-center text-center md:text-start mx-auto w-full md:px-0">
       <div className=" flex md:flex-row w-full flex-col space-x-3  justify-center">
            <div className=" h-[150px] md:h-[250px] flex-none w-[150px] md:w-[250px] overflow-hidden rounded-full border-green-200 border-4 -mt-20 bg-white">
            <Image src={governor}  className=' w-full h-full object-cover object-center' alt='Jigawa State Governor' height={500} width={500} />
            </div>
            <div className=" w-full h-full flex flex-col md:py-6 py-4">
              <h1 className=' font-poppins text-lg'> The Executive Governor of Jigawa State</h1>
              <p className=' font-bold text-xl md:text-4xl'>H.E Malam Umar A. Namadi, FCA</p>
            </div>
       </div>

       <GovernorBiography />

        {/* <div className=" w-full flex max-w-6xl mx-auto text-justify flex-col">
            <h1>Biography</h1> 

            <p>
            Born into a family of religious scholars (his grandfather was the Chief Imam of Kafin-Hausa) in Kafin-Hausa town of Kafin-Hausa Local Government Area of Jigawa State, Mallam Namadi started his education at Kafin Hausa Central Primary School (along with the traditional Qur’anic and Islamiyya education) from where he proceeded to Mallam Madori Teachers College where he obtained his Teachers Grade II Certificate in 1982.

            In 1984, he sat for an A Level Certificate examination and passed with good grades, aiding him secured admission for undergraduate studies at the Bayero University, Kano where he graduated with a BSc in Accounting in 1987, and later, bagged an MBA from the same institution.

            After graduation, Mallam Umar Namadi served a mandatory scheme, National Youths Service Corps (NYSC) in Makurdi, Benue State, where he worked as an Audit Assistant at Egwu Oga & Co. auditing firm. Between 1988 and 1994, he held various positions working with an auditing firm Abdu Abdurrahim & Co. Chartered Accountants, based in Kano, which includes Audit Management and Consultancy Services.

            He worked briefly at the National Board for Community Banks where he held the rank of Principal Inspection Officer and moved to Kaduna Textiles Limited where he served in various capacities.

            As his career progressed, Mallam Umar moved to the Dangote Group of Companies where he rose from the rank of Assistant General Manager of Finance to occupy a higher position of Financial Controller in both the Dangote Sugar Refinery and Dangote Group.

            After a stint in the private sector, he deployed his expertise and experience to the public sector. Between 2006 and 2013, he worked with National Health Insurance Scheme (NHIS) as a General Manager of Finance & Accounts and General Manager of Contribution Management Department.

            Afterward, he left the public service to delve into business and private practice, holding positions as Managing Partner Namadi, Umar & Co. Chartered Accountants; Chairman/CEO Danmodi Food Processing Limited (Rice Millers); and Chairman/CEO Danmodi Farms Limited.

            Before his ascension as the Deputy Governor of Jigawa State in 2019, Mallam Umar Namadi had served as Commissioner of Finance and Economic planning in the state from 2015-2019 where he championed several innovations in the management of the state’s finances, improving the efficiency and transparency.

            Mallam Namadi’s career in both the public and private sectors as well as in the political realms has been marked by his resourcefulness, high-level adherence to ethics, and persistence in following the rules and doing the right things. This stands him out as an incorruptible, honest, and hardworking professional wherever he works.
            </p>
        </div> */}
      </div>
    </div>
  )
}

export default page