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

// Normalize footer data to satisfy types
const footerData = {
  ...footerDataRaw,
  partners_certifications:
    footerDataRaw.partners_certifications?.map((p: any) => ({
      imageUrl: p.imageUrl || "",
      fileUrl: p.fileUrl || "",
    })) || [],
};

export default function InsurancePage() {
  const sections: ISection[] =
    insurancePageData.section?.slice(1).map((s: any) => ({
      ...s,
      align:
        s.align === "left" || s.align === "right" || s.align === "center"
          ? s.align
          : "left",
    })) || [];

  const slider: ISection[] =
    insurancePageData.section
      ?.filter((s: any) => s.isSlide)
      .map((s: any) => ({
        ...s,
        align:
          s.align === "left" || s.align === "right" || s.align === "center"
            ? s.align
            : "left",
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
      {pageContent.banner && <BannerSection {...pageContent.banner} />}
      {pageContent.sections.map((value: ISection, index: number) =>
        !value.isSlide ? (
          <section key={index}>
            <AnimatedSections {...value} />
          </section>
        ) : (
          <section key={index}>
            <Carousel slides={pageContent.slider} />
          </section>
        )
      )}
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
