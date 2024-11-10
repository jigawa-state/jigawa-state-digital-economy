'use client'
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, FileText, Link } from "lucide-react"
import PagesBanner from '../components/PagesBanner'




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
        description: "This is a brief description of Policy 1. It outlines important guidelines and regulations for the ICT and Digital Economy sector in Jigawa State.",
        documentUrl: "/documents/5th-govts-inaugural-speach.pdf",
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
      documentUrl: "/documents/adoption-of-national-broadband-plan.pdf",
        policyUrl: "/policies/adoption-of-national-broadband-plan"
    },
    {
      id: 3,
      title: "Jigawa egovt master plan",
      description: "This is a brief description of Policy 1. It outlines important guidelines and regulations for the ICT and Digital Economy sector in Jigawa State.",
      documentUrl: "/documents/jigawa-egovt-master-plan.pdf",
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
      documentUrl: "/documents/digital-job-playbook.pdf",
        policyUrl: "/policies/digital-job-playbook"
    },
    {
      id: 5,
      title: "Intergrating GovTech Solution",
      description: "Intergrating GovTech Solution. It outlines important guidelines and regulations for the ICT and Digital Economy sector in Jigawa State.",
      documentUrl: "/documents/intergrating-govtech-solution.pdf",
        policyUrl: "/policies/integrating-govtech-solution"
    },
    {
      id: 6, 
      title: "Jigawa Digital Economy Plans and Strategies",
      description: " Jigawa Digital Economy Plans and Strategies. It outlines important guidelines and regulations for the ICT and Digital Economy sector in Jigawa State.",
      documentUrl: "/documents/jigawa-digital-economy-plans-and-strategies.pdf",
        policyUrl: "/policies/jigawa-digital-economy-plans-and-strategies"
    },
    {
      id: 7,
      title: "Right Of Way Cost Reduction Recommedations",
      description: "Right Of Way Cost Reduction Recommedaations. It outlines important guidelines and regulations for the ICT and Digital Economy sector in Jigawa State.",
      documentUrl: "/documents/right-of-way-cost-reduction-recommedaations.pdf",
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
      <PagesBanner message='' />
      <main className="container mx-auto px-4 py-12">
        <div className=" flex flex-col space-y-4">
          {currentPolicies.map((policy) => (
            <Card key={policy.id} className="flex flex-col">
              <CardHeader>
                <CardTitle className="text-2xl font-poppins font-semibold text-green-700">{policy.title}</CardTitle>
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

      <footer className="bg-green-800 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>For more information on our policies, please contact the JICTDE office.</p>
          <p className="mt-2">© 2023 Jigawa State ICT and Digital Economy. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}