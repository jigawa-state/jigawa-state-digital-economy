"use client"
import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download } from 'lucide-react'
import PagesBanner from '../../components/PagesBanner'
import {  ResponsiveContainer, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  Legend, 
  LineChart, 
  Line, 
  PieChart, 
  Pie, 
  Cell, 
  Sector } from 'recharts'

  
  const d = new Date();
    let year = d.getFullYear();

// Example data - replace with your actual data
const monthlyData = [
  { month: 'Jan', digitalLiteracy: 65, eGovernmentAdoption: 40, ictInfrastructure: 55 },
  { month: 'Feb', digitalLiteracy: 68, eGovernmentAdoption: 42, ictInfrastructure: 58 },
  { month: 'Mar', digitalLiteracy: 70, eGovernmentAdoption: 45, ictInfrastructure: 60 },
  { month: 'Apr', digitalLiteracy: 72, eGovernmentAdoption: 48, ictInfrastructure: 62 },
  { month: 'May', digitalLiteracy: 75, eGovernmentAdoption: 50, ictInfrastructure: 65 },
  { month: 'Jun', digitalLiteracy: 78, eGovernmentAdoption: 53, ictInfrastructure: 68 },
]

const budgetAllocation = [
  { name: 'ICT Infrastructure', value: 40 },
  { name: 'Digital Literacy Programs', value: 30 },
  { name: 'E-Government Services', value: 20 },
  { name: 'Cybersecurity', value: 10 },
]

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

export default function KPIPage() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [downloadError, setDownloadError] = useState<string | null>(null)

  const onPieEnter = (_: any, index: number) => {
    setActiveIndex(index)
  }

  
  const handleDownload = async () => {
    try {
      const response = await fetch('/documents/kip.xlsx')
      if (!response.ok) throw new Error('Failed to download file')
      
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.style.display = 'none'
      a.href = url
      a.download = 'kip.xlsx'
      document.body.appendChild(a)
      a.click()
      window.URL.revokeObjectURL(url)
      setDownloadError(null)
    } catch (error) {
      console.error('Download error:', error)
      setDownloadError('Failed to download the file. Please try again later.')
    }
  }


  return (
    <div className="min-h-screen bg-gray-50">
      <PagesBanner message='JICTDE Key Performance Indicators' />
      <main className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Digital Literacy Rate</CardTitle>
              <CardDescription>Current digital literacy rate in Jigawa State</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-green-600">78%</div>
              <p className="text-sm text-gray-500 mt-2">↑ 13% from last year</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>E-Government Adoption</CardTitle>
              <CardDescription>Percentage of government services available online</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-green-600">53%</div>
              <p className="text-sm text-gray-500 mt-2">↑ 8% from last quarter</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>ICT Infrastructure Coverage</CardTitle>
              <CardDescription>Percentage of state with access to high-speed internet</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-green-600">68%</div>
              <p className="text-sm text-gray-500 mt-2">↑ 5% from last quarter</p>
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-8 md:grid-cols-2 mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Monthly KPI Trends</CardTitle>
              <CardDescription>Progress of key metrics over the past 6 months</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={monthlyData}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="digitalLiteracy" stroke="#0088FE" strokeWidth={2} />
                    <Line type="monotone" dataKey="eGovernmentAdoption" stroke="#00C49F" strokeWidth={2} />
                    <Line type="monotone" dataKey="ictInfrastructure" stroke="#FFBB28" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Budget Allocation</CardTitle>
              <CardDescription>Distribution of ICT and Digital Economy budget</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      activeIndex={activeIndex}
                      activeShape={renderActiveShape}
                      data={budgetAllocation}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      onMouseEnter={onPieEnter}
                    >
                      {budgetAllocation.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}

                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Quarterly Performance Comparison</CardTitle>
            <CardDescription>Comparing key metrics across different quarters</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthlyData}>
                  <XAxis dataKey="month" />
                  <YAxis  />
                  <Tooltip/>
                  <Legend />
                  <Bar dataKey="digitalLiteracy" fill="#0088FE" />
                  <Bar dataKey="eGovernmentAdoption" fill="#00C49F" />
                  <Bar dataKey="ictInfrastructure" fill="#FFBB28" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

          <Card className="mt-12">
          <CardHeader>
            <CardTitle>Download Detailed KPI Report</CardTitle>
            <CardDescription>Access the full Excel spreadsheet with comprehensive KPI data</CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={handleDownload}>
              <Download className="mr-2 h-4 w-4" /> Download Excel Sheet
            </Button>
            {downloadError && <p className="text-red-500 mt-2">{downloadError}</p>}
          </CardContent>
        </Card>
      </main>

      {/* <footer className="bg-gray-100 text-green-900 py-3 mt-12">
        <div className="container mx-auto text-sm px-4 text-center">
          <p className=' font-poppins'>For more detailed KPI reports, please contact the JICTDE office.</p>
          <p className="mt-2 font-poppins">© {year} Jigawa State ICT and Digital Economy. All rights reserved.</p>
        </div>
      </footer> */}
    </div>
  )
}

const renderActiveShape = (props: any) => {
  const RADIAN = Math.PI / 180
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props
  const sin = Math.sin(-RADIAN * midAngle)
  const cos = Math.cos(-RADIAN * midAngle)
  const sx = cx + (outerRadius + 10) * cos
  const sy = cy + (outerRadius + 10) * sin
  const mx = cx + (outerRadius + 30) * cos
  const my = cy + (outerRadius + 30) * sin
  const ex = mx + (cos >= 0 ? 1 : -1) * 22
  const ey = my
  const textAnchor = cos >= 0 ? 'start' : 'end'

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`Value ${value}`}</text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
        {`(${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  )
}