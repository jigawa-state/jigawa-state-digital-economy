"use client"

import type React from "react"

import { useState } from "react"
import { ApplicationForm } from "./application-form"
// import { validateStudent } from "@/app/actions"
import { validateStudent } from "@/actions/applications"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Loader2 } from "lucide-react"
import { toast } from "sonner"

type ValidationMethod = "studentId" | "nameAndLga"

export function ValidationForm() {
  const [validationMethod, setValidationMethod] = useState<ValidationMethod>("studentId")
  const [studentId, setStudentId] = useState("")
  const [studentName, setStudentName] = useState("")
  const [localGovtArea, setLocalGovtArea] = useState("")
  const [validatedStudent, setValidatedStudent] = useState<any>(null)
  const [isValidating, setIsValidating] = useState(false)
  const [validationError, setValidationError] = useState<string | null>(null)

  const handleValidation = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsValidating(true)
    setValidationError(null)

    try {
      const result = await validateStudent({
        method: validationMethod,
        studentId,
        studentName,
        localGovtArea,
      })

      if (result.success) {
        setValidatedStudent(result.student)
        toast("Validation Successful", {
          description: "You are eligible to apply for this program.",
        })
      } else {
        // @ts-ignore
        setValidationError(result.error)
        toast(`Validation Failed`, {
            description: result.error,
        })
      }
    } catch (error) {
      setValidationError("An error occurred during validation. Please try again.")
      toast( "Error", {
        description: "An error occurred during validation. Please try again."
      })
    } finally {
      setIsValidating(false)
    }
  }

  if (validatedStudent) {
    return <ApplicationForm student={validatedStudent} />
  }

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Verify Your Eligibility</h2>
        <p className="text-gray-600">Please verify your eligibility by providing your student information.</p>
      </div>

      <form onSubmit={handleValidation} className="space-y-6">
        <RadioGroup
          value={validationMethod}
          onValueChange={(value) => setValidationMethod(value as ValidationMethod)}
          className="flex flex-col space-y-4"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="studentId" id="studentId" />
            <Label htmlFor="studentId">Validate by Student ID</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="nameAndLga" id="nameAndLga" />
            <Label htmlFor="nameAndLga">Validate by Name and Local Government Area</Label>
          </div>
        </RadioGroup>

        {validationMethod === "studentId" ? (
          <div className="space-y-2">
            <Label htmlFor="studentIdInput">Student ID</Label>
            <Input
              id="studentIdInput"
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
              placeholder="Enter your Student ID (e.g., 2308-1302-0005)"
              required
            />
          </div>
        ) : (
          <>
            <div className="space-y-2">
              <Label htmlFor="studentNameInput">Full Name</Label>
              <Input
                id="studentNameInput"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                placeholder="Enter your full name (e.g., ADAMU SHUAIBU)"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lgaInput">Local Government Area</Label>
              <Input
                id="lgaInput"
                value={localGovtArea}
                onChange={(e) => setLocalGovtArea(e.target.value)}
                placeholder="Enter your Local Government Area (e.g., KAZAURE)"
                required
              />
            </div>
          </>
        )}

        {validationError && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-md text-red-700">{validationError}</div>
        )}

        <Button type="submit" className="w-full" disabled={isValidating}>
          {isValidating ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Validating...
            </>
          ) : (
            "Verify Eligibility"
          )}
        </Button>
      </form>
    </div>
  )
}
