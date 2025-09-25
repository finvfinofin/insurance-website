// src/app/page.tsx
import Header from "@/components/insurance/header";
import Footer from "@/components/common/footer";
import BannerSection from "@/components/BannerSection";
import AnimatedSections from "@/components/product/animatedSection";
import SectionFooter from "@/components/product/sectionFooter";
import Carousel from "@/components/ui/molecules/carousel";

import headerData from "../data/headerData.json";
import footerDataRaw from "../data/footerData.json";
import insurancePageData from "../data/insurancePageData.json";
import { IPageContent, ISection } from "@/utils/types";

// Normalize footer data
const footerData = {
  ...footerDataRaw,
  partners_certifications:
    footerDataRaw.partners_certifications?.map((p: any) => ({
      imageUrl: p.imageUrl || "",
      fileUrl: p.fileUrl || "",
    })) || [],
};

export default function InsurancePage() {
  // Separate slides & sections
  const slider: ISection[] =
    insurancePageData.section
      ?.filter((s: any) => s.isSlide)
      .map((s: any) => ({
        ...s,
        align: ["left", "right", "center"].includes(s.align) ? s.align : "left",
      })) || [];

  const sections: ISection[] =
    insurancePageData.section
      ?.filter((s: any) => !s.isSlide) // exclude slides
      .slice(1) // skip banner
      .map((s: any) => ({
        ...s,
        align: ["left", "right", "center"].includes(s.align) ? s.align : "left",
      })) || [];

  const pageContent: IPageContent = {
    banner: insurancePageData.section?.[0] || {},
    sections,
    slider,
    card: insurancePageData.list?.[0] || {},
  };

  return (
    <main className="mx-auto invest">
      <Header data={headerData} />

      {/* Banner */}
      {pageContent.banner && <BannerSection {...pageContent.banner} />}

      {/* Carousel (all slides in one component) */}
      {pageContent.slider.length > 0 && (
        <section>
          <Carousel slides={pageContent.slider} />
        </section>
      )}

      {/* Other sections */}
      {pageContent.sections.map((value: ISection, index: number) => (
        <section key={index}>
          <AnimatedSections {...value} />
        </section>
      ))}

      {/* Footer */}
      {pageContent.card && (
        <>
          <div className="relative h-15 md:h-[200px]"></div>
          <div className="footer bg-dark-gunmetal relative flex flex-col">
            <SectionFooter {...pageContent.card} />
            <Footer data={footerData} />
          </div>
        </>
      )}
    </main>
  );
}
