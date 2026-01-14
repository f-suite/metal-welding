import { Layout } from "../components/Layout";
import { PageContentProvider } from "../../contexts/PageContentContext";
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
  PricingTableSection,
} from "../components/sections";
import contentData from "../../content/gibka-metalla.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/slider.css";

export default function GibkaMetalla() {
  return (
    <PageContentProvider content={contentData}>
      <Layout>
        <div className="flex flex-col gap-16 sm:gap-20 md:gap-28 lg:gap-[140px] items-start">
          <HeroSection />
          <CapabilitiesSection />
          <AdvantagesSection />
          <ServicesSection />
          <MaterialsSection />
          <ProductsSection />
          <PricingTableSection />
          <TimelineSection />
          <GuaranteesSection />
          <WorkflowSection />
          <CertificatesSection />
          <GallerySection />
          <ContactSection />
        </div>
      </Layout>
    </PageContentProvider>
  );
}
