import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle2, Users, Laptop, GraduationCap } from 'lucide-react'
import PagesBanner from "../components/PagesBanner"

export default function ImpactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PagesBanner message='Transforming Jigawa State through ICT and Digital Economy Initiatives' />

      <main className="container mx-auto flex flex-col space-y-6 px-4 py-12">
        <Tabs defaultValue="overview" className="space-y-4 rounded-lg py-6 flex-wrap">
          <TabsList className=" py-2 items-center px-3 justify-start ">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="digital-literacy">Digital Literacy</TabsTrigger>
            <TabsTrigger value="infrastructure">Infrastructure</TabsTrigger>
            <TabsTrigger value="economy">Economy</TabsTrigger>
          </TabsList>

          <TabsContent className=" mt-6" value="overview">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <ImpactCard
                icon={<Users className="h-8 w-8 text-green-600" />}
                title="Digital Inclusion"
                description="Increased access to digital services across all demographics"
                stat="250+"
                statDescription="Government Staffs"
              />
              <ImpactCard
                icon={<Laptop className="h-8 w-8 text-green-600" />}
                title="E-Government Services"
                description="Streamlined government processes and improved accessibility"
                stat="70+"
                statDescription="Services digitized"
              />
              <ImpactCard
                icon={<GraduationCap className="h-8 w-8 text-green-600" />}
                title="J-Compete"
                description="Education Information Management System"
                stat="4,000"
                statDescription="Teachers and Students Trained"
              />
            </div>
          </TabsContent>

          {/* <TabsContent value="digital-literacy">
            <Card>
              <CardHeader>
                <CardTitle>Digital Literacy Progress</CardTitle>
                <CardDescription>Tracking the improvement in digital skills across Jigawa State</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <ProgressItem label="Basic Computer Skills" progress={75} />
                  <ProgressItem label="Internet Usage" progress={68} />
                  <ProgressItem label="Mobile App Proficiency" progress={82} />
                  <ProgressItem label="Online Safety Awareness" progress={60} />
                </div>
              </CardContent>
            </Card>
          </TabsContent> */}

          {/* <TabsContent value="infrastructure">
            <Card>
              <CardHeader>
                <CardTitle>ICT Infrastructure Development</CardTitle>
                <CardDescription>Expanding digital access across Jigawa State</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <ProgressItem label="Broadband Coverage" progress={65} />
                  <ProgressItem label="Public Wi-Fi Hotspots" progress={40} />
                  <ProgressItem label="School Computer Labs" progress={55} />
                  <ProgressItem label="Community ICT Centers" progress={30} />
                </div>
              </CardContent>
            </Card>
          </TabsContent> */}

          {/* <TabsContent value="economy">
            <Card>
              <CardHeader>
                <CardTitle>Economic Impact</CardTitle>
                <CardDescription>How ICT is driving economic growth in Jigawa State</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">New ICT-related Jobs Created</span>
                    <span className="text-green-600 font-bold">5,000+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Increase in GDP Contribution</span>
                    <span className="text-green-600 font-bold">2.5%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Tech Startups Launched</span>
                    <span className="text-green-600 font-bold">50+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Digital Transactions Growth</span>
                    <span className="text-green-600 font-bold">300%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent> */}
        </Tabs>

        {/* <Card className="mt-12">
          <CardHeader>
            <CardTitle>Success Stories</CardTitle>
            <CardDescription>Real-world examples of JICTDE's impact</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <SuccessStory
                title="Rural Connectivity Project"
                description="Connected 100 rural villages to high-speed internet, enabling access to e-learning and telemedicine services."
              />
              <SuccessStory
                title="Youth ICT Training Program"
                description="Trained 10,000 youth in various ICT skills, leading to a 30% increase in tech-related employment among participants."
              />
              <SuccessStory
                title="E-Agriculture Initiative"
                description="Launched a mobile app connecting farmers to markets, resulting in a 20% increase in agricultural productivity."
              />
            </div>
          </CardContent>
        </Card> */}
      </main>

    
    </div>
  )
}

interface ImpactCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  stat: string;
  statDescription: string;
}

function ImpactCard({ icon, title, description, stat, statDescription }: ImpactCardProps) {
  return (
    <Card>
      <CardHeader>
        <div className="flex px-10 items-center space-x-2">
          {icon}
          <CardTitle>{title}</CardTitle>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold text-green-600">{stat}</div>
        <p className="text-sm text-gray-500">{statDescription}</p>
      </CardContent>
    </Card>
  )
}

function ProgressItem({ label, progress }: { label: string; progress: number }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        <span className="text-sm font-medium">{label}</span>
        <span className="text-sm font-medium text-green-600">{progress}%</span>
      </div>
      <Progress value={progress} className="w-full" />
    </div>
  )
}

function SuccessStory({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex items-start space-x-2">
      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5" />
      <div>
        <h3 className="font-medium">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  )
}