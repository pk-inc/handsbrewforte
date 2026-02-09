import Hero from '@/components/sections/Hero'
import PartnersRegulators from '@/components/sections/PartnersRegulators'
import VisionMission from '@/components/sections/VisionMission'
import ValueProposition from '@/components/sections/ValueProposition'
import ProductsHighlight from '@/components/sections/ProductsHighlight'
import CorporateValues from '@/components/sections/CorporateValues'
import Testimonials from '@/components/sections/Testimonials'
import FAQ from '@/components/sections/FAQ'

export default function Home() {
  return (
    <>
      <Hero />
      <PartnersRegulators />
      <VisionMission />
      <ValueProposition />
      <ProductsHighlight />
      <CorporateValues />
      <Testimonials />
      <FAQ />
    </>
  )
}
