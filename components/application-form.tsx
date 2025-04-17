"use client"

import type React from "react"

import { useState } from "react"
// import { submitApplication } from "@/app/actions"
import { submitApplication } from "@/actions/applications"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { toast } from "@/components/ui/use-toast"
import { toast } from "sonner"
import { Loader2 } from "lucide-react"

interface ApplicationFormProps {
  student: {
    serialNumber: number
    studentId: string
    studentName: string
    certificateAwarded: string
    yearOfGraduation: number
    classOfAward: string
    localGovtArea: string
  }
}

export function ApplicationForm({ student }: ApplicationFormProps) {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    address: "",
    qualification: student.certificateAwarded,
    experience: "",
    skills: "",
    interest: "",
    employmentStatus: "",
    placeOfWork: "",
    jigawaStateGovtEmployment: "",
    studentId: student.studentId,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const result = await submitApplication({
        ...formData,
        studentId: student.studentId,
        studentName: student.studentName,
        localGovtArea: student.localGovtArea,
        yearOfGraduation: student.yearOfGraduation,
        classOfAward: student.classOfAward,
      })

      if (result.success) {
        toast("Application Submitted", {
          description: "Your application has been submitted successfully.",
          className: "border-green-500 border text-green-700 bg-green-50",
        })
      } else {
        toast("Submission Failed", {
          description: result.error || "Failed to submit application. Please try again.",
          className: "border border-red-500 text-red-700 bg-red-50",
        })
      }
    } catch (error) {
      toast("Error", {
        description: "An error occurred while submitting your application. Please try again.",
        className: "border border-red-500 text-red-700 bg-red-50",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Application Form</h2>
        <p className="text-gray-600">
          Please complete the application form below to apply for the ICT and Digital Economy Skills Development
          Program.
        </p>
      </div>

      <div className="p-4 bg-green-50 border border-green-200 rounded-md mb-6">
        <h3 className="font-medium text-green-800">Verified Student Information</h3>
        <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <span className="font-medium">Name:</span> {student.studentName}
          </div>
          <div>
            <span className="font-medium">Student ID:</span> {student.studentId}
          </div>
          <div>
            <span className="font-medium">Certificate:</span> {student.certificateAwarded}
          </div>
          <div>
            <span className="font-medium">Year of Graduation:</span> {student.yearOfGraduation}
          </div>
          <div>
            <span className="font-medium">Class of Award:</span> {student.classOfAward}
          </div>
          <div>
            <span className="font-medium">Local Govt Area:</span> {student.localGovtArea}
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className=" grid  gap-6">
        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email address"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="employmentStatus">Employment Status</Label>
          <Input
            id="employmentStatus"
            name="employmentStatus"
            type="tel"
            value={formData.employmentStatus}
            onChange={handleChange}
            placeholder="Emplowment Status"
            required
          />
        </div>


        <div className="space-y-2">
          <Label htmlFor="phone">Place of Work</Label>
          <Input
            id="placeOfWork"
            name="placeOfWork"
            type="text"
            value={formData.placeOfWork}
            onChange={handleChange}
            placeholder="What is your current place of work?"
            required
          />
        </div>


       

        <div className="space-y-2">
          <Label htmlFor="qualification">Highest Qualification</Label>
          <Input
            id="qualification"
            name="qualification"
            value={formData.qualification}
            onChange={handleChange}
            placeholder="Enter your highest qualification"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="skills">Technical Skills</Label>
          <Input
            id="skills"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            placeholder="List your technical skills"
            required
          />
        </div>

        <div className="space-y-2 ">
          <Label htmlFor="experience">Work Experience</Label>
          <Textarea
            id="experience"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            placeholder="Describe your relevant work experience"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="address">Current Address</Label>
          <Textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter your current address"
            required
          />
        </div>
      
        <div className="space-y-2">
          <Label htmlFor="jigawaStateGovtEmployment">Are you Employed by Jigawa State Government?</Label>
          <Select
            name="jigawaStateGovtEmployment"
            value={formData.jigawaStateGovtEmployment}
            onValueChange={(value) => handleSelectChange("jigawaStateGovtEmployment", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Are you employed by the state government?" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="YES">Yes</SelectItem>
              <SelectItem value="NO">No</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting...
            </>
          ) : (
            "Submit Application"
          )}
        </Button>
      </form>
    </div>
  )
}
