import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import PagesBanner from '../../components/PagesBanner'
import image1 from '@/public/img/jemis-progress-1.jpg'
import image2 from '@/public/img/jemis-progress-2.jpg'
import image3 from '@/public/img/jemis-progress-3.jpg'
import image4 from '@/public/img/jemis-progress-4.jpg'
import image5 from '@/public/img/jemis-progress-5.jpg'

const reportSections = [
  { id: 'summary',
    image: image1, 
    title: 'Executive Summary', content: 'This report provides an overview of the Jigawa Creating Opportunity for Mastery, Proficiency, and Technology Empowerment (J-COMPETE) Train the Trainer Program, a strategic initiative aimed at addressing learning poverty and advancing educational standards in Jigawa State through digital literacy, data-driven decision-making, and modern pedagogy.' },
  { id: 'intro',
    image: image2, 
    title: 'Introduction', content: 'The J-COMPETE initiative, supported by the Honourable Commissioner of Higher Education, Science and Technology, key directors, heads of agencies, and other technical advisers, is crucial in addressing these issues. The program focuses on increasing the proficiency of education managers in utilizing the Jigawa Education Management Information System (JEMIS) to track school performance and student achievement.' },
  { id: 'review',
    image: image3, 
    title: 'Review of Phase I and II', content: 'The Jigawa Education Management Information System (JEMIS) has been implemented in multiple phases to address the educational challenges within the state, particularly focused on data management, resource allocation, and improving learning outcomes.' },
  { id: 'planning',
    image: image4, 
    title: 'Planning Meeting', content: 'The Planning Meeting for the Jigawa Education Management Information System (JEMIS) was a critical step in aligning the strategic goals and operational details of the project. During this phase, key stakeholders from the Ministry of Education, local government representatives, donor agencies, and school administrators gathered to ensure that every aspect of the project was clearly defined and agreed upon.' },
  { id: 'trainers',
    image: image5, 
    title: 'Train The Trainees', content: 'The Train The Trainees was a critical phase in the implementation of J-Compete and the introduction of JEMIS, designed to ensure that key personnel had the necessary knowledge and skills to manage and utilize the system effectively.' },
  { id: 'stepdown',
    image: image1, 
    title: 'Stepdown Training', content: 'The Stepdown Training phase of the Jigawa Education Management Information System (JEMIS) was designed to ensure that the knowledge acquired during the Train The Trainees was effectively disseminated to a broader audience at the school and community levels.' },
  { id: 'enumeration',
    image: image2, 
    title: 'Enumeration Plan', content: 'The Enumeration Plan for the Jigawa Education Management Information System (JEMIS) was a comprehensive initiative aimed at gathering accurate, up-to-date data across all schools in Jigawa State.' },
  { id: 'achievements',
    image: image3, 
    title: 'Achievements', content: 'The Jigawa Education Management Information System (JEMIS) has marked several important achievements since its implementation, contributing to a more efficient and data-driven educational system across Jigawa State.' },
  { id: 'challenges',
    image: image4, 
    title: 'Challenges', content: 'Despite the significant achievements of the Jigawa Education Management Information System (JEMIS), several challenges emerged during its implementation. These challenges impacted the efficiency of the system and posed risks to the long-term sustainability of the initiative.' },
  { id: 'recommendations',
    image: image4, 
    title: 'Recommendations', content: 'To enhance the effectiveness and sustainability of the Jigawa Education Management Information System (JEMIS), several key recommendations are made, including strengthening infrastructure, enhancing capacity building, improving data accuracy, engaging stakeholders, securing long-term funding, promoting inclusivity, and scaling the system.' },
  { id: 'conclusion',
    image: image5, 
    title: 'Conclusion', content: `The Train the Trainer program under the J-COMPETE initiative marks a significant milestone in Jigawa State's efforts to tackle learning poverty, improve educational outcomes, and empower educators with the digital skills required for 21st-century teaching.` }
]

export default function JEMISProgressReport() {
  return (
    <div className=" mx-auto bg-gray-50">
      <PagesBanner message="Jigawa State ICT and Digital Economy Progress Report" />
      <main className="container max-w-6xl mx-auto px-4 py-12">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-green-700">JEMIS Progress Report</CardTitle>
          </CardHeader>
          <CardContent>
              <article className="prose prose-green max-w-none">
                {reportSections.map((section) => (
                  <section key={section.id} className="mb-8">
                    <h2 className="text-2xl font-bold text-green-600 mb-4">{section.title}</h2>
                    <p className="mb-4 text-justify">{section.content}</p>
                    <div className="w-full md:h-[600px] h-[300px] rounded-xl bg-gray-200 flex items-center justify-center text-gray-500 mb-4">
                      <Image
                        src={section.image}
                        alt={`Illustration for ${section.title}`}
                        width={512}
                        height={256}
                        className="object-cover h-full w-full rounded-xl"
                      />
                    </div>
                  </section>
                ))}
              </article>
              <div className=" font-poppins font-semibold">
                Download the full report <a target='_blank' href={'/documents/jemis-progress-report.pdf'} className="text-green-600 underline">here</a>
              </div>
          </CardContent>
      </main>

      {/* <footer className="bg-green-800 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>For more information about JEMIS, please contact the Jigawa State Ministry of Education.</p>
          <p className="mt-2">© 2024 Jigawa State Education Management Information System. All rights reserved.</p>
        </div>
      </footer> */}
    </div>
  )
}




// 'use client'

// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Progress } from "@/components/ui/progress"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, LineChart, Line } from 'recharts'
// import PagesBanner from "../components/PagesBanner"
// import JEMISProgressReport from "./_components/jemis"

// const digitalLiteracyData = [
//   { year: 2019, rate: 45 },
//   { year: 2020, rate: 52 },
//   { year: 2021, rate: 60 },
//   { year: 2022, rate: 68 },
//   { year: 2023, rate: 78 },
// ]

// const eGovernmentAdoptionData = [
//   { year: 2019, rate: 20 },
//   { year: 2020, rate: 28 },
//   { year: 2021, rate: 35 },
//   { year: 2022, rate: 45 },
//   { year: 2023, rate: 53 },
// ]

// const ictInfrastructureData = [
//   { year: 2019, coverage: 30 },
//   { year: 2020, coverage: 40 },
//   { year: 2021, coverage: 50 },
//   { year: 2022, coverage: 60 },
//   { year: 2023, coverage: 68 },
// ]

// const keyInitiatives = [
//   { name: "Digital Literacy Programs", progress: 85 },
//   { name: "E-Government Services Implementation", progress: 70 },
//   { name: "ICT Infrastructure Expansion", progress: 75 },
//   { name: "Cybersecurity Measures", progress: 60 },
//   { name: "Innovation Hub Development", progress: 50 },
// ]

// export default function ProgressReport() {
//   return (
//     <div className="min-h-screen bg-gray-50">
//       <PagesBanner message="Jigawa State ICT and Digital Economy Progress Report" />

//       <JEMISProgressReport />

//       {/* <main className="container mx-auto px-4 py-12">
//         <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
//           <Card>
//             <CardHeader>
//               <CardTitle>Digital Literacy Rate</CardTitle>
//               <CardDescription>Current digital literacy rate in Jigawa State</CardDescription>
//             </CardHeader>
//             <CardContent>
//               <div className="text-4xl font-bold text-green-600">78%</div>
//               <p className="text-sm text-gray-500 mt-2">↑ 33% since 2019</p>
//             </CardContent>
//           </Card>
//           <Card>
//             <CardHeader>
//               <CardTitle>E-Government Adoption</CardTitle>
//               <CardDescription>Percentage of government services available online</CardDescription>
//             </CardHeader>
//             <CardContent>
//               <div className="text-4xl font-bold text-green-600">53%</div>
//               <p className="text-sm text-gray-500 mt-2">↑ 33% since 2019</p>
//             </CardContent>
//           </Card>
//           <Card>
//             <CardHeader>
//               <CardTitle>ICT Infrastructure Coverage</CardTitle>
//               <CardDescription>Percentage of state with access to high-speed internet</CardDescription>
//             </CardHeader>
//             <CardContent>
//               <div className="text-4xl font-bold text-green-600">68%</div>
//               <p className="text-sm text-gray-500 mt-2">↑ 38% since 2019</p>
//             </CardContent>
//           </Card>
//         </div>

//         <Tabs defaultValue="literacy" className="mb-12">
//           <TabsList className="grid w-full grid-cols-3">
//             <TabsTrigger value="literacy">Digital Literacy</TabsTrigger>
//             <TabsTrigger value="egovernment">E-Government</TabsTrigger>
//             <TabsTrigger value="infrastructure">ICT Infrastructure</TabsTrigger>
//           </TabsList>
//           <TabsContent value="literacy">
//             <Card>
//               <CardHeader>
//                 <CardTitle>Digital Literacy Progress</CardTitle>
//                 <CardDescription>Yearly improvement in digital literacy rates</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <div className="h-[300px]">
//                   <ResponsiveContainer width="100%" height="100%">
//                     <LineChart data={digitalLiteracyData}>
//                       <XAxis dataKey="year" />
//                       <YAxis />
//                       <Tooltip />
//                       <Legend />
//                       <Line type="monotone" dataKey="rate" stroke="#10B981" strokeWidth={2} />
//                     </LineChart>
//                   </ResponsiveContainer>
//                 </div>
//               </CardContent>
//             </Card>
//           </TabsContent>
//           <TabsContent value="egovernment">
//             <Card>
//               <CardHeader>
//                 <CardTitle>E-Government Adoption Progress</CardTitle>
//                 <CardDescription>Yearly improvement in e-government service adoption</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <div className="h-[300px]">
//                   <ResponsiveContainer width="100%" height="100%">
//                     <LineChart data={eGovernmentAdoptionData}>
//                       <XAxis dataKey="year" />
//                       <YAxis />
//                       <Tooltip />
//                       <Legend />
//                       <Line type="monotone" dataKey="rate" stroke="#10B981" strokeWidth={2} />
//                     </LineChart>
//                   </ResponsiveContainer>
//                 </div>
//               </CardContent>
//             </Card>
//           </TabsContent>
//           <TabsContent value="infrastructure">
//             <Card>
//               <CardHeader>
//                 <CardTitle>ICT Infrastructure Coverage Progress</CardTitle>
//                 <CardDescription>Yearly improvement in high-speed internet coverage</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <div className="h-[300px]">
//                   <ResponsiveContainer width="100%" height="100%">
//                     <BarChart data={ictInfrastructureData}>
//                       <XAxis dataKey="year" />
//                       <YAxis />
//                       <Tooltip />
//                       <Legend />
//                       <Bar dataKey="coverage" fill="#10B981" />
//                     </BarChart>
//                   </ResponsiveContainer>
//                 </div>
//               </CardContent>
//             </Card>
//           </TabsContent>
//         </Tabs>

//         <Card className="mb-12">
//           <CardHeader>
//             <CardTitle>Key Initiatives Progress</CardTitle>
//             <CardDescription>Current status of major ICT and Digital Economy projects</CardDescription>
//           </CardHeader>
//           <CardContent>
//             <div className="space-y-4">
//               {keyInitiatives.map((initiative) => (
//                 <div key={initiative.name}>
//                   <div className="flex justify-between mb-1">
//                     <span className="text-sm font-medium">{initiative.name}</span>
//                     <span className="text-sm font-medium">{initiative.progress}%</span>
//                   </div>
//                   <Progress value={initiative.progress} className="h-2" />
//                 </div>
//               ))}
//             </div>
//           </CardContent>
//         </Card>

//         <Card>
//           <CardHeader>
//             <CardTitle>Future Goals</CardTitle>
//             <CardDescription>Upcoming targets for ICT and Digital Economy in Jigawa State</CardDescription>
//           </CardHeader>
//           <CardContent>
//             <ul className="list-disc pl-5 space-y-2">
//               <li>Achieve 90% digital literacy rate by 2025</li>
//               <li>Implement e-government services for 80% of government processes by 2026</li>
//               <li>Extend high-speed internet coverage to 95% of the state by 2027</li>
//               <li>Establish innovation hubs in all local government areas</li>
//               <li>Launch a state-wide cybersecurity awareness program</li>
//             </ul>
//           </CardContent>
//         </Card>
//       </main> */}

//       {/* <footer className="bg-green-800 text-white py-8 mt-12">
//         <div className="container mx-auto px-4 text-center">
//           <p>For more detailed progress reports, please contact the JICTDE office.</p>
//           <p className="mt-2">© 2023 Jigawa State ICT and Digital Economy. All rights reserved.</p>
//         </div>
//       </footer> */}
//     </div>
//   )
// }