'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import Image from 'next/image'
import image1 from '@/public/img/jemis-progress-1.jpg'
import image2 from '@/public/img/jemis-progress-2.jpg'
import image3 from '@/public/img/jemis-progress-3.jpg'
import image4 from '@/public/img/jemis-progress-4.jpg'
import image5 from '@/public/img/jemis-progress-5.jpg'

const reportSections = [
  { 
    id: 'summary',
    title: 'Executive Summary', 
    content: 'This report provides an overview of the Jigawa Creating Opportunity for Mastery, Proficiency, and Technology Empowerment (J-COMPETE) Train the Trainer Program, a strategic initiative aimed at addressing learning poverty and advancing educational standards in Jigawa State through digital literacy, data-driven decision-making, and modern pedagogy.' ,
    imageUrl: image1,
  },
  { 
    id: 'intro',
    title: 'Introduction', 
    content: 'The J-COMPETE initiative, supported by the Honourable Commissioner of Higher Education, Science and Technology, key directors, heads of agencies, and other technical advisers, is crucial in addressing these issues. The program focuses on increasing the proficiency of education managers in utilizing the Jigawa Education Management Information System (JEMIS) to track school performance and student achievement.' ,
    imageUrl: image2,
  },
  { 
    id: 'review',
    title: 'Review of Phase I and II', 
    content: 'The Jigawa Education Management Information System (JEMIS) has been implemented in multiple phases to address the educational challenges within the state, particularly focused on data management, resource allocation, and improving learning outcomes.' ,
    imageUrl: image3,
  },
  { 
    id: 'planning',
    title: 'Planning Meeting', 
    content: 'The Planning Meeting for the Jigawa Education Management Information System (JEMIS) was a critical step in aligning the strategic goals and operational details of the project. During this phase, key stakeholders from the Ministry of Education, local government representatives, donor agencies, and school administrators gathered to ensure that every aspect of the project was clearly defined and agreed upon.' ,
    imageUrl: image4,
  },
  { 
    id: 'trainers',
    title: 'Train The Trainees', 
    content: 'The Train The Trainees was a critical phase in the implementation of J-Compete and the introduction of JEMIS, designed to ensure that key personnel had the necessary knowledge and skills to manage and utilize the system effectively.' ,
    imageUrl: image5,
  },
  { 
    id: 'stepdown',
    title: 'Stepdown Training', 
    content: 'The Stepdown Training phase of the Jigawa Education Management Information System (JEMIS) was designed to ensure that the knowledge acquired during the Train The Trainees was effectively disseminated to a broader audience at the school and community levels.' ,
    imageUrl: image2,
  },
  { 
    id: 'enumeration',
    title: 'Enumeration Plan', 
    content: 'The Enumeration Plan for the Jigawa Education Management Information System (JEMIS) was a comprehensive initiative aimed at gathering accurate, up-to-date data across all schools in Jigawa State.' ,
    imageUrl: image1,
  },
  { 
    id: 'achievements',
    title: 'Achievements', 
    content: 'The Jigawa Education Management Information System (JEMIS) has marked several important achievements since its implementation, contributing to a more efficient and data-driven educational system across Jigawa State.' ,
    imageUrl: image4,
  },
  { 
    id: 'challenges',
    title: 'Challenges', 
    content: 'Despite the significant achievements of the Jigawa Education Management Information System (JEMIS), several challenges emerged during its implementation. These challenges impacted the efficiency of the system and posed risks to the long-term sustainability of the initiative.' ,
    imageUrl: image4,
  },
  { 
    id: 'recommendations',
    title: 'Recommendations', 
    content: 'To enhance the effectiveness and sustainability of the Jigawa Education Management Information System (JEMIS), several key recommendations are made, including strengthening infrastructure, enhancing capacity building, improving data accuracy, engaging stakeholders, securing long-term funding, promoting inclusivity, and scaling the system.' ,
    imageUrl: image1,
  },
  { 
    id: 'conclusion',
    title: 'Conclusion', 
    content: `The Train the Trainer program under the J-COMPETE initiative marks a significant milestone in Jigawa State's efforts to tackle learning poverty, improve educational outcomes, and empower educators with the digital skills required for 21st-century teaching.` ,
    imageUrl: image2,
  }
]

export default function JEMISProgressReport() {
  const [activeTab, setActiveTab] = useState('summary')

  return (
    <div className="min-h-full bg-gray-50">
      <header className="bg-green-600 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">JEMIS Progress Report</h1>
          <p className="text-xl">Jigawa Education Management Information System</p>
        </div>
      </header>

      <main className="container mx-auto  py-12">
        <Card className="w-full px-4">
          <CardHeader>
            <CardTitle className=' text-2xl'>JEMIS Progress Report</CardTitle>
            <CardDescription className=' px-4 py-4 text-base text-justify'>Comprehensive overview of the Jigawa Education Management Information System implementation and impact</CardDescription>
          </CardHeader>
          <CardContent className=' w-full'>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full h-full">
              <ScrollArea className="w-full h-full">
                <TabsList className=" flex flex-wrap py-6 bg-gray-50 shadow-inner  px-2 w-full">
                  {reportSections.map((section) => (
                    <TabsTrigger key={section.id} value={section.id} className="px-3 py-1.5">
                      {section.title}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </ScrollArea>
              {reportSections.map((section) => (
                <TabsContent className=' p-0' key={section.id} value={section.id}>
                  <Card className=' px-4 py-4'>
                    <CardHeader>
                      <CardTitle className=' text-lg'>{section.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      {/* <ScrollArea className=""> */}
                        <div className="space-y-4 h-full">
                          <p>{section.content}</p>
                            <Image src={section.imageUrl} width={500} height={500} alt={section.title} className="w-full md:h-[80vh] h-96 object-cover" />
                        </div>
                      {/* </ScrollArea> */}
                    </CardContent>
                  </Card>
                </TabsContent>  
              ))}
            </Tabs>
             <div className=" py-4">
                 For more information about the JEMIS progress report. refer to the following document <a target='_blank' href="/documents/jemis-progress-report.pdf" download className="text-white mx-4 rounded-lg bg-green-600 py-2 px-3">JEMIS Progress Report</a>
             </div>
          </CardContent>
        </Card>
      </main>

     
    </div>
  )
}