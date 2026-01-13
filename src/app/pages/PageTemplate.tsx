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

interface PageTemplateProps {
  contentData: any;
}

/**
 * Универсальный шаблон страницы
 * Использует JSON данные для отображения всех секций
 */
export function PageTemplate({ contentData }: PageTemplateProps) {
  return (
    <Layout>
      <div className="flex flex-col gap-[140px] items-start">
        <HeroSection data={contentData.hero} />
        <CapabilitiesSection data={contentData.capabilities} />
        <AdvantagesSection data={contentData.advantages} />
        <ServicesSection data={contentData.services} />
        <MaterialsSection data={contentData.materials} />
        <ProductsSection data={contentData.products} />
        <TimelineSection data={contentData.timeline} />
        <GuaranteesSection data={contentData.guarantees} />
        <WorkflowSection data={contentData.workflow} />
        <CertificatesSection data={contentData.certificates} />
        <GallerySection data={contentData.gallery} />
        <ContactSection data={contentData.contact} />
      </div>
    </Layout>
  );
}
