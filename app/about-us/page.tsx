
import Image from "next/image"
import jigawaLogo from '@/app/assets/images/jg-logo-white.png'
import Team from "../components/Team"
import PagesBanner from "../components/PagesBanner"

export default function AboutUs() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <PagesBanner  message="Jigawa State ICT and Digital Economy"/>

       <div className=" w-full bg-gray-100">
          <div className=" max-w-6xl py-10 md:py-20 grid gap-x-6 gap-y-3 grid-cols-1 md:grid-cols-2 w-full mx-auto">
              <div className=" flex py-6 justify-center px-4 flex-col space-y-4">
                <h1 className=" uppercase text-xl font-semibold max-w-max border-b-2 border-green-900">Vision</h1>
                <p className=" font-poppins">
                  To transform Jigawa into a leading digital economy state in Nigeria
                  providing quality life and digital economies for all.
                </p>
              </div>
              <div className="flex py-6 justify-center px-4 flex-col space-y-4">
                <h1 className=" uppercase text-xl font-semibold max-w-max border-b-2 border-green-900">Mission</h1>
                  <p className=" font-poppins">
                    To build a state where digital innovation and entrepreneurship are
                    leveraged to create value and prosperity for all
                  </p>
              </div>
        </div>

       </div>
      <Team />
    </div>
  )
}