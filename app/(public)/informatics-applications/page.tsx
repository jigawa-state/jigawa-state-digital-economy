// import { ValidationForm } from "@/components/validation-form"
// import { ValidationForm } from "@/app/components/validation-form"
import PagesBanner from "@/app/components/PagesBanner"
import { ValidationForm } from "@/components/validation-form"

export default function ApplicationPage() {
  return (
    <div className="flex flex-col py-12">
      <PagesBanner subtitle="Office of The Technical Adviser on ICT and Digital Economy in Collaboration with Ministry of Higher Education, Science and Technology" message="Jigawa State Government ICT and Digital Economy Skills Development" />
      <div className="container py-10 mx-auto px-4">
        <div className=" mx-auto max-w-4xl flex flex-col space-y-4">
          <div className="p-6 text-center bg-green-200/20 rounded-lg border-green-800/50 border text-green-700">
            <h1 className="text-2xl font-bold">Jigawa State Government ICT and Digital Economy Skills Development</h1>
            <p className="mt-2">Informatics Institute Advanced Diploma Graduate Data Collection</p>
          </div>
          <div className="p-6 bg-white border rounded-lg border-green-700/70 shadow-md">
            <ValidationForm />
          </div>
        </div>
      </div>
    </div>
  )
}
