'use client'
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, FileText } from "lucide-react"
import PagesBanner from '../../components/PagesBanner'




interface Policy {
  id: number
  title: string
  description: string
  documentUrl: string
  policyUrl: string
}

const policies = [
    {
        id: 1,
        title: "5th Govt Inaugural Speach",
        description: `
        My fellow beloved citizens of Jigawa State. Today’s inauguration marks the beginning of a new dawn for our dear State for 
        which we express our utmost gratitude to Allah, the Most Beneficent and Most Merciful, Al-Fattah - Malikui-Mulk, Dhul Jalali 
        Wal Ikram - The Giver of Victory, The Owner of Sovereignty, The Lord of Majesty, and Generosity. It is with His special grace 
        that we are alive, healthy, and present to witness the proceedings of this very auspicious day in the historical development of our dear State. 
        The day we are assuming the mantle of leadership of our dear State with my humble self as the 5th democratically elected Governor and the 2nd under our great party, the All-Progressive Congress.
        Our victory and the victory of our great party at both the State and Federal level elections is a victory for democracy, 
        for the progressives and for a united Jigawa State and a united Nigeria. It is a Victory for Greater Jigawa. We profoundly 
        thank Allah (SWT) for the resounding victories. By this, the people of Nigeria and indeed, the People of Jigawa State; have sent a clear message of their satisfaction with the gradual, but undoubtedly positive, transformations taking place under our great party, the APC. We profoundly thank the good people of Jigawa State and Nigeria in general for the confidence reposed in us and our party by entrusting us with the mandate to continue to govern, to manage your affairs and resources, to steer the ship of state and to sustain and improve on the momentum of ongoing transformations taking place across the length and breadth of our dear State and the Nation in general.
        `,
        documentUrl: "https://jigawa-state.s3.us-east-1.amazonaws.com/5th-govts-inaugural-speach.pdf",
        policyUrl: "/policies/5th-govts-inaugural-speach"
      }, 

    {
      id: 2,
      title: "Adoption Of National Broadband Plan",
      description: `
                Jigawa State Broadband Plan is a comprehensive plan aimed at bridging the digital divide and fostering a digitally 
                inclusive society (Broadband meaning).


                The state has made significant progress in broadband penetration, as at Oct 2022, broadband penetration in the state 
                stands at 25%, showcasing the increase in availability and accessibility of high-speed internet services. it is worthy to note 
                there exist unserved and underserved areas within the state that need access to broadband services.


                This document consists of four pillars that collectively form the foundation for the State Broadband Plan, that guide its 
                strategic approach to achieve widespread broadband penetration, economic growth and improved quality of life for the 
                residents of the State
                ` ,
      documentUrl: "https://jigawa-state.s3.us-east-1.amazonaws.com/adoption-of-national-broadband-plan.pdf",
        policyUrl: "/policies/adoption-of-national-broadband-plan"
    },
    {
      id: 3,
      title: "Jigawa eGovt Master Plan",
      description: `
      Jigawa State from its creation from Kano State in 1991 had always sought to create a new future for
      the citizens and economy, hence the slogan: 'A New World' to reflect this vision. The Present 
      administration led by His Excellency, Badaru Abubakar, is seeking to extend this vision by developing 
      plans and strategies to prepare the Jigawa State for the Digital Economy and the global 4 Industrial 
      Revolution (4IR). At digital economy age, creating a new world and future for Jigawa State requires
      the Government to position digital at the core of its developmental reforms, plans and strategies; 
      provide enabling environment for itself to first digitally transform and get digital transformation to 
      effectively take off. The Jigawa State as part of the Federating Unit is taking after the Federal 
      Government of Nigeria in its digital transformation efforts. The State, with the support of the 
      National Information Technology Development Agency (NITDA), is the first to adopt and adapt the 
      Nigeria e-Government Master Plan. 
      `,
      documentUrl: "https://jigawa-state.s3.us-east-1.amazonaws.com/Jigawa-egovt-master-plan.pdf",
        policyUrl: "/policies/jigawa-egovt-master-plan"
    },
    {
      id: 4,
      title: "Digital Job Playbook",
      description: `
                The Advocacy Plan for the Adoption of the Digital Jobs Playbook is a 
                comprehensive roadmap for leveraging digital transformation to drive 
                economic growth and development in Jigawa State. In an increasingly 
                interconnected world, digital innovation has become a catalyst for progress, 
                and this document serves as a guide toward achieving a digitally 
                empowered citizenry.

                The purpose of this advocacy plan is to harness the potential of digital 
                technologies and initiatives to create new job opportunities, enhance 
                efficiency and improve the quality of life of the citizens. Embracing digital 
                transformation will position the state as a hub for innovation, job creation, 
                and sustainable development. In today's global economy, access to digital 
                infrastructure, digital skills, and innovative digital solutions is paramount as it 
                unlocks new avenues for economic diversification, attraction of investments, 
                and increase in competitiveness.

                Throughout the development of this Advocacy Action Plan, we actively 
                engaged stakeholders from the government, private sector, academia, and 
                civil society. Their input ensured a comprehensive and inclusive approach 
                and was also integral in shaping the strategies and initiatives expressed in 
                the draft document 
              `,
      documentUrl: "https://jigawa-state.s3.us-east-1.amazonaws.com/digital-job-playbook.pdf",
        policyUrl: "/policies/digital-job-playbook"
    },
    {
      id: 5,
      title: "Intergrating GovTech Solution",
      description: `
      The executive summary provides an overview of the comprehensive 
        implementation framework for e-government tools in Jigawa state and includes 
        technology tools for Government-to-Government (G2G), Government-to-Business 
        (G2B), and Government-to-Citizen (G2C). E-government tools refer to technology 
        solutions and platforms the government uses to improve governance, streamline 
        service delivery and encourage citizen engagement
      `,
      documentUrl: "https://jigawa-state.s3.us-east-1.amazonaws.com/intergrating-govTech-solution.pdf",
        policyUrl: "/policies/integrating-govtech-solution"
    },
    {
      id: 6, 
      title: "Jigawa Digital Economy Plans and Strategies",
      description: `
        That we would collaborate with the National Information Technology 
        Development Agency (NITDA) to implement the State ICT Master Plan, 
        promote e-governance, and the gradual emergence of the digital economy. 
        Part of our resolve in this respect is to ensure that Jigawa State reaps the 
        dividends of the fourth industrial revolution through the vigorous pursuit of 
        innovation and technology
       `,
      documentUrl: "https://jigawa-state.s3.us-east-1.amazonaws.com/jigawa-digital-economy-plans-and-strategies.pdf",
        policyUrl: "/policies/jigawa-digital-economy-plans-and-strategies"
    },
    {
      id: 7,
      title: "Right Of Way Cost Reduction Recommedations",
      description: `
        This draft Action Plan for Policy and Regulatory Reforms on Right-of-Way (RoW) in 
        Jigawa State outlines the vision and mission to reduce the cost of internet Right–
        of–Way (RoW) and foster affordable and inclusive connectivity for all. The action 
        plan objectives include expanding broadband access, enhancing affordability, 
        promoting capacity building and digital skills development, establishing favorable 
        policies and regulatory frameworks, and encouraging collaboration and 
        partnerships.


        In achieving these objectives, the aim is to create a scenario where affordable and 
        accessible internet connectivity is available to all, breaking down barriers and 
        ensuring inclusivity in the digital world. This action plan identifies key stakeholders, 
        suggests institutional arrangements, and outlines a timeline for implementation 
        over the next 1-5 years.

        The action plan takes cognizance of the numerous opportunities associated with 
        the reduction of Right-of-WAY costs, such as job creation, economic growth, social 
        well-being, increased revenue generation, smart agriculture, productivity 
        enhancement, social inclusion, creation of new market value chains, and attraction 
        of investors.

        To mitigate potential risks, strategies have been identified such as cost reduction of 
        Right-of-Way, increased infrastructure development, and faster deployment. These 
        strategies are aimed at addressing challenges such as insufficient power supply, 
        potential revenue loss, unequal distribution of access to broadband connectivity, 
        and job opportunities.

        Key performance indicators to measure progress, including internet access across 
        the state, broadband penetration rates, number of jobs created, and increased 
        digital literacy levels over a period of 2(two) years have been effectively identified.

        By implementing this action plan, the primary goal is to establish an environment 
        that nurtures affordable and all-encompassing connectivity, leading to economic 
        growth, increased job opportunities, enhanced digital literacy, and greater social 
        inclusion. Through collaboration with stakeholders and the adoption of favorable 
        policies, the state strives to ensure that affordable and accessible internet 
        connectivity becomes a reality for all
      `,
      documentUrl: "https://jigawa-state.s3.us-east-1.amazonaws.com/right-of-way-cost-reduction-recommedations.pdf",
        policyUrl: "/policies/right-of-way-cost-reduction-recommedations"
    }
    
]

// Mock data for policies (increased to 25 for pagination demonstration)
// const policies = Array(25).fill(null).map((_, i) => ({
//   id: i + 1,
//   title: `Policy ${i + 1}`,
//   description: `This is a brief description of Policy ${i + 1}. It outlines important guidelines and regulations for the ICT and Digital Economy sector in Jigawa State.`,
//   documentUrl: `/path-to-policy-${i + 1}.pdf`
// }))

export default function PolicyPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const policiesPerPage = 20
  const totalPages = Math.ceil(policies.length / policiesPerPage)

  const indexOfLastPolicy = currentPage * policiesPerPage
  const indexOfFirstPolicy = indexOfLastPolicy - policiesPerPage
  const currentPolicies = policies.slice(indexOfFirstPolicy, indexOfLastPolicy)
  const [downloadError, setDownloadError] = useState<string | null>(null)



  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  return (
    <div className="min-h-screen bg-gray-50">
      <PagesBanner message='Jigawa State Policies' />
      <main className="container mx-auto px-4 py-12">
        <div className=" flex flex-col space-y-4">
          {currentPolicies.map((policy) => (
            <Card key={policy.id} className="flex flex-col">
              <CardHeader>
                <CardTitle className="text-2xl font-poppins text-center md:text-start font-semibold text-green-700">{policy.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-gray-600 text-lg text-justify">{policy.description}</CardDescription>
              </CardContent>
              <CardFooter className=' flex w-full justify-end'>
                {/* <Link href={policy.policyUrl} target="_blank" className=" bg-green-500 text-white px-6 py-2 rounded-lg">
                  <FileText className="mr-2 h-4 w-4" />
                    <p>View Full Policy</p>
                </Link> */}
                <Button asChild className="">
                  <a href={policy.documentUrl} target="_blank" rel="noopener noreferrer">
                    <FileText className="mr-2 h-4 w-4" />
                     View Full Policy
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="mt-12 flex justify-center items-center space-x-2">
            <Button
              variant="outline"
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              aria-label="Previous page"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <span className="text-sm font-medium">
              Page {currentPage} of {totalPages}
            </span>
            <Button
              variant="outline"
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
              aria-label="Next page"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        )}
      </main>
    </div>
  )
}