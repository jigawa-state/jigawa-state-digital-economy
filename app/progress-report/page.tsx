'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, LineChart, Line } from 'recharts'
import PagesBanner from "../components/PagesBanner"

const digitalLiteracyData = [
  { year: 2019, rate: 45 },
  { year: 2020, rate: 52 },
  { year: 2021, rate: 60 },
  { year: 2022, rate: 68 },
  { year: 2023, rate: 78 },
]

const eGovernmentAdoptionData = [
  { year: 2019, rate: 20 },
  { year: 2020, rate: 28 },
  { year: 2021, rate: 35 },
  { year: 2022, rate: 45 },
  { year: 2023, rate: 53 },
]

const ictInfrastructureData = [
  { year: 2019, coverage: 30 },
  { year: 2020, coverage: 40 },
  { year: 2021, coverage: 50 },
  { year: 2022, coverage: 60 },
  { year: 2023, coverage: 68 },
]

const keyInitiatives = [
  { name: "Digital Literacy Programs", progress: 85 },
  { name: "E-Government Services Implementation", progress: 70 },
  { name: "ICT Infrastructure Expansion", progress: 75 },
  { name: "Cybersecurity Measures", progress: 60 },
  { name: "Innovation Hub Development", progress: 50 },
]

export default function ProgressReport() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PagesBanner message="Jigawa State ICT and Digital Economy Progress Report" />

      <main className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Digital Literacy Rate</CardTitle>
              <CardDescription>Current digital literacy rate in Jigawa State</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-green-600">78%</div>
              <p className="text-sm text-gray-500 mt-2">↑ 33% since 2019</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>E-Government Adoption</CardTitle>
              <CardDescription>Percentage of government services available online</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-green-600">53%</div>
              <p className="text-sm text-gray-500 mt-2">↑ 33% since 2019</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>ICT Infrastructure Coverage</CardTitle>
              <CardDescription>Percentage of state with access to high-speed internet</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-green-600">68%</div>
              <p className="text-sm text-gray-500 mt-2">↑ 38% since 2019</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="literacy" className="mb-12">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="literacy">Digital Literacy</TabsTrigger>
            <TabsTrigger value="egovernment">E-Government</TabsTrigger>
            <TabsTrigger value="infrastructure">ICT Infrastructure</TabsTrigger>
          </TabsList>
          <TabsContent value="literacy">
            <Card>
              <CardHeader>
                <CardTitle>Digital Literacy Progress</CardTitle>
                <CardDescription>Yearly improvement in digital literacy rates</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={digitalLiteracyData}>
                      <XAxis dataKey="year" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="rate" stroke="#10B981" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="egovernment">
            <Card>
              <CardHeader>
                <CardTitle>E-Government Adoption Progress</CardTitle>
                <CardDescription>Yearly improvement in e-government service adoption</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={eGovernmentAdoptionData}>
                      <XAxis dataKey="year" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="rate" stroke="#10B981" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="infrastructure">
            <Card>
              <CardHeader>
                <CardTitle>ICT Infrastructure Coverage Progress</CardTitle>
                <CardDescription>Yearly improvement in high-speed internet coverage</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={ictInfrastructureData}>
                      <XAxis dataKey="year" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="coverage" fill="#10B981" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Key Initiatives Progress</CardTitle>
            <CardDescription>Current status of major ICT and Digital Economy projects</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {keyInitiatives.map((initiative) => (
                <div key={initiative.name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">{initiative.name}</span>
                    <span className="text-sm font-medium">{initiative.progress}%</span>
                  </div>
                  <Progress value={initiative.progress} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Future Goals</CardTitle>
            <CardDescription>Upcoming targets for ICT and Digital Economy in Jigawa State</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>Achieve 90% digital literacy rate by 2025</li>
              <li>Implement e-government services for 80% of government processes by 2026</li>
              <li>Extend high-speed internet coverage to 95% of the state by 2027</li>
              <li>Establish innovation hubs in all local government areas</li>
              <li>Launch a state-wide cybersecurity awareness program</li>
            </ul>
          </CardContent>
        </Card>
      </main>

      {/* <footer className="bg-green-800 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>For more detailed progress reports, please contact the JICTDE office.</p>
          <p className="mt-2">© 2023 Jigawa State ICT and Digital Economy. All rights reserved.</p>
        </div>
      </footer> */}
    </div>
  )
}