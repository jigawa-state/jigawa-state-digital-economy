
import { Card, CardContent } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function DeputyGovernorBiography() {
  return (
    <div className="min-h-screen">

      <main className="container mx-auto px-4 py-12">
        <Card className="max-w-6xl mx-auto">
          <CardContent>
            <ScrollArea className="h-full py-10 pr-4">
              <div className="space-y-4">
                <section>
                  <h2 className="text-2xl font-bold text-green-700 mb-2">Personal Information</h2>
                  <p>
                    Born in 1963, Alhaji Aminu Usman is a certified Electrical Engineer. He is an indigene of Gumel Local Government area. Alhaji Aminu Usman is a widely travelled and married man with children.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-green-700 mb-2">Education</h2>
                  <p>
                    From 1982 to 2008, Alhaji Aminu Usman pursued his education at various institutions:
                  </p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Kano State Polytechnic (School of Technology)</li>
                    <li>Yaba College of Technology, Lagos</li>
                    <li>Bayero University, Kano</li>
                    <li>Certified Institute of Shipping of Nigeria, Lagos</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-green-700 mb-2">Professional Career</h2>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      Prior to his appointment as Commissioner of Works and Transport, he served as the Managing Director of Socar Talamiz Limited in Lagos.
                    </li>
                    <li>
                      Worked with the Federal Housing Authority, where he was given various assignments in Lagos and Abuja.
                    </li>
                    <li>
                      His last assignment at the Federal Housing Authority was as the Project Manager of the multi-billion Naira Gwarinpa Housing scheme in Abuja.
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-green-700 mb-2">Political and Public Service</h2>
                  <p>
                    Alhaji Aminu Usman has held various ad hoc assignments in his places of work and political parties, including:
                  </p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Member of the State Transition Committee</li>
                    <li>Member of the State Contracts Validation and Verification Committee</li>
                    <li>Secretary of the Transition Committee for Works and Transport</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-green-700 mb-2">Current Position</h2>
                  <p>
                    Alhaji Aminu Usman currently serves as the Deputy Governor of Jigawa State, bringing his wealth of experience in engineering, project management, and public service to support the state's development initiatives.
                  </p>
                </section>
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </main>

    
    </div>
  )
}