import { Header } from "../components/Header";
import {
  HeroSection,
  CapabilitiesSection,
  AdvantagesSection,
  ServicesSection,
  MaterialsSection,
  ProductsSection,
  TimelineSection,
  GuaranteesSection,
  WorkflowSection,
  CertificatesSection,
  GallerySection,
  ContactSection,
} from "../components/sections";
import contentData from "../../content/welding.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/slider.css";

function MainContent() {
  return (
    <div className="flex flex-col gap-[140px] items-start">
      <HeroSection />
      <CapabilitiesSection />
      <AdvantagesSection />
      <ServicesSection />
      <MaterialsSection />
      <ProductsSection />
      <TimelineSection />
      <GuaranteesSection />
      <WorkflowSection />
      <CertificatesSection />
      <GallerySection />
      <ContactSection />
    </div>
  );
}

export default function WeldingPage() {
  return (
    <div className="bg-white relative size-full" data-name="Сварка металла">
      <div className="w-full max-w-[1385px] mx-auto p-[26px] pt-[124px]">
        <MainContent />
        <p className="font-['Montserrat',sans-serif] font-bold leading-[100%] tracking-[0%] not-italic text-[40px] text-black text-nowrap uppercase mt-[98px] mb-[20px] text-center">
          {contentData.footer.text}
        </p>
      </div>
      <Header />
    </div>
  );
}
