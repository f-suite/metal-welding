import { Layout } from "../components/Layout";
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
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/slider.css";

export default function WeldingPage() {
  return (
    <Layout>
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
    </Layout>
  );
}
