
import { Card, CardContent, } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function GovernorBiography() {
  return (
    <div className="m">

      <main className="container mx-auto px-4 py-12">
        <Card className="max-w-6xl mx-auto">
          <CardContent className=' py-10'>
            <ScrollArea className=" pr-4">
              <div className="space-y-4">
                <section>
                  <h2 className="text-2xl font-bold text-green-700 mb-2">Early Life and Education</h2>
                  <p>
                    Born into a family of religious scholars in Kafin-Hausa town of Kafin-Hausa Local Government Area of Jigawa State, Mallam Namadi started his education at Kafin Hausa Central Primary School. He combined this with traditional Qur'anic and Islamiyya education. His grandfather was the Chief Imam of Kafin-Hausa.
                  </p>
                  <p className="mt-2">
                    He proceeded to Mallam Madori Teachers College where he obtained his Teachers Grade II Certificate in 1982. In 1984, he passed his A Level Certificate examination with good grades, which helped him secure admission for undergraduate studies at Bayero University, Kano.
                  </p>
                  <p className="mt-2">
                    At Bayero University, he graduated with a BSc in Accounting in 1987 and later earned an MBA from the same institution.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-green-700 mb-2">Early Career</h2>
                  <p>
                    After graduation, Mallam Umar Namadi served in the National Youth Service Corps (NYSC) in Makurdi, Benue State, where he worked as an Audit Assistant at Egwu Oga & Co. auditing firm.
                  </p>
                  <p className="mt-2">
                    Between 1988 and 1994, he held various positions at Abdu Abdurrahim & Co. Chartered Accountants in Kano, including roles in Audit Management and Consultancy Services.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-green-700 mb-2">Career Progression</h2>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Worked briefly at the National Board for Community Banks as a Principal Inspection Officer.</li>
                    <li>Served in various capacities at Kaduna Textiles Limited.</li>
                    <li>Rose from Assistant General Manager of Finance to Financial Controller at Dangote Sugar Refinery and Dangote Group.</li>
                    <li>Between 2006 and 2013, worked with National Health Insurance Scheme (NHIS) as a General Manager of Finance & Accounts and General Manager of Contribution Management Department.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-green-700 mb-2">Private Sector Experience</h2>
                  <p>
                    After leaving public service, Mallam Umar Namadi ventured into business and private practice, holding positions such as:
                  </p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Managing Partner at Namadi, Umar & Co. Chartered Accountants</li>
                    <li>Chairman/CEO of Danmodi Food Processing Limited (Rice Millers)</li>
                    <li>Chairman/CEO of Danmodi Farms Limited</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-green-700 mb-2">Public Service</h2>
                  <p>
                    Before becoming the Deputy Governor of Jigawa State in 2019, Mallam Umar Namadi served as Commissioner of Finance and Economic planning in the state from 2015-2019. During his tenure, he championed several innovations in the management of the state's finances, improving efficiency and transparency.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-green-700 mb-2">Character and Reputation</h2>
                  <p>
                    Mallam Namadi's career in both the public and private sectors, as well as in the political realm, has been marked by his resourcefulness, high-level adherence to ethics, and persistence in following rules and doing the right things. This has established him as an incorruptible, honest, and hardworking professional in all his endeavors.
                  </p>
                </section>
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </main>

      <footer className="bg-green-800 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>For more information about Governor Mallam Umar Namadi, please contact the Jigawa State Government office.</p>
          <p className="mt-2">© 2023 Jigawa State Government. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}