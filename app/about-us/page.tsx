
import Image from "next/image"
import jigawaLogo from '@/app/assets/images/jg-logo-white.png'
import Team from "../components/Team"
import PagesBanner from "../components/PagesBanner"

export default function AboutUs() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <PagesBanner  message="Jigawa State ICT and Digital Economy"/>

      <div className="">
        
      </div>
      <Team />
    </div>
  )
}