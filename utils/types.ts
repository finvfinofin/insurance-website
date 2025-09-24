export interface IPageContent {
  sections: ISection[];
  card: any;
  slider: ISection[];
  banner: ISection | any;
}
export interface AboutPageContent {
  card: any;
  banner: ISection | any;
  brand: {
    content: { brandImage: string; title: string; description: string }[];
  };
  values: {
    title: string;
    description: string;
    List: { icon: string; title: string }[];
  };
  team: { title: string; description: string; teamImg: string };
  finImg: string;
  partners_certifications: { title: string; description: string };
}

export interface ISection {
  align: "left" | "right" | "center";
  cssClass?: string;
  isSlide?: boolean;
  slideImage?: string;
  name: string;
  name_mobile: string;
  header?: string;
  description?: string;
  data?: { title?: string; description?: string; icon?: string }[];
  description2?: string;
  bgvidfileUrl?: string;
  bgimgfileUrl?: string;
  rightanimationfileUrl?: string;
  headingImageFile?: string;
  htmlContent?: string;
  button?: { link: string; label: string; type: "button" | "rounded" | null };
  bulletedList: { title: string; bullet: string }[];
  subheading: { heading: string; heading2: string; image: string };
  isParallax: boolean;
}

export interface IInfoPage {
  banner: {
    title: string;
    description: string;
    cssClass: string;
    bgimgfileUrl?: string;
  };
  brand: {
    title: string;
    description: string;
    cssClass: string;
    content: { brandImage: string; title: string; description: string }[];
  };
  values: {
    title: string;
    description: string;
    cssClass: string;
    List: { title: string; description: string; icon: string }[];
  };
  team: {
    title: string;
    description: string;
    cssClass: string;
    teamImg: string;
  };
  card: any;
  finImg: string;
  partners_certifications: {
    title: string;
    description: string;
  };
}

export interface LottieFileType {
  fileName: string;
  jsonFile: string;
}
